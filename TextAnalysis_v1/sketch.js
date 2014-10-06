///////// user input
var userInput;
var submitButton;


// if cA > cB : normal 
// if cA < cB : psycho

function setup() {
  
  // No canvas
  // Though doing something visual with this is a great idea for an assignment
  noCanvas();

  // just make inputbox - for users
  userInput = getElement("userInput");
  submitButton = getElement("submitButton");
  submitButton.mousePressed(getUserInput);
}



// inputbox for users
function getUserInput(){

  var inputTexts = userInput.value(); // get value from textarea
  var tokens = inputTexts.split(/\W+/);

  // load the json file- locally
  $.getJSON("test.json", function(json) {
    var results = json;

    // console.log(results['actually']);

    // counter for each category
    var a = 0; // a category
    var b = 0; // b category

    // looping through the input texts and spit out the words
    tokens.forEach(function(w){
      console.log(w);
      if(results[w]) {
        //console.log("yes I found the " + w);
        //console.log(w + "'s counterB is : " + results[w].countB);

        // create an empty array
        var wordFreqA = [];
        var wordFreqB = [];

        // if user's word is matched with category A AND B's word
        if (results[w].countA > 0 && results[w].countB > 0){
          wordFreqA.push(results[w]);
          wordFreqB.push(results[w]);

          a++;
          b++;
        } else if (results[w].countA > 0 ){ // if it is matched with category A's word
          //console.log( w + "You used the counterA's words");
          wordFreqA.push(results[w]);
          //console.log("this is frequency A: ");
          //console.log(wordFreqA);
          
          a++;
          
          //wordFreq[w].cA++;
          // console.log(wordFreq[w].cA);
        } else if (results[w].countB > 0){ // if it is matched with category B's word
          //console.log( w + "You used the counterB's words");
          wordFreqB.push(results[w]);
          //console.log("this is frequency B:")
          //console.log(wordFreqB);

          b++;
          
        } 
          if(b>a){
          $('body').css("background-color","red");
          $('#output').html("");
          $('#output').append("you are CRAZY!");
          }else if(b<a){
          $('body').css("background-color","blue");
          $('#output').html("");
          $('#output').append("you are normal.");
          }else if(a==b){
          $('body').css("background-color","white");
          $('#output').html("");
          $('#output').append("what are you?");

          }



        console.log("a: " + a + " b: " + b);

      } 

    });

  });

}
