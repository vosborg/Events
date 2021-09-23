let inputfield = document.querySelector('#changeColor');
let button = document.querySelector('#btn');
let button2 = document.querySelector('.test');


inputfield.addEventListener('input', function(){
    if(inputfield.value.length > 3){
        document.body.classList.add('bgBlue');
        button.classList.add('show')
    }
        else {
            document.body.classList.remove('bgBlue');
            document.querySelector('#btn').classList.remove('show');
        }
})

button.addEventListener('click', function(){
    document.querySelector('#header').innerHTML = "TThank you";
    button2.classList.add('show')
});

const targetDiv = document.querySelector(".testing");

button2.ondblclick = function () {
  if (targetDiv.style.visibility !== "hidden") {
    targetDiv.style.visibility = "visible";
  } 
  else {
    targetDiv.style.visibility = "visible";
  }
};

let image1 = document.querySelector('.image1');
let leotxt = document.querySelector('#leoheader');

    image1.addEventListener('mouseenter', e =>{
      if(image1.src = 'leo1.jpg'){
        image1.src="leo2.jpg";
        leotxt.innerHTML = 'Not Leonardo '
  
      }});

    image1.addEventListener('mouseleave', e =>{
     image1.src="leo1.jpg";
      leotxt.innerHTML = 'And the Oscar goes to...(Hover) '
      });



  let charCounter = document.querySelector('#charCounter');
  let txtfield = document.querySelector('#message');

  txtfield.addEventListener('keyup', function(){
    let maxLength = 20;
    let message = document.querySelector('#message');
    let strLength = message.value.length;
    let charRemain = (maxLength - strLength);

    if(charRemain < 0){
      charCounter.innerHTML = '<span style="color:red;">Du har brugt overskredet det maksimale antal symboler ' + maxLength + ' </span>';
    }else{
      charCounter.innerHTML = charRemain + ' tilbage';
      }
    }

  )

  document.getElementById("myDetails").addEventListener("toggle", myFunction);

function myFunction() {
  alert("The End.");
}

const msgTopics = ['Your favorite actor', 'Your favorite movie', 'Your favorite book'];
const msgHeader = document.querySelector('.messageHeader');

msgHeader.innerHTML ='Tell me about your favorite in the topics below';

msgTopics.forEach(msgTopics => {
  msgHeader.innerHTML += `<p>${msgTopics}</p>`
});

