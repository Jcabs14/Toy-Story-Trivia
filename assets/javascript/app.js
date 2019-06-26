$(document).ready(function () {

    //create variables counters for correct,uncorrect, and unanswered.
    var correctCounter = 0;
    var incorrectCounter = 0;
    var questionCounter = 0;
    var unansweredCounter = 0;
    var clockCounter = 30;
    var userAnswer;

    //create an array of questions
    var questionArray = ["What year did Toy Story come out?", "Who is the actor who plays the voice of Woody?",
        "What is the name of Buzz-Lightyears arch nemesis?", "Which Toy Story did Bo-Peep and the gang reunite in?",
        "What is the name of Woody's TV show first shown in Toy Story 2", "What is the name of the popular pizza chain resturant in the Toy Story universe?",
        "What is the name of the owner of all the toys?"];

    //create an array of answers
    var answerArray = [["1989", "1995", "2000", "2003"], ["Nicolas Cage", "Tim Allen", "Tom Hanks", "Forest Whittiker"],
    ["Cid", "Alien", "Emporer Zurg", "Woody"], ["Toy Story", "Toy Story 2", "Toy Story 3", "Toy Story 4"],
    ["Woody's camp", "Woody's house of fun", "Woody's cool show", "Woody's round up"], ["Pizza Planet", "Pizza World", "Pizza Universe", "Buzz LightYears Pizza"], 
    ["James", "Brian", "Andy", "Mac"]];

    //create an array of images
    var imageArray = ["assets/images/correct1.gif","assets/images/correct2.gif","assets/images/correct3.gif","assets/images/correct4.gif",
    "assets/images/correct5.gif","assets/images/correct6.gif","assets/images/correct7.gif",];

    //create an array of correct answers"
    var correctAnswerArray = ["B. 1995", "B. Tim Allen"]

    //create questions
    function createQuestions() {
        $("#questionArea").html("<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>");
    }



    //function when clock hits 0
    function timeOut() {
        unansweredCounter++;
        $("#questionArea").html()
        setTimeout(wait,4000);

    }

    //function to count correct answers
    function correctAnswers() {
        correctCounter++;
        $("#questionArea").html();
        setTimeout(wait, 4000);

    }
    //function to count wrong answers
    function wrongAnswers() {
        wrongCounter++;
        $("#questionArea").html()
        setTimeout(wait, 4000);
    }

    //create timer interval
    function questionTimer() {
        clockInterval = setInterval(timerCountdown, 1000);
        function timerCountdown() {
            if (clockCounter === 0) {
                clearInterval(clockInterval);
                timeOut();
            }
            if (clockCounter > 0) {
                clockCounter--;
            }
            $(".timer").html(clockCounter);
        }
    }
    //function to go through questions
    function wait() {
        //ternary operator replacing if/else for generate more questions
        if (questionCounter < 7) {
            questionCounter++ ,
                createQuestions(),
                clockCounter = 30,
                questionTimer();
        }
        else {

        }
    };
    //start page to start the trivia
    //create starting page
    function startPage() {
        $('.container').append("<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>");

        $(".start-button").on("click", function (event) {
            $(".jumbotron").hide();
            createQuestions();
        });
        questionTimer();

        //on click function to move to the next question

        $(".answer").on("click", function (event) {
            if (userAnswer === correctAnswerArray[questionCounter]) {


            }
            else {
                timeOut();
                wrongAnswers();

            }
        });

    };

    startPage();
});