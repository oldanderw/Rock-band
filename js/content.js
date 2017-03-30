  let xhr = new XMLHttpRequest()
  xhr.onload = function() {
    const json = JSON.parse(xhr.responseText);
    const {news, events, members, about, copy, latest} =  JSON.parse(xhr.responseText);

    class Post {
      constructor() {
        this.text = ``;
        this.query = "";
        this.date = [];
      }
      add(input, length = 0){
          if(length === 0){
            this.text += input;
          }else{
            this.text = input.text.substring(0,length);

        }
        return this.text;
      }
      commit(tag){
        this.query = document.querySelector(tag);
        this.query.innerHTML = this.text;
      }
      addDate(date){
        //      the old way
        //      str = posts[i].postDate // 2016-11-18
        //      res = str.split("-")
        //      res[1] //11
        //      res[2] //18
        //      res[0] //2016
          // 2016-11-18
         this.date = date.split("-")
          // date[0] is year, date[1] is month, date[2] is day
      }
      clear() {
         this.text = "";
      }
    }
    if (xhr.status === 200) {
      if(document.querySelector('#Latest')!=null){
        let post = new Post();
        console.log
        post.add(`
         <h1>${latest.single}</h1>
         <p>${latest.album}</p>
        <audio preload controls>
          <source src="${latest.song}" type="audio/mpeg">
        </audio>
         <a href="#">Buy Album</a>`);
        post.commit('#Latest');
      }
      if (document.querySelector('#about') != null ) {
        let post = new Post();
        post.add(`
         <h1>About us</h1>
         <blockquote>${about.quote}</blockquote>
         <p>${about.copy}</p>
         <img src="" alt="">`);
        post.commit('#about');
      }
      // if (document.querySelector('#quote') != null ) {
      //   let post = new Post();
      //   post.add(`
      //    <h1>About us</h1>
      //    <blockquote>${about.quote}</blockquote>
      //    <p>${about.copy}</p>
      //    <img src="" alt="">`);
      //   post.commit('#quote');
      // }if (document.querySelector('#awards') != null ) {
      //   let post = new Post();
      //   post.add(`
      //    <h1>About us</h1>
      //    <blockquote>${about.quote}</blockquote>
      //    <p>${about.copy}</p>
      //    <img src="" alt="">`);
      //   post.commit('#awards');
      // }
      if(document.querySelector('#bnews') != null){
        let post = new Post();
        post.add(`<h1 class="Lheader">Latest <strong>Band news</strong></h1>`);
        post.add(`<article class="f-news">
          <header>
            <p>${news[0].postDate}</p>
            <h2>${news[0].title}</h2>
          </header>
          <img src="${news[0].imageURL}" alt="">
        </article>`);
        for(var i = 1; i<5;i++){
        post.add(`
        <article>
          <header>
            <p>${news[i].postDate}</p>
            <h2>${news[i].title}</h2>
          </header>
          <img src="${news[i].imageURL}" alt="">
        </article>`);}
        post.commit('#bnews');
      }
      if(document.querySelector('#lEvents') != null){
        let post = new Post();
        post.add(`<h1 class="Rheader">Live <strong>Events</strong></h1>
         <table border="0" cellpadding="0" cellspacing="0">`)
         for(i=0;i<4;i++){
           post.add(`
           <tr>
             <td><p>${events[i].date}</p></td>
             <td><p>${events[i].city},${events[i].state}</p><p>${events[i].venue}</p></td>
             <td><a href="${events[i].locationURL}">google maps location</a></td>
             <td><a href="${events[i].ticketsURL}">buy a ticket</a></td>
           </tr>`)
         }
         post.add(`
          </table>
          <a href="#">View more</a>`)
        post.commit('#lEvents');
      }
      if(document.querySelector('#About')!=null){
        let post = new Post();
        post.add(`
           <article>
           <h1 class="Lheader">About <strong>The Band</strong></h1>
           <blockquote><p>${about.quote}</p></blockquote>
           <p>${about.copy}</p>
           <a href="about.html">View timeline</a>
         </article>
         <ul>`)
         for(var i=0;i<5;i++){
         post.add(`
           <li><img src="${members[i].imageURL}" alt=""></li>`);
         }
        post.add(`</ul>`);
        post.commit('#About');
      }
      if(document.querySelector('#news')!=null){
        let post = new Post();
        post.add(` <h1 class="Lheader">Band News</h1>`);
        for (var i = 0; i <6; i++) {
          post.add(`
            <article>
            <img src="${news[i].imageURL}" alt="news photo">
            <header>
              <h2>${news[i].title}</h2>
              <p>${news[i].postDate}</p>
            </header>
            <p class="Lheader">${news[i].text}</p>
          </article>`);
        }
        post.commit('#news');
      }
      if(document.querySelector('#events')!=null){
        let post = new Post();
        post.add(`<h1 class="Lheader">Live <strong>Events</strong></h1>
         <table border="0" cellpadding="0" cellspacing="0">`)
         for(i=0;i<6;i++){
           post.add(`
           <tr>
             <td><p>${events[i].date}</p></td>
             <td><p>${events[i].city},${events[i].state}</p><p>${events[i].venue}</p></td>
             <td><a href="${events[i].locationURL}">google maps location</a></td>
             <td><a href="${events[i].ticketsURL}">buy a ticket</a></td>
           </tr>`)
         }
        post.add(`</table>`);
        post.commit('#events');
      }
    }//end status
  }// end xhr.onload
    xhr.open('GET', 'data/data.json', true)
    xhr.send(null)
