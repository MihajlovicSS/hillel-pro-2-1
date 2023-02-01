function printHello() {
    let userName;
    for(let i=0; i<=5; i++){
        if (i===0){
            userName = prompt('Please enter your name!');
            if(checkLetters(userName)){
                alert('Hello, ' + userName + '! How are you?'); 
                break;
            }
            else{
                continue;
            }
        }
        else if (i===5){
            userName = prompt('Please enter correct name! Only letters! You have ' + (6 - i) + ' attempts remained!');
            if(checkLetters(userName)){
                alert('Hello ' + userName + '! How are you?'); 
                break;
            }
            else{
                alert('You have could not enter the correct name! Sorry!');
            }
        }
        else{
            userName = prompt('Please enter correct name! Only letters! You have ' + (6 - i) + ' attempts remained!');
            if(checkLetters(userName)){
                alert('Hello, ' + userName + '! How are you?'); 
                break;
            }
            else{
                continue;
            }
        }
    }
}
function checkLetters(name){
    let flag = true; // word
    if (name.length){
        for(let i=0; i<name.length-1; i++){
            if (isNaN(name[i]))
                continue;
            else
                flag = false; // number
                break;
        }
    }
    else flag = false;
    return flag;
}
printHello();