//#######################################################//
//-----------------------LOAD IMAGES---------------------//
//#######################################################//
const loadImage = function (callback){
  var myCanvas=document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  $("#startButton").hide();
  //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.fillStyle="white";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.font="bold 45px Arial";

  //wrapText(ctx,"The task is loading. Please wait.",(myCanvas.width/2),(myCanvas.height/2)-25,400,20,"verdana");
  //ctx.fillText(Math.round((imgCount/fileName.length)*100)-1.4+"%", (myCanvas.width/2), (myCanvas.height/2)+25);


  while (imgCount < fileName.length)
  {
    img[imgCount] = new Image();
    img[imgCount].src=fileName[imgCount];
    img[imgCount].onload=loadImage;
    imgCount++;
  }

  if (typeof callback === 'function' & imgCount >= fileName.length) {
      callback(runTrial);
    };
};

//#######################################################//
//-----------------------TRIAL MATRIX--------------------//
//#######################################################//

const createTrialMatrix = function(callback){
  //#######################################################//
  //-----------------------LEARNING SET -------------------//
  //#######################################################//

  category1 = []
  category2 = []
  category3 = []
  category4 = []
  category5 = []
  category6 = []
  category7 = []
  category8 = []

  random_set = [0,1]
  shuffle(random_set)

  for (g=0; g < img.length; g++){
    if (image_version[g] == random_set[0]){
      if (image_type[g] == 0){
        category1.push(g)
      }
      if (image_type[g] == 1){
        category2.push(g)
      }
      if (image_type[g] == 2){
        category3.push(g)
      }
      if (image_type[g] == 3){
        category4.push(g)
      }
      if (image_type[g] == 4){
        category5.push(g)
      }
      if (image_type[g] == 5){
        category6.push(g)
      }
      if (image_type[g] == 6){
        category7.push(g)
      }
      if (image_type[g] == 7){
        category8.push(g)
      }
    }
    if (image_version[g] == random_set[1]){
      if (image_type[g] == 0){
        category1.push(g)
      }
      if (image_type[g] == 1){
        category2.push(g)
      }
      if (image_type[g] == 2){
        category3.push(g)
      }
      if (image_type[g] == 3){
        category4.push(g)
      }
      if (image_type[g] == 4){
        category5.push(g)
      }
      if (image_type[g] == 5){
        category6.push(g)
      }
      if (image_type[g] == 6){
        category7.push(g)
      }
      if (image_type[g] == 7){
        category8.push(g)
      }
    }
  }

  shuffle(category1);
  shuffle(category2);
  shuffle(category3);
  shuffle(category4);
  shuffle(category5);
  shuffle(category6);
  shuffle(category7);
  shuffle(category8);

  //#######################################################//
  //-----------------------TRIAL MATRIX--------------------//
  //#######################################################//
  example_instruct = [99999]
  study_instruct = [99999]
  study_placeholder = [99999]
  test_instruct = [99999]
  question_instruction = [99999]
  questions1 = [0,1,2,3]
  questions2 = [4,5]

  images_final = []
  image_category_final = []

  //first the example images
  exampleimages_temp = [category1[0],category2[0],category3[0],category4[0],
                    category5[0],category6[0],category7[0],category8[0]]
  examplecategory_temp = [0,1,2,3,4,5,6,7]
  exampleimages=[]
  examplecategory=[]

  random_pres_img = []
  for (var g=0;g< 8;g++) {
    random_pres_img.push(g);
  }
  shuffle(random_pres_img);

  for (g = 0; g < 8; g++){
    exampleimages.push(exampleimages_temp[random_pres_img[g]])
    examplecategory.push(examplecategory_temp[random_pres_img[g]])
  }

  //now the test images
  testimages = []
  testcategories = []

  random_img = []
  for (var g=0;g< fileName.length;g++) {
    random_img.push(g);
  }
  shuffle(random_img);

  for (g = 0; g < img.length; g++){
    testimages.push(random_img[g])
    testcategories.push(image_type[random_img[g]])
  }

  //////////////////////////////////////////////////////////////////////
  //now the within subjects manipultion of two bird sets for learning///
  //////////////////////////////////////////////////////////////////////
  
  //randomizer for bird groups
  bird_randomizer = [0,1,2,3,4,5,6,7]
  shuffle(bird_randomizer)

  interleaved_set_1 = [bird_randomizer[0],bird_randomizer[1],bird_randomizer[2],bird_randomizer[3]]
  interleaved_set_2 = [bird_randomizer[4],bird_randomizer[5],bird_randomizer[6],bird_randomizer[7]]
  interleaved1 = []
  interleaved2 = []

  for (g = 0; g < 16; g++){
    shuffle(interleaved_set_1)
    shuffle(interleaved_set_2)
    if (g < 8){
      interleaved_set = interleaved_set_1
      if (g == 0){
       interleaved1 = interleaved1.concat(interleaved_set)
      }
      else{
        while(interleaved_set[0] == interleaved1[interleaved1.length-1]){
          shuffle(interleaved_set)
        }
        interleaved1 = interleaved1.concat(interleaved_set)
      }
    }
    if (g > 7){
      interleaved_set = interleaved_set_2
      if (g == 0){
       interleaved2 = interleaved2.concat(interleaved_set)
      }
      else{
        while(interleaved_set[0] == interleaved2[interleaved2.length-1]){
          shuffle(interleaved_set)
        }
        interleaved2 = interleaved2.concat(interleaved_set)
      }
    }
  }

  //set color scheme
  coloron = '#003666'
  colorontext = 'white'
  coloroff = 'black'

  buttoncolor = []
  buttoncolortext = []
  buttoncolor2 = []
  buttoncolortext2 = []

  for (g = 0; g < 8; g++){
    if (interleaved_set_1.includes(g)){
      buttoncolor.push(coloron)
      buttoncolortext.push(colorontext)
      buttoncolor2.push(coloroff)
      buttoncolortext2.push(coloroff)
    }
    else{
      buttoncolor.push(coloroff)
      buttoncolortext.push(coloroff)
      buttoncolor2.push(coloron)
      buttoncolortext2.push(colorontext)
    }
  }

  //----------------------Within subs order--------------//
  withinsubsrandomizer = [0,1]
  shuffle(withinsubsrandomizer)
  withinsubs_random = withinsubsrandomizer[0]


  //concat these arrays
  images_final = images_final.concat(example_instruct.concat(exampleimages.concat(study_instruct.concat(study_placeholder.concat(question_instruction.concat(questions1.concat(test_instruct.concat(testimages.concat(question_instruction.concat(questions2))))))))))
  image_category_final = image_category_final.concat(example_instruct.concat(examplecategory.concat(study_instruct.concat(study_placeholder.concat(question_instruction.concat(questions1.concat(test_instruct.concat(testcategories.concat(question_instruction.concat(questions2))))))))))

  //create an array for the stage
  stage = []
  for (g = 0; g < totallength; g++){
    //instructions for  exxamples
    if (g == 0){
      stage.push(99)
    }
    //example images
    if (g > 0 & g < 9){
      stage.push(0)
    }
    //instructions for study
    if (g == 9){
      stage.push(100)
    }
    //placeholder for self-regulated study
    if (g == 10){
      stage.push(1)
    }
    //question instructions
    if (g == 11){
      stage.push(101)
    }
    //questions
    if (g > 11 & g < 16){
      stage.push(2)
    }
    //test instructions
    if (g == 16){
      stage.push(102)
    }
    //test images
    if (g > 16 & g < 81){
      stage.push(3)
    }
    // survey instructions
    if (g == 81){
      stage.push(103)
    }
    // survey instructions
    if (g > 81){
      stage.push(4)
    }
  }

  //between subs
  betweencat = []
  betweensubs = [0,1,2]
  shuffle(betweensubs)

  for (g = 0; g < totallength; g++){
    betweencat.push(2)//betweensubs[0])
  }

  //slip em in to a trial MATRIX
  trialmatrix = [stage, images_final,image_category_final,betweencat];

  //now let's run the trial/task
  if (typeof callback === 'function') {
      callback();
    }
};
