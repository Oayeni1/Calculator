const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click', ()=>{
    toggleIcon.classList.toggle('bx-sun');
document.body.classList.toggle('dark-mode');

});

let buttons = document.getElementsByClassName("num")
const display=document.getElementById('display')
let operators= document.getElementsByClassName('operator');


for(let btn of buttons ){
    btn.addEventListener('click',()=>{
        switch (btn.innerText) {
            case '1':
                display.value += btn.innerText;
                break;
            case '.':
                display.value += btn.innerText;
            break;
            case '2':
                display.value += btn.innerText;
            break;
            case '3':
                display.value += btn.innerText;
            break;
            case '4':
                display.value += btn.innerText;
            break;
            case '5':
                display.value += btn.innerText;
            break;
            case 'AC':
                display.value ="";
            break;
            default:
                display.value += btn.innerText;
                break;
        }
    })
}

for(let operator of operators){
    operator.addEventListener('click',()=>{
    switch (operator.innerText) {
        case '-':
            display.value += operator.innerText;
            
            break;
        case '+':
             display.value += operator.innerText;
                
        break;
        case '/':
            display.value += operator.innerText;
            
        break;
        case '*':
            display.value += operator.innerText;
                
        break;
    
        default:
                display.value += operator.innerText;

            break;
        }
    });
}
let clear= document.getElementById('equal')
clear.addEventListener('click',()=>{
    display.value = eval(display.value)

})


