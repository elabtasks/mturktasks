const updateTextInput = function (val) {
      document.getElementById('textInput').value=val+' (%)';
    };

const wrapText = function(context, text, x, y, maxWidth, fontSize, fontFace){
  var words = text.split(' ');
  var line = '';
  var lineHeight=fontSize;

  context.font = fontSize + "px " + fontFace;

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if(testWidth > maxWidth) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
  return(y);
};

//----------------------SHUFFLE FUNCTION------------------//
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

const shuffle = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
    return array;
  };

//-------------------COUNTDOWN SCREENS----------------//
const countDown = function(time){
  timeoutcountdown = null;
  stimscreencount = 1;
  type = 0;
  if (time > 0)
  {
    clearTimeout(timeoutcountdown);
    $("#startButton").hide();
    ctx.fillStyle = "white";
    ctx.font="60px Arial";
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillText(""+time, 450, 450);
    timeoutcountdown = setTimeout(function(){countDown(time-1)},750);
  }
  else
  {
    timeoutcountdown = setTimeout(runTrial,250);
  }
};

const delaytotest = function(time){
  timeoutcountdown = null;
  if (time > 0)
  {
    clearTimeout(timeoutcountdown);
    $("#startButton").hide();
    ctx.textAlign="left";
    ctx.fillStyle = "white";
    ctx.font="60px Arial";
    ctx.clearRect(0, 0, myCanvas.width, 50);
    ctx.fillText("Time left (sec): "+time, 100, 25);
    timeoutcountdown = setTimeout(function(){delaytotest(time-1)},1000);
  }
  else
  {
    ctx.clearRect(0, 0, myCanvas.width, 50);
    $("#Start2").show();
  }
};

//-----------------------NOT FULL SCREEN----------------//
const nonfullscreen = function(){
  type = 2;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.font="bold 30px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  if (notfullscreen == 0){
    ctx.fillText("Your screen is not full screen.",myCanvas.width/2,myCanvas.height/2);
    ctx.fillText("Please correct this and press any key to continue.",myCanvas.width/2,(myCanvas.height/2)+50);
    ctx.fillText("If you exit full screen one more time during this experiment,",myCanvas.width/2,(myCanvas.height/2)+100);
    ctx.fillText("you will have to restart the experiment and will not be paid",myCanvas.width/2,(myCanvas.height/2)+150);
    ctx.fillText("for the previous time you have spent doing the experiment.",myCanvas.width/2,(myCanvas.height/2)+200);
    notfullscreen++;
  }
  else {ctx.fillText("Please refresh the page to restart the experiment.",myCanvas.width/2,myCanvas.height/2);
  notfullscreen++;
  }
};

//-----------------------CHECKS SIZE SCREEN----------------//
const checkSize = function(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  if (w < 800 || h < 600) // 800 by 600 is the lowest resolution on my laptop; seems like a good "minimum" (basically need 500 x 500 at least)
  {
    checkwindowsize = 1;
  }
  else // if their screen is the proper size...
  {
    checkwindowsize = 0;
  }
};
