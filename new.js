//Setting of questions
const questionbox=[
    {
        question:"What is the Capital of India?",
        choices:[
            {option:"New Delhi",value:true},
            {option:"Mumbai",value:false},
            {option:"Chennai",value:false},
            {option:"Kolkata",value:false}
        ]
    },
    {
        question:"Which team won the FIFA Worldcup 2022?",
        choices:[
            {option:"Brazil",value:false},
            {option:"Croatia",value:false},
            {option:"France",value:false},
            {option:"Argentina",value:true}
        ]
    },
    {
        question:"Who was the first PM of India?",
        choices:[
            {option:"Narendra Modi",value:false},
            {option:"Jawaharlal Nehru",value:true},
            {option:"Rajendra Prasad",value:false},
            {option:"Indira Gandhi",value:false}
        ]
    },
    {
        question:"What is capital of Maharashtra?",
        choices:[
            {option:"Mumbai",value:true},
            {option:"Pune",value:false},
            {option:"Aurangabad",value:false},
            {option:"Nagpur",value:false}
        ]
    },
    {
        question:"Which team won the CWC 2023?",
        choices:[
            {option:"New Zealand",value:false},
            {option:"India",value:false},
            {option:"Australia",value:true},
            {option:"South Africa",value:false}
        ]
    },
    {
        question:"Who was the POTT in CWC 2023?",
        choices:[
            {option:"Rachin Ravindra",value:false},
            {option:"Rohit Sharma",value:false},
            {option:"Kane Williamson",value:false},
            {option:"Virat Kohli",value:true}
        ]
    },
    {
        question:"Who is the current BCCI Secretary?",
        choices:[
            {option:"Amit Shah",value:false},
            {option:"Shivang Mishra",value:false},
            {option:"Jay Shah",value:true},
            {option:"Saurav Ganguly",value:false}
        ]
    },
    {
        question:"Who is regarded as 'CAPTAIN COOL' in cricket?",
        choices:[
            {option:"MS Dhoni",value:true},
            {option:"Rohit Sharma",value:false},
            {option:"Kane Williamson",value:false},
            {option:"Virat Kohli",value:false}
        ]
    },
    {
        question:"Who among the following has most Grand Slams in Tennis?",
        choices:[
            {option:"Roger Federer",value:false},
            {option:"Novak Djokovic",value:true},
            {option:"Andy Murray",value:false},
            {option:"Rafael Nadal",value:false}
        ]
    },
    {
        question:"Which Footballer won the Ballon dor in 2017?",
        choices:[
            {option:"Lionel Messi",value:false},
            {option:"Neymar Jr",value:false},
            {option:"Cristiano Ronaldo",value:true},
            {option:"Luis Suarez",value:false}
        ]
    },
    {
        question:"What is the Capital of Australia?",
        choices:[
            {option:"Perth",value:false},
            {option:"Sydney",value:false},
            {option:"Adelaide",value:false},
            {option:"Canberra",value:true}
        ]
    },
    {
        question:"Which team won the IPL 2023?",
        choices:[
            {option:"Mumbai Indians",value:false},
            {option:"Gujrat Titans",value:false},
            {option:"Chennai Super Kings",value:true},
            {option:"Kolkata Knight Riders",value:false}
        ]
    },
    {
        question:"Who among the following is regarded as the 'KING KHAN' of Bollywood?",
        choices:[
            {option:"Shah Rukh Khan",value:true},
            {option:"Salman Khan",value:false},
            {option:"Amir Khan",value:false},
            {option:"Saif Ali Khan",value:false}
        ]
    },
    {
        question:"Who has the most goals in the History of football?",
        choices:[
            {option:"Pele",value:false},
            {option:"Maradona",value:false},
            {option:"Lionel Messi",value:false},
            {option:"Cristiano Ronaldo",value:true}
        ]
    },
    {
        question:"What is the Capital of Madhya Pradesh?",
        choices:[
            {option:"Gwalior",value:false},
            {option:"Bhopal",value:true},
            {option:"Indore",value:false},
            {option:"Khandwa",value:false}
        ]
    },
    {
        question:"Which chemical is called the 'KING OF CHEMICALS'",
        choices:[
            {option:"Sulphuric Acid",value:true},
            {option:"Sodium Hydroxide",value:false},
            {option:"Nitric Acid",value:false},
            {option:"Hydochloric Acid",value:false}
        ]
    },
    {
        question:"Who has the most test wickets?",
        choices:[
            {option:"Anil Kumble",value:false},
            {option:"Shane Warne",value:false},
            {option:"Muthaiya Murlidharan",value:true},
            {option:"James Anderson",value:false}
        ]
    },
    {
        question:"Where is the Santiago Bernebeu located?",
        choices:[
            {option:"Barcelona",value:false},
            {option:"London",value:false},
            {option:"Turin",value:false},
            {option:"Madrid",value:true}
        ]
    },
    {
        question:"Which team won the UEFA Champions League in 2023?",
        choices:[
            {option:"Inter Milan",value:false},
            {option:"Manchester City",value:true},
            {option:"Liverpool",value:false},
            {option:"Real Madrid",value:false}
        ]
    },
    {
        question:"Which of the following is not a Grand Slam in Tennis?",
        choices:[
            {option:"Italian Open",value:true},
            {option:"Australian Open",value:false},
            {option:"Roland Garros",value:false},
            {option:"Wimbledon",value:false}
        ]
    }

]
let questionElement=document.querySelector(".forquestions");
let optionBox=document.querySelector(".foroptions");
let button=document.querySelector(".btn");
let questionIndex=0;
let score=0;
function start()
{
    questionIndex=0;
    score=0;
    button.innerHTML="Go Ahead";
    displayQuestion();
}
function displayQuestion()
{
    reset();
    let currentQuestion=questionbox[questionIndex];
    let questionNumber=questionIndex+1;
    questionElement.innerHTML=questionNumber+"."+currentQuestion.question;
}
    let currentQuestion;
    currentQuestion.choices.forEach(element => {
    let createdOptionBox=document.createElement("div");
    createdOptionBox.innerHTML=element.option;
    optionBox.insertAdjacentElement("beforeend",createdOptionBox);
    createdOptionBox.classList.add("option")

});
reset()
{
    button.style.display="none";
    while(optionBox.firstChild)
    {
        optionBox.removeChild(optionBox.firstChild);
    }
}





start()