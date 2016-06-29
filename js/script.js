$(document).ready(function() {
	event.preventDefault();
$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){

        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
//     var myIndex = 0; 
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }
  $('.nav-item').click(function(){
   window.location.href= 'logIn.html';
});
  $(".cat").on("click",chooseCategory)
  function chooseCategory(){
  	  event.preventDefault();
  	  $("#grid").empty();
  	  $("#grid" ).load( "quiz.html" );
  }
$(".arrow-down").click(function(){
$('html, body').animate({ scrollTop:  $("#topSession").offset().top - -860 }, 'slow');
})

var questions = [{
    question: " What is part of a database that holds only one type of information?",
    choices: ["Report", "Field", "Record", "File"],
    correctAnswer: 2
}, {
    question: "OS computer abbreviation usually means ?",
    choices: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"],
    correctAnswer: 3
}, {
    question: "What frequency range is the High Frequency band?",
    choices: ["100 kHz", "1GHZ", "30 to 300 MHz", "3 to 30 MHz"],
    correctAnswer: 4
}, {
    question: "What does the term PLC stand for?",
    choices: ["Programmable Lift Computer", "Program List Control", "Programmable Logic Controller", "Piezo Lamp Connector"],
    correctAnswer: 3
}, {
    question: "'.BAT' extension refers usually to what kind of file?",
    choices: ["Compressed Archive file", "System file", "Audio file", "Backup file"],
    correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

/*Display the first question*/
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

     $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } 
            else {
                 /*TODO: Remove any message -> not sure if this is efficient to call this each time....*/
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {

                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
$("#arrow").click(function(backToCategory){
	alert("are you sure to back to categories list?");
	window.location.href= 'categories.html';
})

$("#fb-root").click(function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    });
});


