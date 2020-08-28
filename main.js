let num = document.getElementById("number");
let que = document.getElementById("question");
let res = document.getElementById("result");
let ans = document.getElementById("answer");
let scr = document.getElementById("score");
let iCnt = 1;
let iMissCnt = 0;
let iCrrtCnt = 0;
let state = true;
let kubun = 0;
const textAlfaList = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];
const textEngWordList = [
  'hello', 'good', 'sorry',
  'thanks', 'happy', 'welcome', 
  'hungry', 'kindness', 'terrific', 
  'sunday', 'yesterday', 'tomorrow',
  'black', 'yellow', 'green'
];

function btnClearClick() {
  state = true;
  scr.textContent = "";
  num.textContent = "";
  que.textContent = "";
  res.textContent = "";
  ans.textContent = "";
  clearTimeout();
  iCrrtCnt = 0;
  iMissCnt = 0;
  iCnt = 1;
}

function btnClick(intKubun) {
  if(!state) return;
  kubun = intKubun;
  init(kubun);
}

function init(intKubun) {
  setTimeout(() => {
    if(intKubun==0){
      const rnd = Math.floor(Math.random() * textAlfaList.length);
      que.textContent = textAlfaList[rnd];
    }
    if(intKubun==1){
      const rnd = Math.floor(Math.random() * textEngWordList.length);
      que.textContent = textEngWordList[rnd];
    }
    num.textContent = "問題" + iCnt;
    res.textContent = "回答中";
    ans.textContent = "";
  }, 1000);
}

document.addEventListener("keydown",(e) => {
  if(e.key == "Backspace"){
    let st = ans.textContent;
    ans.textContent = st.slice(0, st.length - 1);
  } else if(e.key == "Enter")  {
      
    if(que.textContent == ans.textContent) {

      res.textContent = "正解";
      iCrrtCnt++;
    } else {
      res.textContent = "不正解";
      iMissCnt++;
    }
    iCnt++;
    if(iCnt > 10){
      typingFinish();
    } else {
      init(kubun);         
    }
  } else {
      ans.textContent += e.key;
  }
});

function typingFinish() {
  num.textContent = "";
  que.textContent = "";
  res.textContent = "";
  ans.textContent = "";
  scr.textContent = "結果：正解数 " + iCrrtCnt + " 不正解数 " + iMissCnt;
  iCrrtCnt = 0;
  iMissCnt = 0;
  iCnt = 1;
  clearTimeout();
  state = false;
}
