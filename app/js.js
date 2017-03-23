// here we are some functions, pure js, without libs
// roll 20
function roll_20_dice(){
  let result = document.getElementById("d20-result");
  let d20 = Math.floor(Math.random()*20+1);
  result.innerHTML = d20;
}
// roll 12
function roll_12_dice(){
  let result = document.getElementById("d12-result");
  let d12 = Math.floor(Math.random()*12+1);
  result.innerHTML = d12;
}
// roll 10
function roll_10_dice(){
  let result = document.getElementById("d10-result");
  let d10 = Math.floor(Math.random()*10+1);
  result.innerHTML = d10;
}
// roll 8
function roll_8_dice(){
  let result = document.getElementById("d8-result");
  let d8 = Math.floor(Math.random()*8+1);
  result.innerHTML = d8;
}
// roll 6
function roll_6_dice(){
  let result = document.getElementById("d6-result");
  let d6 = Math.floor(Math.random()*6+1);
  result.innerHTML = d6;
}
// roll 4
function roll_4_dice(){
  let result = document.getElementById("d4-result");
  let d4 = Math.floor(Math.random()*4+1);
  result.innerHTML = d4;
}
//
    let divEvtSelector =  document.getElementById("main").querySelectorAll("#mySubmit");
    for (var i = 0; i < divEvtSelector.length; i++) {
    divEvtSelector[i].addEventListener('click',function delay(e){

      this.setAttribute("disabled", "disabled");
      //dosnt work
      window.setTimeout(function() {
        let selector = document.getElementById("main").querySelectorAll("#mySubmit");
        for (var i = 0; i < selector.length; i++) {
          //console.log('test1||' + i);
          selector[i].removeAttribute("disabled");
          }
    }, 8000);

  },false);
      }
