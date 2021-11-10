//#######################################################//
//-------------GLOBAL EXPERIMENT PARAMETERS--------------//
//#######################################################//

//------------------------TIMINGS-----------------------//
IMAGEinterval = 10000
IMAGEstudyinterval = 5000
ITIinterval = 500
ISIinterval = 500

//---------------------TRIAL COUNTS--------------------//
totallength = 84;
choice_total = 32;

//#######################################################//
//-------------Starting HTML and JS Funct----------------//
//#######################################################//

//Start stuff
$("#info").hide();
$("#form").hide();
$('#button').hide();
$("#mturk_form").hide();
d1 = new Date();
runStart = d1.getTime();

//hide buttons
$("#Start").hide();
$("#Start2").hide();
$("#Start3").hide();
$("#Start4").hide();
$("#Start5").hide();
$("#Example").hide();

$("#category1").hide();
$("#category2").hide();
$("#category3").hide();
$("#category4").hide();
$("#category5").hide();
$("#category6").hide();
$("#category7").hide();
$("#category8").hide();

$("#category1_test").hide();
$("#category2_test").hide();
$("#category3_test").hide();
$("#category4_test").hide();
$("#category5_test").hide();
$("#category6_test").hide();
$("#category7_test").hide();
$("#category8_test").hide();

$("#category1_dummy").hide();
$("#category2_dummy").hide();
$("#category3_dummy").hide();
$("#category4_dummy").hide();
$("#category5_dummy").hide();
$("#category6_dummy").hide();
$("#category7_dummy").hide();
$("#category8_dummy").hide();

//#######################################################//
//------------------INITIALIZING VARIABLES---------------//
//#######################################################//
i=0;
j=0;
categorychoice = 0;
choice_num=0;
acccount = 0;
acctotalcount = 0;
notfullscreen = 0;
instructionson = 0;
block = -1;
trialcount = 0;
totalcount = 0;
instructioncount = 0;
stimscreencount = 0;
miniblock_right = [];

//variables that just need to be
type = 0;
jokes = 0;

//logfile
data=[['']];
runStart;
logCounter = 0;
//onset;
d1;
checkResponse = false;
timeoutHandle = null;
timeoutIMAGE = null;
timeoutITI = null;
timeoutcountdown = null;

//#######################################################//
//-----------------------Button Presses------------------//
//#######################################################//
//Detect events likes clicks or button presses
$("body").keypress(function(event){
  //clearTimeout();
  if (type != 4){
  key = event.keyCode || event.which
  event.preventDefault();}
});

//category counters
category1counter = 1;
category2counter = 1;
category3counter = 1;
category4counter = 1;
category5counter = 1;
category6counter = 1;
category7counter = 1;
category8counter = 1;

//first js function to run
fileName = listimagenames
img = new Array(fileName.length);
imgCount = 0
