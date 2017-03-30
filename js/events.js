  function fullNamechecker(e){
    var target = event.target;
    var error = '<label class="error">Must be at least 8 characters!</label>';
    var parent = target.parentElement;

      if(target.value.includes(' ') != true) {
        if (!parent.querySelector('.error')) {
        parent.insertAdjacentHTML('beforeEnd', error);}
      }
      else {
      parent.removeChild(parent.querySelector('.error'));
      }
  }
  function checkNumofChar(e){
    var target = event.target;
    var parent = target.parentElement;
    var error = '<label class="error">please have a message longer than 21 characters</label>';

    if(target.value.length < 21 ) {
      if (!parent.querySelector('.error')) {
        parent.insertAdjacentHTML('beforeEnd', error);
      }
    } else {
      parent.removeChild(parent.querySelector('.error'));
    }
  }
  if (document.querySelector('#Fname') !=null){
    var fname = document.querySelector('#Fname');
    fname.addEventListener('blur',fullNamechecker);
  }
  if(document.querySelector('#feed') !=null){
     var feedback = document.querySelector('#feed');
     feedback.addEventListener('blur',checkNumofChar);
  }
