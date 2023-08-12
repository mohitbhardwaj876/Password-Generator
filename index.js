const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "!@#$z%^&*()"

const totalchar=document.getElementById('totalength');
const upperinput = document.getElementById('upper-case');
const lowerinput = document.getElementById('lower-case');
const symbolinput=document.getElementById('symbol');
const numberinput=document.getElementById('numbers');

const generateRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}
// console.log(generateRandomData(upperset));

const generatePassword=(password="")=>{
    if(upperinput.checked){
        password+=generateRandomData(upperset);
    }
    if(lowerinput.checked){
        password+=generateRandomData(lowerset);
    }
    if(symbolinput.checked){
        password+=generateRandomData(symbols);
    }
    if(numberinput.checked){
        password+=generateRandomData(numbers);
    }
    if(password.length<totalchar.value){
        return generatePassword(password);
    }
    document.getElementById('pass-box').innerText=truncatestring(password,totalchar.value);
}
document.getElementById('generate').addEventListener("click",function(){
    generatePassword();
})

function truncatestring(str,num){
    if(str.length>num){
        substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}