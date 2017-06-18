class NewsItem {
    constructor(title='', date='01-01-00', content='', photoURL='../images/RockBand.png') {
        this.title = title;
        this.date = date;
        this.content = content;
        this.photoURL = photoURL;
    }

    buildHtml() {
        var template = `
            <article>
                <img src="${this.photoURL}" alt="news photo">
                <h2>${this.title}</h2>
                <p>${this.date}</p>
                <p>${this.content}</p>
            </article>
        `;

        return template;
    }
}

fetch('http://localhost:3000/data/data.json').then(data => {
    
    data.text().then(json => {
        let parsedData = JSON.parse(json);
            
        parsedData.news.forEach(item => {
            console.log(`Loaded new item: ${item.title}`);

            const root = document.querySelector('#news');
            //debugger;
            let newsItem = new NewsItem(item.title, item.postDate, item.text, item.imageURL);
            //debugger;
            root.innerHTML += newsItem.buildHtml();
        }, this);
    });
});