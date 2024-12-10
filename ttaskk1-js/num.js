const input=document.getElementById('num')
const button=document.getElementById('btn');

const handleClick=()=>{
    let randomNumber = Math.floor(Math.random() * 10);
    // randomNumber=parseInt(input.value);
    let num=parseInt(input.value);

    console.log("randomNumber",randomNumber,"num",num);
    

    if (randomNumber==num){

        alert("you guessed it")
    } else {
        alert("oops your wrong")
    }
}

button.addEventListener('click',handleClick);

