// implementing anon function
//check for class of drum, loop all the button, how many button we have

//adding an event listener

//Detecting button press. A sample of button press.

//Implmentation of buttons using javascript
//High order functions 

var numOfDrumButton = document.querySelectorAll(".drum").length;


for (var i = 0; i< numOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
      var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

     document.addEventListener("keypress", function(event){

        //send the key property of the event

        makeSound(event.key);
        
        buttonAnimation(event.key);

      });
       
        
      function makeSound(key){
          //switch based on key parameter
        switch (key) {
            case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play(); 
           break;
  
           case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play(); 
           break;
  
           case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play(); 
           break;
           
           case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play(); 
           break;
  
           case "j":
            var audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play(); 
           break;
  
           case "k":
            var audioKick = new Audio("sounds/kick-bass.mp3");
            audioKick.play(); 
           break;
  
           case "l":
            var audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play(); 
           break;
  
            default: console.log(buttonInnerHTML);
        }
      }

      //button animation, that highlights and removes it white its pressed.



      function buttonAnimation(currentKey){

        //this function implements currentKey that is pressed

        //similar grabs the current key above for mouse and keyboard click

        //adds to a class called classList

          var activeButton = document.querySelector("." + currentKey);

            activeButton.classList.add("pressed");
          
            //after 0.1 sec the class is removed from classList
            setTimeout(function(){ 
                activeButton.classList.remove("pressed");
            }, 100);

          //theres a css where there is class .pressed adding pressed class to the active button

      }
        //alert("I got clicked!"); 

        //What to do when click is detected
     
}

//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();