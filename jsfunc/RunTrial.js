//#######################################################//
//-----------------------RUN EXPERIMENT------------------//
//#######################################################//
const runTrial = function (){
  timeoutITI = null;
  clearTimeout(timeoutITI);
  if (trialcount < totallength){
    switch (stimscreencount){
      case 0:
        //instruction screens
        switch(trialmatrix[0][i]){
          case 99:
            instructions_example();
          break;
          //instructtion screens
          case 100:
            instructions(trialmatrix[0][i]);
          break;

          case 101:
            instructions(trialmatrix[0][i]);
          break;

          case 102:
            instructions(trialmatrix[0][i]);
          break;

          case 103:
            instructions(trialmatrix[0][i]);
          break;
          //example of each bird pictures
          case 0:
            example_picture(trialmatrix[1][i], IMAGEstudyinterval);
          break;
          //study images
          case 1:
            learn_picture(IMAGEstudyinterval);
          break;
          //survey questions
          case 2:
            question_pres(trialmatrix[1][i]);
          break;
          //criterion test
          case 3:
            test_picture(trialmatrix[1][i],IMAGEinterval);
          break;
          //more survey questions
          case 4:
            question_pres(trialmatrix[1][i]);
          break;
        }
      break;

      case 1:
        stimscreencount = 0; i++; trialcount++; acctotalcount++; instructionson = 0; runTrial();
      break;

      //for self regulated learning holding pattern
      case 2:
        stimscreencount = 0; runTrial();
      break;

      //break between two learning stages
      case 3:
        stimscreencount = 0; withinsubs_random = withinsubsrandomizer[1]; instructions(104);
      break;
    }
  }
  else {
    //alert(data.join(";"));
    $("#info").css("color","white");
    //$("#info").show();
    $("#info").text(data.join(";"));
    //$("#mturk_form").show();
    $("#RTs", opener.window.document).val(data.join(";"));
    opener.updateMainMenu(3);
    JavaScript:window.close();
  }
};
