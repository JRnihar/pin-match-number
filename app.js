function getPin(){
    const pin=Math.round(Math.random()*10000)
    let pinString=pin+"";
    if(pinString.length==4){
        return pin;
    }else{
        return getPin();
    }
}


function genaratePin(){
    const pin=getPin()
    document.getElementById('display-pin').value=pin;
    
}

function addNumber(event){
let number= event.target.innerText;
const calcInput= document.getElementById("input-field");
calcInput.valu=number

}