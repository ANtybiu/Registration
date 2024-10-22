let language = "english"


let malayContainer = document.getElementById('main-container-malay');
let englishContainer = document.getElementById('main-container');
let chineseContainer = document.getElementById('main-container-chinese');

let footer = document.getElementById('footer');
let chineseFooter = document.getElementById('footer-chinese');
let malayFooter = document.getElementById('footer-malay');
function malay(){
  malayContainer.style.display= "flex";
  englishContainer.style.display="none"
  chineseContainer.style.display="none";
  footer.style.display="none";
  chineseFooter.style.display="none";
  malayFooter.style.display="flex"
  language = "malay";
  console.log(language);
}
function english(){
  malayContainer.style.display= "none";
  englishContainer.style.display="flex"
  chineseContainer.style.display="none";
  footer.style.display="flex";
  chineseFooter.style.display="none";
  malayFooter.style.display="none"
  language="english";
  console.log(language);
}
function chinese(){
  malayContainer.style.display= "none";
  englishContainer.style.display="none"
  chineseContainer.style.display="flex";
  footer.style.display="none";
  chineseFooter.style.display="flex";
  malayFooter.style.display="none"
  language="chinese"
  console.log(language);
}

if(language==="english"){
  malayContainer.style.display= "none";
  englishContainer.style.display="flex"
  chineseContainer.style.display="none";
  footer.style.display="flex";
  chineseFooter.style.display="none";
  malayFooter.style.display="none"
} else if( language==="malay"){
  malayContainer.style.display= "flex";
  englishContainer.style.display="none"
  chineseContainer.style.display="none";
  footer.style.display="none";
  chineseFooter.style.display="none";
  malayFooter.style.display="flex"
} else{
  malayContainer.style.display= "none";
  englishContainer.style.display="none"
  chineseContainer.style.display="flex";
  footer.style.display="none";
  chineseFooter.style.display="flex";
  malayFooter.style.display="none"
}
console.log(language);


let malayIndex=document.getElementById('index-container-malay');
let englishIndex=document.getElementById('index-container');
let chineseIndex=document.getElementById('index-container-chinese');

function index(){
  if(language==="english"){
    englishIndex.style.display="flex"
    englishContainer.style.display="none"
  }else if(language==="malay"){
    malayIndex.style.display="flex"
    malayContainer.style.display="none"
  } else{
    chineseIndex.style.display="flex"
    chineseContainer.style.display="none"
  }
  console.log('asd')
}

function index_english(){
  malayIndex.style.display= "none";
  englishIndex.style.display="flex"
  chineseIndex.style.display="none";
  footer.style.display="flex";
  chineseFooter.style.display="none";
  malayFooter.style.display="none"
  language="english";
  console.log(language);
}

function index_malay(){
  malayIndex.style.display= "flex";
  englishIndex.style.display="none"
  chineseIndex.style.display="none";
  footer.style.display="none";
  chineseFooter.style.display="none";
  malayFooter.style.display="flex"
  language="malay";
  console.log(language);
}

function index_chinese(){
  malayIndex.style.display= "none";
  englishIndex.style.display="none"
  chineseIndex.style.display="flex";
  footer.style.display="none";
  chineseFooter.style.display="flex";
  malayFooter.style.display="none"
  language="chinese";
  console.log(language);
}

let malayBeen=document.getElementById('been-container-malay');
let englishBeen=document.getElementById('been-container');
let chineseBeen=document.getElementById('been-container-chinese');

function been(){
  if(language==="english"){
    englishBeen.style.display="flex"
    englishIndex.style.display="none"
  }else if(language==="malay"){
    malayBeen.style.display="flex"
    malayIndex.style.display="none"
  } else{
    chineseBeen.style.display="flex"
    chineseIndex.style.display="none"
  }
  console.log('asd')
}

function been_english(){
  malayBeen.style.display= "none";
  englishBeen.style.display="flex"
  chineseBeen.style.display="none";
  footer.style.display="flex";
  chineseFooter.style.display="none";
  malayFooter.style.display="none"
  language="english";
  console.log(language);
}
function been_malay(){
  malayBeen.style.display= "flex";
  englishBeen.style.display="none"
  chineseBeen.style.display="none";
  footer.style.display="none";
  chineseFooter.style.display="none";
  malayFooter.style.display="flex"
  language="english";
  console.log(language);
}
function been_chinese(){
  malayBeen.style.display= "none";
  englishBeen.style.display="none"
  chineseBeen.style.display="flex";
  footer.style.display="none";
  chineseFooter.style.display="flex";
  malayFooter.style.display="none"
  language="english";
  console.log(language);
}
function back(ass){
  if(ass==="index"){
    if(language==="english"){
      englishIndex.style.display="none";
      englishContainer.style.display="flex";
      englishBeen.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseBeen.style.display="none";
      malayIndex.style.display="none";
      chineseIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }else if(language==="malay"){
      malayIndex.style.display="none";
      malayContainer.style.display="flex";
      englishBeen.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseBeen.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
      englishIndex.style.display="none";
      chineseIndex.style.display="none";
    } else{
      chineseIndex.style.display="none";
      chineseContainer.style.display="flex";
      englishBeen.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      malayIndex.style.display="none";
      englishIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }
    console.log('asd');
  } else if(ass==="been"){
    if(language==="english"){
      englishBeen.style.display="none";
      englishIndex.style.display="flex";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="none";
      malayIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }else if(language==="malay"){
     englishBeen.style.display="none";
      englishIndex.style.display="none";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="none";
      malayIndex.style.display="flex";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    } else{
      englishBeen.style.display="none";
      englishIndex.style.display="none";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="flex";
      malayIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }
    console.log('asd')
  } else if(ass==="otw"){
    if(language==="english"){
      englishBeen.style.display="none";
      englishIndex.style.display="flex";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="none";
      malayIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }else if(language==="malay"){
     englishBeen.style.display="none";
      englishIndex.style.display="none";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="none";
      malayIndex.style.display="flex";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    } else{
      englishBeen.style.display="none";
      englishIndex.style.display="none";
      englishContainer.style.display="none";
      malayContainer.style.display="none";
      chineseContainer.style.display="none";
      malayBeen.style.display="none";
      chineseBeen.style.display="none";
      chineseIndex.style.display="flex";
      malayIndex.style.display="none";
      englishOTW.style.display="none";
      chineseOTW.style.display="none";
      malayOTW.style.display="none";
    }
    console.log('asd')
  }
}
let englishOTW = document.getElementById('otw-container');
let chineseOTW = document.getElementById('otw-container-chinese');
let malayOTW = document.getElementById('otw-container-malay');
let cancelText = document.getElementById('cancel');
let blocked = '';
let gotOne = 0;
let nurseCalled = false;
let counting = false;
let countdownVar = document.getElementById('countdown');
let countdownVar1 = document.getElementById('countdown1');
let countdownVar2 = document.getElementById('countdown2');
function otw(){
  if(language==="english"){
    englishOTW.style.display="flex"
    englishIndex.style.display="none"
    countdown('english');
  }else if(language==="malay"){
    malayOTW.style.display="flex"
    malayIndex.style.display="none"
    countdown('malay');
  } else{
    chineseOTW.style.display="flex"
    chineseIndex.style.display="none"
    countdown('chinese');
  }
  console.log('asd')
  }


function otw_english(){
  malayOTW.style.display= "none";
  englishOTW.style.display="flex"
  chineseOTW.style.display="none";
  footer.style.display="flex";
  chineseFooter.style.display="none";
  malayFooter.style.display="none"
  language="english";
  console.log(language);
  
  

}
function otw_chinese(){
  malayOTW.style.display= "none";
  englishOTW.style.display="none"
  chineseOTW.style.display="flex";
  footer.style.display="none";
  chineseFooter.style.display="flex";
  malayFooter.style.display="none"
  language="chinese";
  console.log(language);
  
}
function otw_malay(){
  malayOTW.style.display= "flex";
  englishOTW.style.display="none"
  chineseOTW.style.display="none";
  footer.style.display="none";
  chineseFooter.style.display="none";
  malayFooter.style.display="flex"
  language="malay";
  console.log(language);
  
}

let englishCancel = document.getElementById('cancel-container');
let chineseCancel = document.getElementById('cancel-container-chinese');
let malayCancel = document.getElementById('cancel-container-malay');

function show_alert(){
  if(!blocked){
  if(language==="english"){
    englishCancel.style.display="flex";
    englishOTW.style.display="none";
    englishIndex.style.display="flex";
    englishCancel.style.display="flex";
    englishCancel.style.display="flex";
    englishCancel.style.display="flex";
    nurseCalled=false;
    setTimeout(function() {
      englishCancel.style.top="-30px";
      englishCancel.style.transition="top 0.3s"
      
  }, 5000);
  setTimeout(function() {
    englishCancel.style.display = "none";
    englishCancel.style.top="5px";
}, 5301);
  if(englishCancel.style.display==="flex"){
    console.log(englishCancel.style.display)
  }else{console.log(englishCancel.style.display)}
  
  } else if(language==="chinese"){
    chineseCancel.style.display="flex";
    chineseOTW.style.display="none";
    chineseIndex.style.display="flex";
    chineseCancel.style.top="5px";
    chineseCancel.style.transition="top 0.15s"
    nurseCalled=false;
    setTimeout(function() {
      chineseCancel.style.top="-30px";
      chineseCancel.style.transition="top 0.3s"
      
  }, 5000);
  setTimeout(function() {
    chineseCancel.style.display = "none";
}, 5301);
  } else{
    malayCancel.style.display="flex";
    malayOTW.style.display="none";
    malayIndex.style.display="flex";
    malayCancel.style.top="5px";
    malayCancel.style.transition="top 0.15s"
    nurseCalled=false;
    setTimeout(function() {
      malayCancel.style.top="-30px";
      malayCancel.style.transition="top 0.3s"
      
  }, 5000);
  setTimeout(function() {
    malayCancel.style.display = "none";
}, 5301);
}}};
function close_alert(){
  malayCancel.style.display="none";
  chineseCancel.style.display="none";
  englishCancel.style.display="none";
  console.log('close')
}
function countdown(lang){
  
  if(gotOne === 0 && !nurseCalled && !counting){
    gotOne ++;
  document.getElementById('cancel').style.opacity="0.6";
  document.getElementById('cancel').style.cursor="not-allowed";
  document.getElementById('cancel').style.boxShadow= "none";
  document.getElementById('cancel1').style.opacity="0.6";
  document.getElementById('cancel1').style.cursor="not-allowed";
  document.getElementById('cancel1').style.boxShadow= "none";
  document.getElementById('cancel2').style.opacity="0.6";
  document.getElementById('cancel2').style.cursor="not-allowed";
  document.getElementById('cancel2').style.boxShadow= "none";
  blocked = true;
  counting = true;
  nurseCalled = true;
  countdownVar.innerHTML = ` (10s)`
  countdownVar1.innerHTML = ` (10s)`
  countdownVar2.innerHTML = ` (10s)`
  setTimeout(function() {
    countdownVar.innerHTML = ` (9s)`
    countdownVar1.innerHTML = ` (9)`
    countdownVar2.innerHTML = ` (9s)`
}, 1000);
setTimeout(function() {
  countdownVar.innerHTML = ` (8s)`
    countdownVar1.innerHTML = ` (8s)`
    countdownVar2.innerHTML = ` (8s)`
}, 2000);
setTimeout(function() {
  countdownVar.innerHTML = ` (7s)`
    countdownVar1.innerHTML = ` (7s)`
    countdownVar2.innerHTML = ` (7s)`
}, 3000);
setTimeout(function() {
  countdownVar.innerHTML = ` (6s)`
    countdownVar1.innerHTML = ` (6s)`
    countdownVar2.innerHTML = ` (6s)`
}, 4000);
setTimeout(function() {
  countdownVar.innerHTML = ` (5s)`
    countdownVar1.innerHTML = ` (5s)`
    countdownVar2.innerHTML = ` (5s)`
}, 5000);
setTimeout(function() {
  countdownVar.innerHTML = ` (4s)`
    countdownVar1.innerHTML = ` (4s)`
    countdownVar2.innerHTML = ` (4s)`
}, 6000);
setTimeout(function() {
  countdownVar.innerHTML = ` (3s)`
    countdownVar1.innerHTML = ` (3s)`
    countdownVar2.innerHTML = ` (3s)`
}, 7000);
setTimeout(function() {
  countdownVar.innerHTML = ` (2s)`
    countdownVar1.innerHTML = ` (2s)`
    countdownVar2.innerHTML = ` (2s)`
}, 8000);
setTimeout(function() {
  countdownVar.innerHTML = ` (1s)`
    countdownVar1.innerHTML = ` (1s)`
    countdownVar2.innerHTML = ` (1s)`
}, 9000);
setTimeout(function() {
  countdownVar.innerHTML = ``;
  countdownVar1.innerHTML = ``
  countdownVar2.innerHTML = ``
  document.getElementById('cancel').removeAttribute('style');
  document.getElementById('cancel1').removeAttribute('style');
  document.getElementById('cancel2').removeAttribute('style');
  nurseCalled= true;
  blocked = false;
  gotOne = 0;
  counting=false;
}, 10000);

  
  
}
}
