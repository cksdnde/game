//랜덤번호 지정 
//유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 <유저번호 Down!!
//랜덤번호가 >유저번호 UP!!
//Reset버튼을 누르면 게임이 리셋된다 
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지않는다.
//유저가 이미 입력한 숫자를 또 입력하면 , 알려준다, 기회를 깍지 않는다.



let computernum=0;
let playButton=document.getElementById("play-button")
let userInput=document.getElementById("user-input")
let resultArea=document.getElementById("result-area")
let resetButton=document.getElementById("reset-button")
let chances=5
let gameOver=false
let chanceArea=document.getElementById("chance-area")
let history=[]


playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computernum=Math.floor(Math.random()*100)+1   
    console.log('정답:',computernum)
}



function play(){
    let userValue=userInput.value

    if(userValue<1||userValue>100){
        resultArea.textContent="1부터 100사이의 숫자를 입력해주세요!!"  
        return 
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다, 다시!!해!! "
        return
    }


    chances--
    chanceArea.innerHTML=`남은 기회: ${chances}번`
    history.push(userValue)
    console.log(history)
    

    if(userValue>computernum){
        resultArea.textContent="Down!!"
    }else if(userValue<computernum){
        resultArea.textContent="Up!!"
    }else{
        resultArea.textContent="정답입니당!"
    }

    if(chances<1){
        gameOver=true;
    }
    
    if(gameOver==true){
        playButton.disabled=true
    }
    
  
    
  
}
function reset(){
    pickRandomNum() //랜덤번호 초기화 해주기    

    userInput.value="" // 갑 입력 창 초기화

    chances=5                                       //chances 초기화 (UI화면 포함)
    chanceArea.innerHTML=`남은 기회: ${chances}번`

    gameOver=false                                  //gameOver는 true로 go버튼은 불능해제
    playButton.disabled=false

    resultArea.textContent="결과가 나온다"  // 결과화면(UI) 초기화

    history=[]   //배열 초기화



}
pickRandomNum()