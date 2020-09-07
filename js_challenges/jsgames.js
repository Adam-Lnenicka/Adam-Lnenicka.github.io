

//magic hats
document.getElementById('btn1').onclick =function(){
    let userSelection =0;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green'
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red'
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! hit the RESET button to play again'
    }      
}

//hat 2
document.getElementById('btn2').onclick =function(){
    let userSelection =1;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green';
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red';
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! hit the RESET button to play again' 
    }  
}

//hat 3
document.getElementById('btn3').onclick =function(){
    let userSelection =2;
    const randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){ document.getElementById('ball1').style.display ='inline-block'};
    if (randomNumber === 1){ document.getElementById('ball2').style.display ='inline-block'};
    if (randomNumber === 2){ document.getElementById('ball3').style.display ='inline-block'};
    
    if (randomNumber === userSelection){
        document.getElementById('wizard-items').style.backgroundColor = 'green'
        document.getElementById('reveal').innerHTML = 'Congratulations! YOU FOUND THE BALL! Hit the RESET button to play again'
    } else {
        document.getElementById('wizard-items').style.backgroundColor = 'red'
        document.getElementById('reveal').innerHTML = 'Sorry, YOU LOST! Hit the RESET button to play again'
    }      
}

//reset
document.getElementById('reset').onclick = function(){
    document.getElementById('wizard-items').style.backgroundColor = '#f4e4c1';
    document.getElementById('ball1').style.display ='none';
    document.getElementById('ball2').style.display ='none';
    document.getElementById('ball3').style.display ='none';
    document.getElementById('reveal').innerHTML = ''
} 

document.getElementById("btn").addEventListener("click", function() {

    
    const weight = document.getElementById("weight").value
    const age = document.getElementById("age").value
    const gender = 'male'
    const exerciseHours = document.getElementById("exerciseHours").value
    let caloriesDay;

    if (weight < 80){
    caloriesDay = 2000  
    }else if
        (weight < 150){
    caloriesDay = 2100}
    else if
        (weight < 200 ){
    caloriesDay = 2200}
    else if
        (weight < 250){
    caloriesDay = 2300
    }else{
    caloriesDay = 2400  
    }
    
    if (age < 15){
    caloriesDay *= 1.05  
    }else if
        (age < 25){
    caloriesDay *=1.12 }
    else if
        (age < 35 ){
    caloriesDay *= 1.1}
    else if
        (age < 45){
    caloriesDay *= 1.2
    }else{
    caloriesDay *= 1.15  
    }
    
    console.log(caloriesDay)

    let afterExcercise =Math.round(caloriesDay + (exerciseHours*200/7))

    document.getElementById("result2").textContent = afterExcercise
})



//maze js

const width = 25
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []

const layout = [

    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,
    1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,2,
    1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,
    1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,2,
    1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,2,
    1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,
    1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,
    1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,
    1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,
    1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,
    1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,
    1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,
    1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,
    1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,
    1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,
    1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,
    2,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,
    2,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,
    0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,
    2,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,
    2,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

//create board
function createBoard() {

    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('start-finish')
        }
        
    }
}
createBoard()


let movingDotCurrentIndex = 525
squares[movingDotCurrentIndex].classList.add('movingDot')

function control(e) {
    squares[movingDotCurrentIndex].classList.remove('movingDot')
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (
            !squares[movingDotCurrentIndex + width].classList.contains('wall') &&
            movingDotCurrentIndex + width < width * width
            ) 
            movingDotCurrentIndex += width
        break
        case 38:
        console.log('pressed up')
        if (
            !squares[movingDotCurrentIndex - width].classList.contains('wall') &&
            movingDotCurrentIndex - width >=0
            ) 
            movingDotCurrentIndex -= width
        break
        case 37: 
        console.log('pressed left')
        if( 
            !squares[movingDotCurrentIndex -1].classList.contains('wall') &&
            movingDotCurrentIndex % width !==0
            ) 
            movingDotCurrentIndex -=1
        break
        case 39:
        console.log('pressed right')
        if(
            !squares[movingDotCurrentIndex +1].classList.contains('wall') &&
            movingDotCurrentIndex % width < width -1
            ) 
            movingDotCurrentIndex +=1
        break
    }
    squares[movingDotCurrentIndex].classList.add('movingDot')
}
document.addEventListener('keyup', control)


//
document.getElementById("btn4").addEventListener("click", function() {
    let firstSentence = document.getElementById("firstSentence").value;
    

    const letters = firstSentence.split('');


    let nums = letters.map((x) =>   x==='a'? x = 1: 
                                    x==='e'? x = 2: 
                                    x==='i'? x = 3:
                                    x==='o'? x = 4:
                                    x==='u'? x = 5: x);
                                    
    let reverseOrder = nums.reverse().join('')
    
    document.getElementById("result3").textContent = reverseOrder;
})
