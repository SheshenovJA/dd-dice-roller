// here we are some functions, pure js, without libs
// roll 20
function roll_20_dice(){
  let result = document.getElementById("d20-result");
  let d20 = Math.floor(Math.random()*20+1);
  result.innerHTML = d20;
  if(d20 == 20){
    let alertMsgMsg = "Ти просто ЧАК НОРРІС! d12 Кріііт!";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
}
// roll 12
function roll_12_dice(){
  let result = document.getElementById("d12-result");
  let d12 = Math.floor(Math.random()*12+1);
  result.innerHTML = d12;
  if(d12 == 12){
    let alertMsgMsg = "d12 criiit!";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
}

// roll 10
function roll_10_dice(){
  let result = document.getElementById("d10-result");
  let d10 = Math.floor(Math.random()*10+1);
  result.innerHTML = d10;
  if(d10 == 10){
    let alertMsgMsg = "Вах, палєхче! Кріталіті!";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
}
// roll 8
function roll_8_dice(){
  let result = document.getElementById("d8-result");
  let d8 = Math.floor(Math.random()*8+1);
  result.innerHTML = d8;
  if(d8 == 8){
    let alertMsgMsg = "Вах, палєхче! Кріталіті!";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
}
// roll 6
function roll_6_dice(){
  let result = document.getElementById("d6-result");
  let d6 = Math.floor(Math.random()*6+1);
  result.innerHTML = d6;
  if(d6 == 6){
    let alertMsgMsg = "Ушатнув по кріпу. Сільно і дерзко.";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
}
// roll 4
function roll_4_dice(){
  let result = document.getElementById("d4-result");
  let d4 = Math.floor(Math.random()*4+1);
  result.innerHTML = d4;
  if(d4 == 4){
    let alertMsgMsg = "Крітанув d4, ну хоч десь пощастило";
    var styler = document.createElement("div");
    styler.setAttribute("style",
    "position:absolute;border: solid 1px Red;width:200px;height:50px;margin: -500px 470px auto; text-align: center;background-color:#444;color:Silver");
    styler.innerHTML = alertMsgMsg;
    setTimeout(function()
    {
      styler.parentNode.removeChild(styler);
    },5000);
      document.body.appendChild(styler);
}
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
    }, 1900);

  },false);
      }
