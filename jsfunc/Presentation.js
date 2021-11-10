//#######################################################//
//------------------INSTRUCTION SCREENS------------------//
//#######################################################//
const instructions_example = function (){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";
  ctx.fillStyle="white";
  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  text1 = wrapText(ctx,"Today you will complete a simple task.",(myCanvas.width/2),(myCanvas.height/3)-250,400,20,"verdana");
  text2 = wrapText(ctx,"You will be trying to learn 8 different kinds of birds.",(myCanvas.width/2),(myCanvas.height/3)-200,700,20,"verdana");

  ctx.textAlign="left";
  text3 = wrapText(ctx,"In the first phase, you will be passively observing an example bird from each of the 8 bird species.",100,(myCanvas.height/3)-150,700,20,"verdana");
  text4 = wrapText(ctx,"In the second phase -- the study phase -- you will be given the opportunity to select and study images of birds from each species. You will do this in two stages, studying one set of 4 birds, taking a short break, and then studying the next set of 4 birds.",100,(myCanvas.height/3)-75,700,20,"verdana");
  text5 = wrapText(ctx,"In the final phase, you will be tested on how well you learned each bird species by being asked to identify the species of bird for each presented image.",100,(myCanvas.height/3)+50,700,20,"verdana");


  begintimeout = setTimeout(begin_task, 5000)
};

const begin_task = function (){
   $("#Example").show();
};

const instructions = function (stage_instruct){
  type = 3;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.textAlign="center";

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

  $("#startButton").hide();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  ctx.textAlign="left";

  if(stage_instruct == 100){
    text1 = "This is the second section of this task."
    if(trialmatrix[3][i] == 1){
      text2 = "On each trial you will be allowed ONLY ONE choice of which bird species you would like to study. You will be allowed to select "+choice_total+" images in total to learn all 8 bird species and you will be allowed to view each image for 5 seconds."
    }
    else{
      text2 = "On each trial you will be allowed ANY choice of which bird species you would like to study. You will be allowed to select "+choice_total+" images in total to learn the first set of 4 bird species and you will be allowed to view each image for 5 seconds."
    }
    text3 = "When you are ready to begin, press the button below to begin."
    wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
    wrapText(ctx,text2,100,(myCanvas.height/3)-100,700,20,"verdana");
    wrapText(ctx,text3,100,(myCanvas.height/3)+25,700,20,"verdana");
    $("#Start").show();
  }
  if(stage_instruct == 101){
    text1 = "Before we begin the final section of the task, we are going to ask you a few questions."
    text2 = "There are no 'right' answers to these questions."
    text3 = "Please press the button to begin the questions."
    wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
    wrapText(ctx,text2,100,(myCanvas.height/3)-100,700,20,"verdana");
    wrapText(ctx,text3,100,(myCanvas.height/3)+25,700,20,"verdana");
    $("#Start").show();
  }
  if(stage_instruct == 102){
    //text1 = "This is the final section of this task."
    //text2 = "In this section you will be tested on how well you learned these bird species. You will be presented with a picture of a bird, and you must identify what kind of bird it is by pressing the correct button below within 10 seconds of the image appearing."
    //text3 = "After 3min, a button will appear below. Please press the button to begin the final section."
    namestates();
  }
  if(stage_instruct == 103){
    text1 = "There are two survey questions left."
    text2 = "There are no 'right' answers to these questions."
    text3 = "Please press the button to begin the questions."
    wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
    wrapText(ctx,text2,100,(myCanvas.height/3)-100,700,20,"verdana");
    wrapText(ctx,text3,100,(myCanvas.height/3)+25,700,20,"verdana");
    $("#Start").show();
  }
  if(stage_instruct == 104){
    text1 = "Good job!"
    text2 = "Take a brief break before learning the next set of 4 different bird species."
    text3 = "When timer above runs out, a button will appear. Press the button below to begin."
    wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
    wrapText(ctx,text2,100,(myCanvas.height/3)-100,700,20,"verdana");
    wrapText(ctx,text3,100,(myCanvas.height/3)+25,700,20,"verdana");
    delaytotest(60);
  }

};

//#######################################################//
//------------------LEARNING SCREENS---------------------//
//#######################################################//
const example_picture = function (object, interval){
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  9999, 9999];
  logCounter++;

  //draw image
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width)/2), myCanvas.height/3-((img[object].height)/2));

  //show buttons
  text = "Filler"
  switch(trialmatrix[2][i]){
    case 1:
    text = "Jay";
    break;
    case 2:
    text = "Oriole";
    break;
    case 3:
    text = "Sparrow";
    break;
    case 4:
    text = "Swallow";
    break;
    case 5:
    text = "Thrasher";
    break;
    case 6:
    text = "Vireo";
    break;
    case 7:
    text = "Warbler";
    break;
    case 0:
    text = "Finch";
    break;
  }
  wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/3)+200,400,40,"verdana");

  //timeout variable
  timeoutIMAGE = setTimeout(iti_screen,interval);
};

//#######################################################//
//------------------EXPERIMENT SCREENS-------------------//
//#######################################################//

//-------------------Learning SCREENS--------------------//
const learn_picture = function (){
  interleaved_choice = interleaved1[choice_num]+1
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  slow = 0;
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  $("#Start").hide();
  $("#Start2").hide();
  $("#Start3").hide();
  $("#Start4").hide();
  $("#Start5").hide();
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  if (withinsubs_random == 1){

    document.getElementById("category1").style.background=buttoncolor[0];
    document.getElementById("category2").style.background=buttoncolor[1];
    document.getElementById("category3").style.background=buttoncolor[2];
    document.getElementById("category4").style.background=buttoncolor[3];
    document.getElementById("category5").style.background=buttoncolor[4];
    document.getElementById("category6").style.background=buttoncolor[5];
    document.getElementById("category7").style.background=buttoncolor[6];
    document.getElementById("category8").style.background=buttoncolor[7];

    document.getElementById("category1").style.color=buttoncolortext[0];
    document.getElementById("category2").style.color=buttoncolortext[1];
    document.getElementById("category3").style.color=buttoncolortext[2];
    document.getElementById("category4").style.color=buttoncolortext[3];
    document.getElementById("category5").style.color=buttoncolortext[4];
    document.getElementById("category6").style.color=buttoncolortext[5];
    document.getElementById("category7").style.color=buttoncolortext[6];
    document.getElementById("category8").style.color=buttoncolortext[7];

    //show buttons
    $("#category1").show();
    $("#category2").show();
    $("#category3").show();
    $("#category4").show();
    $("#category5").show();
    $("#category6").show();
    $("#category7").show();
    $("#category8").show();

    $("#category1_dummy").hide();
    $("#category2_dummy").hide();
    $("#category3_dummy").hide();
    $("#category4_dummy").hide();
    $("#category5_dummy").hide();
    $("#category6_dummy").hide();
    $("#category7_dummy").hide();
    $("#category8_dummy").hide();

    if(interleaved1[choice_num]+1 == categorychoice & choice_num != 0){
      document.getElementById("category1").style.background=buttoncolor[0];
      document.getElementById("category2").style.background=buttoncolor[1];
      document.getElementById("category3").style.background=buttoncolor[2];
      document.getElementById("category4").style.background=buttoncolor[3];
      document.getElementById("category5").style.background=buttoncolor[4];
      document.getElementById("category6").style.background=buttoncolor[5];
      document.getElementById("category7").style.background=buttoncolor[6];
      document.getElementById("category8").style.background=buttoncolor[7];

      document.getElementById("category1").style.color=buttoncolortext[0];
      document.getElementById("category2").style.color=buttoncolortext[1];
      document.getElementById("category3").style.color=buttoncolortext[2];
      document.getElementById("category4").style.color=buttoncolortext[3];
      document.getElementById("category5").style.color=buttoncolortext[4];
      document.getElementById("category6").style.color=buttoncolortext[5];
      document.getElementById("category7").style.color=buttoncolortext[6];
      document.getElementById("category8").style.color=buttoncolortext[7];  

      interleaved_choice = interleaved1[choice_num-1]+1
      switch(interleaved1[choice_num-1]){
        case 0:
          document.getElementById("category1").style.background='#cce7ff';
          document.getElementById("category1").style.color='black';
        break;

        case 1:
          document.getElementById("category2").style.background='#cce7ff';
          document.getElementById("category2").style.color='black';
        break;

        case 2:
          document.getElementById("category3").style.background='#cce7ff';
          document.getElementById("category3").style.color='black';
        break;

        case 3:
          document.getElementById("category4").style.background='#cce7ff';
          document.getElementById("category4").style.color='black';
        break;

        case 4:
          document.getElementById("category5").style.background='#cce7ff';
          document.getElementById("category5").style.color='black';
        break;

        case 5:
          document.getElementById("category6").style.background='#cce7ff';
          document.getElementById("category6").style.color='black';
        break;

        case 6:
          document.getElementById("category7").style.background='#cce7ff';
          document.getElementById("category7").style.color='black';
        break;

        case 7:
          document.getElementById("category8").style.background='#cce7ff';
          document.getElementById("category8").style.color='black';
        break;
      }
    }

    if(interleaved1[choice_num]+1 != categorychoice & choice_num != 0){
      interleaved_choice = interleaved1[choice_num]+1
      document.getElementById("category1").style.background=buttoncolor[0];
      document.getElementById("category2").style.background=buttoncolor[1];
      document.getElementById("category3").style.background=buttoncolor[2];
      document.getElementById("category4").style.background=buttoncolor[3];
      document.getElementById("category5").style.background=buttoncolor[4];
      document.getElementById("category6").style.background=buttoncolor[5];
      document.getElementById("category7").style.background=buttoncolor[6];
      document.getElementById("category8").style.background=buttoncolor[7];

      document.getElementById("category1").style.color=buttoncolortext[0];
      document.getElementById("category2").style.color=buttoncolortext[1];
      document.getElementById("category3").style.color=buttoncolortext[2];
      document.getElementById("category4").style.color=buttoncolortext[3];
      document.getElementById("category5").style.color=buttoncolortext[4];
      document.getElementById("category6").style.color=buttoncolortext[5];
      document.getElementById("category7").style.color=buttoncolortext[6];
      document.getElementById("category8").style.color=buttoncolortext[7];

      switch(interleaved1[choice_num]){
        case 0:
          document.getElementById("category1").style.background='#cce7ff';
          document.getElementById("category1").style.color='black';
        break;

        case 1:
          document.getElementById("category2").style.background='#cce7ff';
          document.getElementById("category2").style.color='black';
        break;

        case 2:
          document.getElementById("category3").style.background='#cce7ff';
          document.getElementById("category3").style.color='black';
        break;

        case 3:
          document.getElementById("category4").style.background='#cce7ff';
          document.getElementById("category4").style.color='black';
        break;

        case 4:
          document.getElementById("category5").style.background='#cce7ff';
          document.getElementById("category5").style.color='black';
        break;

        case 5:
          document.getElementById("category6").style.background='#cce7ff';
          document.getElementById("category6").style.color='black';
        break;

        case 6:
          document.getElementById("category7").style.background='#cce7ff';
          document.getElementById("category7").style.color='black';
        break;

        case 7:
          document.getElementById("category8").style.background='#cce7ff';
          document.getElementById("category8").style.color='black';
        break;
      }
    }
  }

  if (withinsubs_random == 0){
    document.getElementById("category1").style.background=buttoncolor[0];
    document.getElementById("category2").style.background=buttoncolor[1];
    document.getElementById("category3").style.background=buttoncolor[2];
    document.getElementById("category4").style.background=buttoncolor[3];
    document.getElementById("category5").style.background=buttoncolor[4];
    document.getElementById("category6").style.background=buttoncolor[5];
    document.getElementById("category7").style.background=buttoncolor[6];
    document.getElementById("category8").style.background=buttoncolor[7];

    document.getElementById("category1").style.color=buttoncolortext[0];
    document.getElementById("category2").style.color=buttoncolortext[1];
    document.getElementById("category3").style.color=buttoncolortext[2];
    document.getElementById("category4").style.color=buttoncolortext[3];
    document.getElementById("category5").style.color=buttoncolortext[4];
    document.getElementById("category6").style.color=buttoncolortext[5];
    document.getElementById("category7").style.color=buttoncolortext[6];
    document.getElementById("category8").style.color=buttoncolortext[7];

    //show buttons
    $("#category1").show();
    $("#category2").show();
    $("#category3").show();
    $("#category4").show();
    $("#category5").show();
    $("#category6").show();
    $("#category7").show();
    $("#category8").show();

    $("#category1_dummy").hide();
    $("#category2_dummy").hide();
    $("#category3_dummy").hide();
    $("#category4_dummy").hide();
    $("#category5_dummy").hide();
    $("#category6_dummy").hide();
    $("#category7_dummy").hide();
    $("#category8_dummy").hide();
  }

  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  text="Which bird?";
  wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/3)+25,400,20,"verdana");

  //timeout variable
  //timeoutIMAGE = setTimeout(iti_screen_sr,interval);
};

const showpicture = function(category, interval){
  slow = 1;
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //show hide buttons
  document.getElementById("category1_dummy").style.background=buttoncolor[0];
  document.getElementById("category2_dummy").style.background=buttoncolor[1];
  document.getElementById("category3_dummy").style.background=buttoncolor[2];
  document.getElementById("category4_dummy").style.background=buttoncolor[3];
  document.getElementById("category5_dummy").style.background=buttoncolor[4];
  document.getElementById("category6_dummy").style.background=buttoncolor[5];
  document.getElementById("category7_dummy").style.background=buttoncolor[6];
  document.getElementById("category8_dummy").style.background=buttoncolor[7];

  document.getElementById("category1_dummy").style.color=buttoncolortext[0];
  document.getElementById("category2_dummy").style.color=buttoncolortext[1];
  document.getElementById("category3_dummy").style.color=buttoncolortext[2];
  document.getElementById("category4_dummy").style.color=buttoncolortext[3];
  document.getElementById("category5_dummy").style.color=buttoncolortext[4];
  document.getElementById("category6_dummy").style.color=buttoncolortext[5];
  document.getElementById("category7_dummy").style.color=buttoncolortext[6];
  document.getElementById("category8_dummy").style.color=buttoncolortext[7];

  $("#category1_dummy").show();
  $("#category2_dummy").show();
  $("#category3_dummy").show();
  $("#category4_dummy").show();
  $("#category5_dummy").show();
  $("#category6_dummy").show();
  $("#category7_dummy").show();
  $("#category8_dummy").show();

  $("#category1").hide();
  $("#category2").hide();
  $("#category3").hide();
  $("#category4").hide();
  $("#category5").hide();
  $("#category6").hide();
  $("#category7").hide();
  $("#category8").hide();

  switch(category){
    case 1:
      object = category1[category1counter]
      if (category1counter < 3){
        category1counter++;
      }
      else {category1counter = 0};
    break;

    case 2:
      object = category2[category2counter]
      if (category2counter < 3){
        category2counter++;
      }
      else {category2counter = 0};
    break;

    case 3:
      object = category3[category3counter]
      if (category3counter < 3){
        category3counter++;
      }
      else {category3counter = 0};
    break;

    case 4:
      object = category4[category4counter]
      if (category4counter < 3){
        category4counter++;
      }
      else {category4counter = 0};
    break;

    case 5:
      object = category5[category5counter]
      if (category5counter < 3){
        category5counter++;
      }
      else {category5counter = 0};
    break;

    case 6:
      object = category6[category6counter]
      if (category6counter < 3){
        category6counter++;
      }
      else {category6counter = 0};
    break;

    case 7:
      object = category7[category7counter]
      if (category7counter < 3){
        category7counter++;
      }
      else {category7counter = 0};
    break;

    case 8:
      object = category8[category8counter]
      if (category8counter < 3){
        category8counter++;
      }
      else {category8counter = 0};
    break;
  }

  //record presentation data
  data[logCounter] = ["SC:", i, onset, object, category, choice_num,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],withinsubs_random,
  interleaved_choice, interleaved1[choice_num]];
  logCounter++;

  //draw image
  size = .60
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width*size)/2), myCanvas.height/3-((img[object].height*size)/2),img[object].width*size,img[object].height*size);

  //timeout variable
  if(withinsubs_random != withinsubsrandomizer[1]){
    timeoutIMAGE = setTimeout(iti_screen_sr,interval);
  }
  if(withinsubs_random == withinsubsrandomizer[1]){
    timeoutIMAGE = setTimeout(iti_screen_sr2,interval); 
  }
};

//---------------------Test SCREENS----------------------//
const test_picture = function (object, interval){
  slow = 0;
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  acc = 99;
  ans = 99;
  object = object;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  //show buttons
  $("#category1").hide();
  $("#category2").hide();
  $("#category3").hide();
  $("#category4").hide();
  $("#category5").hide();
  $("#category6").hide();
  $("#category7").hide();
  $("#category8").hide();

  $("#category1_test").show();
  $("#category2_test").show();
  $("#category3_test").show();
  $("#category4_test").show();
  $("#category5_test").show();
  $("#category6_test").show();
  $("#category7_test").show();
  $("#category8_test").show();


  //sets up the text attributes
  ctx.font="bold 70px Arial";
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";

  //record presentation data
  data[logCounter] = ["SP:", i, onset, object, 9999, 9999,
  trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
  9999, 9999];
  logCounter++;

  //draw image
  size = .60
  ctx.drawImage(img[object], myCanvas.width/2-((img[object].width*size)/2), myCanvas.height/3-((img[object].height*size)/2),img[object].width*size,img[object].height*size);

  //timeout variable
  timeoutIMAGE = setTimeout(iti_screen,interval);
};

//---------Filler Task------------------------//

let namestates = function (){
  type = 4;
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  $("#Start").hide();
  $("#Continue").hide();
  
  $("#category1").hide();
  $("#category2").hide();

  $("#category1_test").hide();
  $("#category2_test").hide();

  $("#category1_dummy").hide();
  $("#category2_dummy").hide();

  $("#startButton").hide();
  
  ctx.textAlign="left";
  text1_namestates = "Now we will take a break from the learning task to do something new."
  text2_namestates = "Below, you'll see a textbox and a submit button. Using your keyboard and mouse, please enter the name of a single U.S. state CAPITAL before submitting enter. You will do this for all 50 states, until you cannot remember any more capitals, or until 3 minutes elapses."
  text3_namestates = "Please do NOT use any external assistance, including (but not limited to) maps or websites. Just do your best!"

  wrapText(ctx,text1_namestates,100,(myCanvas.height/3)-200,700,20,"verdana");
  wrapText(ctx,text2_namestates,100,(myCanvas.height/3)-150,700,20,"verdana");
  wrapText(ctx,text3_namestates,100,(myCanvas.height/3)-30,700,20,"verdana");
  
  $("#StateEntry").show()
  $("#StateEntryButton").show().on('click', function(){
    answer_survey = document.getElementById("StateEntry").value;
    data[logCounter] = ["State:", 9999, 9999, answer_survey, 9999, 9999,
    9999,9999,9999,9999,9999, answer_survey];
    logCounter++;
    document.getElementById("StateEntry").value = "";
    document.getElementById("StateEntry").focus();
  });

  delaytotest(180)
}

////////////////////////////
// FREE RESPONSE QUESTION//
///////////////////////////

const question_pres = function(question_number){
  slow = 0;
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  d1 = new Date();
  onset = d1.getTime() - runStart;
  type = 1;
  $("#Start").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  switch(question_number){
    case 0:
      text1 = 'An INTERLEAVED presentation order is one in which the previous category you studied IS NOT the same as the current category you are studying now.'
      text2 = 'A BLOCKED presentation order is one in which the previous category you studied IS the same as the current category you are studying now.'
      text3 = 'Which of these presentation orders do you think helps you learn more, interleaved or blocked?'

      wrapText(ctx,text1,100,(myCanvas.height/3)-250,700,20,"verdana");
      wrapText(ctx,text2,100,(myCanvas.height/3)-150,700,20,"verdana");
      wrapText(ctx,text3,100,(myCanvas.height/3)-50,700,20,"verdana");

      document.getElementById('interleaved').addEventListener("click", function() {
        data[logCounter] = ["Q1:", i, onset, object, 1, 9999,
        trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
        9999, 9999];
        logCounter++;
        $("#interleaved").hide(); $("#blocked").hide();stimscreencount = 1; slow = 1; iti_screen();});

      document.getElementById('blocked').addEventListener("click", function() {
        data[logCounter] = ["Q1:", i, onset, object, 0, 9999,
        trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
        9999, 9999];
        logCounter++;
        $("#blocked").hide(); $("#interleaved").hide();stimscreencount = 1; slow = 1; iti_screen();});

        $("#interleaved").show()
        $("#blocked").show()

    break;

    case 1:
      text1 = 'If you saw the same images of 4 birds that you just studied, what percentage do you think you would be able to correctly identify in a future test?'
      wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
      document.getElementById('myRange').value = "50";
      document.getElementById('textInput').value = "";
      $("#myRange").show();
      $("#textInput").show();

      document.getElementById('Start2').addEventListener("click", function() {
        recordslider1();});
      $("#Start2").show()
    break;

    case 2:
      text1 = 'If you saw different images of the 4 birds you just studied, what percentage do you think you would be able to correctly identify in a future test?'
      wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
      document.getElementById('myRange2').value = "50";
      document.getElementById('textInput').value = "";
      $("#myRange2").show();
      $("#textInput").show();

      document.getElementById('Start3').addEventListener("click", function() {
        recordslider2();});
      $("#Start3").show()
    break;

    case 3:
      text1 = 'How difficult or easy was it to learn the most recent 4 different bird species?'
      wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");

      $("#likert1").show();
      $("#likert2").show();
      $("#likert3").show();
      $("#likert4").show();
      $("#likert5").show();
      $("#likert6").show();
      $("#likert7").show();
    break;

    case 4:
      text1 = 'During the most recent study phase, how often did you use a strategy to choose which bird to study next?'
      wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");

      $("#likert11").show();
      $("#likert21").show();
      $("#likert31").show();
      $("#likert41").show();
      $("#likert51").show();
      $("#likert61").show();
      $("#likert71").show();
    break;

    case 5:
      text1 = 'At what percent accuracy do you think you categorized birds during the test?'
      wrapText(ctx,text1,100,(myCanvas.height/3)-150,700,20,"verdana");
      document.getElementById('myRange3').value = "50";
      document.getElementById('textInput').value = "";
      $("#myRange3").show();
      $("#textInput").show();

      document.getElementById('Start7').addEventListener("click", function() {
        recordslider3();});
      $("#Start7").show()
    break;


  }

};

const recordslider1 = function(){
  if(document.getElementById("myRange").value != 50){
    ansvalue = document.getElementById("myRange").value
    $("#myRange").hide();
    $("#textInput").hide();
    $("#Start2").hide();
    data[logCounter] = ["Q2:", i, onset, object, ansvalue, 9999,
    trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
    9999, 9999];
    logCounter++; stimscreencount = 1; slow = 1; iti_screen();
  }
  else{
    ctx.fillStyle="red";
    ctx.fillText("Please move the slider before continuing.",(myCanvas.width/2),(myCanvas.height/3)+40);
  }
};

const recordslider2 = function(){
  if(document.getElementById("myRange2").value != 50){
    ansvalue = document.getElementById("myRange2").value
    $("#myRange2").hide();
    $("#textInput").hide();
    $("#Start3").hide();
    data[logCounter] = ["Q3:", i, onset, object, ansvalue, 9999,
    trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
    9999, 9999];
    logCounter++; stimscreencount = 1; slow = 1; iti_screen();
  }
  else{
    ctx.fillStyle="red";
    ctx.fillText("Please move the slider before continuing.",(myCanvas.width/2),(myCanvas.height/3)+40);
  }
};

const recordslider3 = function(){
  if(document.getElementById("myRange3").value != 50){
    ansvalue = document.getElementById("myRange3").value
    $("#myRange3").hide();
    $("#textInput").hide();
    $("#Start7").hide();
    data[logCounter] = ["Q6:", i, onset, object, ansvalue, 9999,
    trialmatrix[0][i],trialmatrix[1][i],trialmatrix[2][i],trialmatrix[3][i],
    9999, 9999];
    logCounter++; stimscreencount = 1; slow = 1; iti_screen();
  }
  else{
    ctx.fillStyle="red";
    ctx.fillText("Please move the slider before continuing.",(myCanvas.width/2),(myCanvas.height/3)+40);
  }
};


//#######################################################//
//------------------ITI SCREENS------------------//
//#######################################################//

const iti_screen = function(){
  $("#StateEntry").hide();
  $("#StateEntryButton").hide();
  document.getElementById("category1_dummy").style.background='#808080';
  document.getElementById("category2_dummy").style.background='#808080';
  document.getElementById("category3_dummy").style.background='#808080';
  document.getElementById("category4_dummy").style.background='#808080';
  document.getElementById("category5_dummy").style.background='#808080';
  document.getElementById("category6_dummy").style.background='#808080';
  document.getElementById("category7_dummy").style.background='#808080';
  document.getElementById("category8_dummy").style.background='#808080';

  $("#Example").hide()
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/3),400,20,"verdana");

  if (slow == 0){
    wrapText(ctx,"Too Slow",(myCanvas.width/2),(myCanvas.height/3)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/3)+25,400,20,"verdana");
  }

  //timeout variable
  stimscreencount = 1;
  timeoutITI = setTimeout(runTrial,ITIinterval);
};

const iti_screen_sr = function(){
  $("#StateEntry").hide();
  $("#StateEntryButton").hide();
  document.getElementById("category1_dummy").style.background=buttoncolor[0];
  document.getElementById("category2_dummy").style.background=buttoncolor[1];
  document.getElementById("category3_dummy").style.background=buttoncolor[2];
  document.getElementById("category4_dummy").style.background=buttoncolor[3];
  document.getElementById("category5_dummy").style.background=buttoncolor[4];
  document.getElementById("category6_dummy").style.background=buttoncolor[5];
  document.getElementById("category7_dummy").style.background=buttoncolor[6];
  document.getElementById("category8_dummy").style.background=buttoncolor[7];

  document.getElementById("category1_dummy").style.color=buttoncolortext[0];
  document.getElementById("category2_dummy").style.color=buttoncolortext[1];
  document.getElementById("category3_dummy").style.color=buttoncolortext[2];
  document.getElementById("category4_dummy").style.color=buttoncolortext[3];
  document.getElementById("category5_dummy").style.color=buttoncolortext[4];
  document.getElementById("category6_dummy").style.color=buttoncolortext[5];
  document.getElementById("category7_dummy").style.color=buttoncolortext[6];
  document.getElementById("category8_dummy").style.color=buttoncolortext[7];

  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  choice_num++;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/3),400,20,"verdana");

  if (slow == 0){
    wrapText(ctx,"Too Slow",(myCanvas.width/2),(myCanvas.height/3)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/3)+25,400,20,"verdana");
  }

  //timeout variable
  if (choice_num < choice_total){stimscreencount = 2;}
  if (choice_num >= choice_total){
    choice_num = 0; interleaved1=interleaved2;
    buttoncolor=buttoncolor2; buttoncolortext=buttoncolortext2; stimscreencount = 3;}

  timeoutITI = setTimeout(runTrial,ITIinterval);
};

const iti_screen_sr2 = function(){
  document.getElementById("category1_dummy").style.background=buttoncolor[0];
  document.getElementById("category2_dummy").style.background=buttoncolor[1];
  document.getElementById("category3_dummy").style.background=buttoncolor[2];
  document.getElementById("category4_dummy").style.background=buttoncolor[3];
  document.getElementById("category5_dummy").style.background=buttoncolor[4];
  document.getElementById("category6_dummy").style.background=buttoncolor[5];
  document.getElementById("category7_dummy").style.background=buttoncolor[6];
  document.getElementById("category8_dummy").style.background=buttoncolor[7];

  document.getElementById("category1_dummy").style.color=buttoncolortext[0];
  document.getElementById("category2_dummy").style.color=buttoncolortext[1];
  document.getElementById("category3_dummy").style.color=buttoncolortext[2];
  document.getElementById("category4_dummy").style.color=buttoncolortext[3];
  document.getElementById("category5_dummy").style.color=buttoncolortext[4];
  document.getElementById("category6_dummy").style.color=buttoncolortext[5];
  document.getElementById("category7_dummy").style.color=buttoncolortext[6];
  document.getElementById("category8_dummy").style.color=buttoncolortext[7];

  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  choice_num++;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/3),400,20,"verdana");

  if (slow == 0){
    wrapText(ctx,"Too Slow",(myCanvas.width/2),(myCanvas.height/3)-25,400,20,"verdana");
    wrapText(ctx,text,(myCanvas.width/2),(myCanvas.height/3)+25,400,20,"verdana");
  }

  //timeout variable
  if (choice_num < choice_total){stimscreencount = 2;}
  if (choice_num >= choice_total){stimscreencount = 1;}

  timeoutITI = setTimeout(runTrial,ITIinterval);
};

const iti_screen_transition = function(){
  clearTimeout(timeoutIMAGE);
  timeoutIMAGE = null;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  timeoutIMAGE = null;
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  wrapText(ctx,"*",(myCanvas.width/2),(myCanvas.height/3),400,20,"verdana");

  //timeout variable
  stimscreencount = 2
  timeoutITI = setTimeout(runTrial,ITIinterval);
};
