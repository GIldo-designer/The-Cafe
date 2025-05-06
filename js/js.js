(function readyJs(win, doc){
    'use strict'

    var form1 = doc.querySelector('#form1');
    let btn = doc.querySelector('#send');
    let name = doc.querySelector('#name');

    function validation(){
        if (name.value == ''){
            name.style.border='1px solid red';
            name.value='Your Name!';
            name.style.color='red';
        }else{
            name.style.border='none';
            name.value='';
            name.style.color='';
        }
    };

    btn.addEventListener('click', validation,false)
    

     
})(window, document);