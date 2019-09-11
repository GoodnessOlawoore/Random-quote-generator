// on page load hide everything except the buttons to run the generator
$('.quotes').hide();
$('.form-group').hide();
$('.quit').hide();
$('p').hide();
var number, part1, part2, part3; 
function Fragment(array) {
    this.array = array;
}

var $beginning = new Fragment(["Success ", "Absolute success ", "success ", "success ", "Good success ", "Success ", "Success ", 
"True Success ", "Success ", "Great Success "]);

var $middle = new Fragment(["is not final, ",  "is the accomplishment of an aim or purpose, ", "usually comes to those who are too busy to be looking for it, ",
 "is walking from failure, ", "is sweet, ", "is the result of preparation, ", "is the result of hard work, ", "is the result of learning from failure, ", 
 "seems to be connected with action, ", "is about what you inspire others to do, "]);

var $end = new Fragment(["its path isn't always smooth.","sounds funny but it usually comes to those who are too busy to be looking for it.", 
"successful people do what unsuccessful people are not willing to do.", "double your rate of failure, success lies in that path.", 
"if you are not willing to risk the usual, you will have to settle for the ordinary.", "successful people have momentum. The more they succeed, the more they want to succeed", 
"sweet!", "most overnight successes took a long time.", "successful people keep moving. They make mistakes, but they don't quit.", 
"If you love what you are doing, you will be successful."]);

var $beginning2 = new Fragment(["Failure", "Failure ", "Failure ", "Failure ", "Failure ", "Failure ", "Failure ", "Failure ", "Failure ", "Failure "]);

var $middle2 = new Fragment(["tends to be more public than success, ",  ", we fret it, ", ", it may be one epic failure or a series of failures , ", 
" isn't fatal, ", "are finger posts on the road to achievement, ", "should be our teacher, not our undertaker, ", 
"is delay, not defeat, ", "is a temporary detour, not a dead end, ", "is something we can avoid only by saying nothing, ", " gives you the proper perspective on success, "]);

var $end2 = new Fragment(["but it is a necessary stepping stone to achieving our dreams.","but failure to change might be fatal.", 
"there is no failure except in no longer trying.", "it is the courage to continue that counts.", "People who avoid failure also avoid success.", "use it as a stepping stone.", 
"it is not failure if you enjoyed the process.", "winners fail until they succeed.", "you must not confuse a single failure with a final defeat.", 
"you have to let your failures teach you."]);

function generateQuotes (array1, array2, array3){      
    for (var i=0; i<array1.length; i++){
        part1 = array1[Math.floor(Math.random()*array1.length)];
        part2 = array2[Math.floor(Math.random()*array2.length)];
        part3 = array3[Math.floor(Math.random()*array3.length)];
    }   
};

//function to show success quotes
function showSuccessQuotes() {
    //delete prior quotes from memory
    $('.quotes').empty();
    //save the input value
    //ensures the current input value is used to generate fresh quotes
    number =  $('input').val();
    //randomly generate quotes as often as the input number 
    //add star to the beginning of the quote and dynamically add the quote to the quotes class
    for (var i = 0; i<number; i++){
        generateQuotes($beginning.array, $middle.array, $end.array);
        $('.quotes').append("<i class='fas fa-star'></i> " + part1 + part2 + part3).append('<br>');
    }      
    //dynamically set background color 
    $('.quotes').css('background-color', 'rgbrgb(71, 32, 32)').css('color', '(228, 205, 205)');
    //hide the input field
    //fade in the quotes
    //show the success quotes and failure quotes buttons
    $('.btn-warning').show();
    $('.quotes').fadeIn(1500);
    $('.form-group').hide(); 
};

//function to show failure quotes
function showFailureQuotes(){
    //delete prior quotes from memory
    $('.quotes').empty();
    //save the input value
    //ensures the current input value is used to generate fresh quotes
    number = $('input').val();

    //randomly generate quotes as often as the input number
    //add broken times to the beginning of the quote and dynamically add the quote to the quotes class
    for (var i=0; i< number; i++){
    generateQuotes($beginning2.array, $middle2.array, $end2.array);
    $('.quotes').append("<i class='fas fa-times'></i> " + part1 + part2 + part3).append('<br>');
    }
    //dynamically set background color
    $('.quotes').css('background-color', 'rgbrgb(71, 32, 32)').css('color', '(228, 205, 205)');
    //hide the input field
    //fade in the quotes
    //show the success quotes and failure quotes buttons
    $('.form-group').hide(); 
    $('.quotes').fadeIn(1500);
    $('.btn-warning').show();
};

function enterInput(){
    //show input field 
    $('.form-group').slideDown();
    //hide success quotes button, failure quotes button, and the prior quotes
    $('.btn-warning').hide();
    $('.quotes').hide();
}

//on click function for success quotes button
$('.success-quotes').on('click', function(){
    enterInput();
    
    //keypress function to check when a user has accessed the input field
    $('input').keypress(function(event){

        //check if the enter key has been pressed    
        var keycode = (event.keyCode ? event.keyCode : event.which);

        //only run the rest of the function if the enter key has been pressed
        //this prevents the code from running when a user simply begins to type a number
	    if(keycode == '13'){

        //save the input number
            number = $('input').val();
        //after a number has been entered, do the following:
            //check which number was keyed in to determine number of quotes to display
            //run the function to show quotes as often as the input number
            if (number === '1'){
                showSuccessQuotes(); 
            }
            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showSuccessQuotes();
                    }
            }
            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showSuccessQuotes();
                    }
            }
            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showSuccessQuotes();
                    }    
            }
            else if (number === '5'){
                for (var i=0; i< number; i++){
                    showSuccessQuotes();
                    }
            }
            else {
                $('.btn-warning').show();
                $('.quotes').empty().hide();
                $('.form-group').hide();
            }
        }
    });    
   //reset input value to null 
   $('input').val('');
});

//on click function for failure quotes button
$('.failure-quotes').on('click', function(){
    enterInput();
    
    //keypress function to check when a user has accessed the input field
    $('input').keypress(function(event){

        //check if the enter key has been pressed    
        var keycode = (event.keyCode ? event.keyCode : event.which);

        //only run the rest of the function if the enter key has been pressed
        //this prevents the code from running when a user simply begins to type a number
	    if(keycode == '13'){

        //save the input number
        var number = $('input').val();
        //after a number has been entered, do the following:
            //check which number was keyed in to determine number of quotes to display
            //run the function to show quotes as often as the input number
            if (number ==='1'){
                showFailureQuotes();
               }
            else if (number === '2'){
                for (var i=0; i< number; i++){
                    showFailureQuotes();
                    }       
                }
            else if (number === '3'){
                for (var i=0; i< number; i++){
                    showFailureQuotes();
                } 
            }

            else if (number === '4'){
                for (var i=0; i< number; i++){
                    showFailureQuotes();
                }
            }
            else if (number === '5'){
                for (var i=0; i< number; i++){
                showFailureQuotes();
                }
            }
            else {
                $('.btn-warning').show();
                $('.quotes').empty().hide();
                $('.form-group').hide();
            }
        }
    });
    //reset input value to null
    $('input').val('');

});

//on click function to quit running the generator
$('.quit').on('click', function(){
    $('.btn-warning').hide();
    $('.quotes').hide();
    $('.quit').hide();
    $('p').show();
});