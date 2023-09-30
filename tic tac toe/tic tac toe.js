console.log("samiran")
let music = new Audio('background.wav')
let gameover = new Audio('yeah-boy-114748.mp3')
let end = new Audio('end.wav')
let turn = 'X';
let game;
let img;
const changeturn = () => {
    // return turn === "X" ? "0" : "X";
    if(turn==='X'){
        return '0'
    }
    else{
        return 'X'
    }
}
const checkwin = () => {
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
      
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8]
    ]
    wins.forEach(e=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText )&& (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +'- Won the Match';
            game=true;
            console.log('win')
   img=document.querySelector('.imgbox').getElementsByTagName('img')[0];
 img.style.width='300px';
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
          turn=  changeturn();
            gameover.play();
            checkwin();
            if(!game){
            document.getElementsByClassName('info')[0].innerText = 'Turn for -' + turn;
            }
        }
    })
})
// reset 
const reset=document.getElementById('reset')
// console.log(reset)
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=''
    })
    turn='X';
    game=false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for -' + turn;
    img=document.querySelector('.imgbox').getElementsByTagName('img')[0];
    img.style.width='0px';
})