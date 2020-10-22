let modify = document.querySelector('#modify');
let file = document.querySelector('#file');
let text = document.querySelector('#text');
let search = document.querySelector('#search');
let p1 = document.querySelector('.json1');
let p2 = document.querySelector('.json2');
let p3 = document.querySelector('.json3');
let p4 = document.querySelector('.json4');
let btn = document.querySelector('#gen');
let input = document.querySelector('#t'); 
let list = document.querySelectorAll('.list');
let s = document.querySelector('.s');
let i = 0;
let variabila;


modify.addEventListener('click', function(){
    if (text.value === ''){
        return;
    } else {
        
        file.innerHTML = text.value;
        text.value = '';
    }
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  btn.addEventListener('click', function(){
    i = input.value;  
    fetch('https://jsonplaceholder.typicode.com/posts/' + i

 ).then(response => {
     return response.json();
}).then(json => {
    console.log(json);
    p1.innerHTML = "This is the userId:" + json.userId;
    p2.innerHTML = "This is the id:" + json.id;
    p3.innerHTML = "This is the title:" + json.title;
    p4.innerHTML = "This is the body:" + json.body;
  });  
});

s.addEventListener('keyup', function(){
  variabila = s.value;
  variabila = variabila.toLowerCase();
   
   for (let j = 0; j < list.length; j++) { 
   
    if (list[j].textContent.toLowerCase().includes(variabila)) { 
        list[j].style.display="list-item"; 
        list[j].style.width="100%";
    } 
    else { 
        list[j].style.display="none";                  
      } 
  } 

});