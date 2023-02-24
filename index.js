const form = document.querySelector('form')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const message = document.querySelector('.message')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const words = message.value.split(' ');

    if(name.value.length == 0){
        alert('Name Cannot Be Empty')
    }else if(name.value.length < 3){
        alert('Name Must Atleast 3 Character')
    }else if(email.value == null){
        alert('Email Cannot Be Empty')
    }else if(!email.value.match(mailformat)){
        alert('Please Input Valid Email')
    }else if(message.value.length == 0){
        alert('Message Cannot Be Empty')
    }else if(words.length < 3){
        alert('Message Must Atleast 3 Words')
    }else {
        alert('Thanks For Contacting Us!')
    }

})
