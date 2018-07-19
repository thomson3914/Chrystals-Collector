// create variables
var targetNum;
var loss = 0;
var win = 0;
var total = 0;

// function to reset and start the game
var resetAndStart = function () {

    // this empties the crystals
    $(".crystals").empty(); 

    // images for crystals
    var images = [
        './assets/images/crystal1.jpg', 
        './assets/images/crystal2.jpg', 
        './assets/images/crystal3.jpg', 
        './assets/images/crystal4.jpg'];
    
    // generates new random target number
    targetNum = Math.floor(Math.random() * 80) + 40;

    // Add to the DOM
    $("#result").html(targetNum);

    // for loop to create the 4 crystals
    for(var i = 0; i < 4; i++){

        // generates the crystals random number
        var random = Math.floor(Math.random() * 11) + 1;
    
        // creates the div for ramdom number and put it to this attribute
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', 
                "data-random": random            
            });
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

            });
            
        // the crystal added to the dom
        $(".crystals").append(crystal);
    }

    // sets the id total to the variable total
    $("#total").html(total);

}



// reload the page and go through the function above
resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

   var num = parseInt($(this).attr('data-random'));

   total += num;

   $("#total").html(total);

   console.log(total);

    // if you lose = resetAndStrart
   if(total > targetNum) {
        loss++;

        $("#lost").html(loss);

        total = 0;

        resetAndStart(); 
   }

    // if you win = resetAndStrart
   else if(total === targetNum){
       win++;

       $("#win").html(win);

       total = 0;

       resetAndStart(); 
   }

});