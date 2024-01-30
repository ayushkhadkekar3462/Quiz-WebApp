let q = [];
q[0] = "Q1.What is the Capital of India?";
q[1] = "Q2.Which team won the FIFA Worldcup 2022?";
q[2] = "Q3.Who was the first PM of India?";
q[3] = "Q4.What is capital of Maharashtra?";
q[4] = "Q5.Which team won the CWC 2023?";
q[5] = "Q6.Who was the POTT in CWC 2023?";
q[6] = "Q7.Who is the current BCCI Secretary?";
q[7] = "Q8.Who is regarded as 'CAPTAIN COOL' in cricket?";
q[8] = "Q9.Who among the following has most Grand Slams in Tennis?";
q[9] = "Q10.Which Footballer won the Ballon dor in 2017?";
q[10] = "Q11.Who is the captain of Indian test team?";
q[11] = "Q12.Which Footballer won the Ballon dor in 2023?";
q[12] = "Q13.Which Ocean is named after a country?";
q[13] = "Q14.Which team won the IPL in 2018?";
q[14] = "Q15.Who is Mandeep Singh?";
q[15] = "Q16.What did the Indian Hockey Team achieve in the Olympics 2020?";

let a = [];
let b = [];
let c = [];
let d = [];
a[0] = "A.New Delhi";
b[0] = "B.Mumbai";
c[0] = "C.Chennai";
d[0] = "D.Kolkata";

a[1] = "A.France";
b[1] = "B.Argentina";
c[1] = "C.Brazil";
d[1] = "D.Croatia";

a[2] = "A.Rajendra Prasad";
b[2] = "B.Narendra Modi";
c[2] = "C.Jawaharlal Nehru";
d[2] = "D.Radhakrishnan";

a[3] = "A.Nagpur";
b[3] = "B.Aurangabad";
c[3] = "C.Pune";
d[3] = "D.Mumbai";

a[4] = "A.Australia";
b[4] = "B.New Zealand";
c[4] = "C.India";
d[4] = "D.South Africa";

a[5] = "A.Daryl Mitchell";
b[5] = "B.Virat Kohli";
c[5] = "C.Kane Williamson";
d[5] = "D.Rohit Sharma";

a[6] = "A.Saurav Ganguly";
b[6] = "B.Shivang Mishra";
c[6] = "C.Jay Shah";
d[6] = "D.Amit Shah";

a[7] = "A.Kane Williamson";
b[7] = "B.Rohit Sharma";
c[7] = "C.Virat Kohli";
d[7] = "D.MS Dhoni";

a[8] = "A.Novak Djokovic";
b[8] = "B.Rafael Nadal";
c[8] = "C.Roger Federer";
d[8] = "D.Daniil Medvedev";

a[9] = "A.Lionel Messi";
b[9] = "B.Cristiano Ronaldo";
c[9] = "C.Neymar Jr";
d[9] = "D.Robert Lewandowski";

a[10] = "A.Rohit Sharma";
b[10] = "B.Virat Kohli";
c[10] = "C.Shubhman Gill";
d[10] = "D.Jasprit Bumrah";

a[11] = "A.Kylian Mbappe";
b[11] = "B.Lionel Messi";
c[11] = "C.Erling Haaland";
d[11] = "D.Vinicius Junior";

a[12] = "A.Pacific Ocean";
b[12] = "B.Arctic Ocean";
c[12] = "C.Antartic Ocean";
d[12] = "D.Indian Ocean";

a[13] = "A.RCB";
b[13] = "B.KKR";
c[13] = "C.MI";
d[13] = "D.CSK";

a[14] = "A.Footballer";
b[14] = "B.Hockey Player";
c[14] = "C.Tennis Player";
d[14] = "D.Chess Player";

a[15] = "A.Gold Medal";
b[15] = "B.Silver Medal";
c[15] = "C.Bronze Medal";
d[15] = "D.Knocked Out in GS";
let correct = [];
correct[0] = `${a[0]}`;
correct[1] = `${b[1]}`;
correct[2] = `${c[2]}`;
correct[3] = `${d[3]}`;
correct[4] = `${a[4]}`;
correct[5] = `${b[5]}`;
correct[6] = `${c[6]}`;
correct[7] = `${d[7]}`;
correct[8] = `${a[8]}`;
correct[9] = `${b[9]}`;
correct[10] = `${a[10]}`;
correct[11] = `${b[11]}`;
correct[12] = `${d[12]}`;
correct[13] = `${d[13]}`;
correct[14] = `${b[14]}`;
correct[15] = `${c[15]}`;

let button = document.querySelector(".btn");
let questionbox = document.querySelector(".forquestions");
let options = document.getElementsByClassName("option");
var index = -1;
var u;
var r;
var chosen;
let points = 0;
let p = 0;
let username = prompt("Enter your name");
let rollno = prompt("Enter your roll no.");
let confirmation = confirm("Start Quiz?");

if (confirmation == true) {
    // questionbox.classList.add("ayush");
    // document.querySelector(".foroptions").classList.add("ayush");
  document.querySelector(".name").innerHTML = `NAME:${username}`;
  document.querySelector(".roll").innerHTML = `ROLL NO:${rollno}`;
  // document.querySelector(".score").innerHTML=`CURRENT SCORE:${p}`

  //   for (let j = 0; j < 4; j++) {
  //     options[j].addEventListener("mouseover", () => {
  //       options[j].classList.add("hovered");
  //     });
  //     options[j].addEventListener("mouseleave", () => {
  //       options[j].classList.remove("hovered");
  //     });
  //   }
  let l;
  document.getElementsByClassName("box")[0].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";

    //   index++;

    questionbox.innerHTML = `${q[0]}`;
    options[0].innerHTML = `${a[0]}`;
    options[1].innerHTML = `${b[0]}`;
    options[2].innerHTML = `${c[0]}`;
    options[3].innerHTML = `${d[0]}`;

    index = 0;
    questionbox.innerHTML = `${q[0]}`;
    options[0].innerHTML = `${a[0]}`;
    options[1].innerHTML = `${b[0]}`;
    options[2].innerHTML = `${c[0]}`;
    options[3].innerHTML = `${d[0]}`;
  });
  document.getElementsByClassName("box")[1].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++){
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";

    //   index++;

    questionbox.innerHTML = `${q[1]}`;
    options[0].innerHTML = `${a[1]}`;
    options[1].innerHTML = `${b[1]}`;
    options[2].innerHTML = `${c[1]}`;
    options[3].innerHTML = `${d[1]}`;

    index = 1;
    questionbox.innerHTML = `${q[1]}`;
    options[0].innerHTML = `${a[1]}`;
    options[1].innerHTML = `${b[1]}`;
    options[2].innerHTML = `${c[1]}`;
    options[3].innerHTML = `${d[1]}`;
  });
  document.getElementsByClassName("box")[2].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";

    //   index++;

    questionbox.innerHTML = `${q[2]}`;
    options[0].innerHTML = `${a[2]}`;
    options[1].innerHTML = `${b[2]}`;
    options[2].innerHTML = `${c[2]}`;
    options[3].innerHTML = `${d[2]}`;
    index = 2;
    questionbox.innerHTML = `${q[2]}`;
    options[0].innerHTML = `${a[2]}`;
    options[1].innerHTML = `${b[2]}`;
    options[2].innerHTML = `${c[2]}`;
    options[3].innerHTML = `${d[2]}`;
  });
  document.getElementsByClassName("box")[3].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";

    //   index++;

    questionbox.innerHTML = `${q[3]}`;
    options[0].innerHTML = `${a[3]}`;
    options[1].innerHTML = `${b[3]}`;
    options[2].innerHTML = `${c[3]}`;
    options[3].innerHTML = `${d[3]}`;
    index = 3;
  });
  document.getElementsByClassName("box")[4].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 4;
    questionbox.innerHTML = `${q[4]}`;
    options[0].innerHTML = `${a[4]}`;
    options[1].innerHTML = `${b[4]}`;
    options[2].innerHTML = `${c[4]}`;
    options[3].innerHTML = `${d[4]}`;
  });
  document.getElementsByClassName("box")[5].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 5;
    questionbox.innerHTML = `${q[5]}`;
    options[0].innerHTML = `${a[5]}`;
    options[1].innerHTML = `${b[5]}`;
    options[2].innerHTML = `${c[5]}`;
    options[3].innerHTML = `${d[5]}`;
  });
  document.getElementsByClassName("box")[6].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 6;
    questionbox.innerHTML = `${q[6]}`;
    options[0].innerHTML = `${a[6]}`;
    options[1].innerHTML = `${b[6]}`;
    options[2].innerHTML = `${c[6]}`;
    options[3].innerHTML = `${d[6]}`;
  });
  document.getElementsByClassName("box")[7].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 7;
    questionbox.innerHTML = `${q[7]}`;
    options[0].innerHTML = `${a[7]}`;
    options[1].innerHTML = `${b[7]}`;
    options[2].innerHTML = `${c[7]}`;
    options[3].innerHTML = `${d[7]}`;
  });
  document.getElementsByClassName("box")[8].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 8;
    questionbox.innerHTML = `${q[8]}`;
    options[0].innerHTML = `${a[8]}`;
    options[1].innerHTML = `${b[8]}`;
    options[2].innerHTML = `${c[8]}`;
    options[3].innerHTML = `${d[8]}`;
  });
  document.getElementsByClassName("box")[9].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 9;
    questionbox.innerHTML = `${q[9]}`;
    options[0].innerHTML = `${a[9]}`;
    options[1].innerHTML = `${b[9]}`;
    options[2].innerHTML = `${c[9]}`;
    options[3].innerHTML = `${d[9]}`;
  });
  document.getElementsByClassName("box")[10].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 10;
    questionbox.innerHTML = `${q[10]}`;
    options[0].innerHTML = `${a[10]}`;
    options[1].innerHTML = `${b[10]}`;
    options[2].innerHTML = `${c[10]}`;
    options[3].innerHTML = `${d[10]}`;
  });
  document.getElementsByClassName("box")[11].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 11;
    questionbox.innerHTML = `${q[11]}`;
    options[0].innerHTML = `${a[11]}`;
    options[1].innerHTML = `${b[11]}`;
    options[2].innerHTML = `${c[11]}`;
    options[3].innerHTML = `${d[11]}`;
  });
  document.getElementsByClassName("box")[12].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 12;
    questionbox.innerHTML = `${q[12]}`;
    options[0].innerHTML = `${a[12]}`;
    options[1].innerHTML = `${b[12]}`;
    options[2].innerHTML = `${c[12]}`;
    options[3].innerHTML = `${d[12]}`;
  });
  document.getElementsByClassName("box")[13].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 13;
    questionbox.innerHTML = `${q[13]}`;
    options[0].innerHTML = `${a[13]}`;
    options[1].innerHTML = `${b[13]}`;
    options[2].innerHTML = `${c[13]}`;
    options[3].innerHTML = `${d[13]}`;
  });
  document.getElementsByClassName("box")[14].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 14;
    questionbox.innerHTML = `${q[14]}`;
    options[0].innerHTML = `${a[14]}`;
    options[1].innerHTML = `${b[14]}`;
    options[2].innerHTML = `${c[14]}`;
    options[3].innerHTML = `${d[14]}`;
  });
  document.getElementsByClassName("box")[15].addEventListener("click", () => {
    // index=l;
    // console.log(l);
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";
    index = 15;
    questionbox.innerHTML = `${q[15]}`;
    options[0].innerHTML = `${a[15]}`;
    options[1].innerHTML = `${b[15]}`;
    options[2].innerHTML = `${c[15]}`;
    options[3].innerHTML = `${d[15]}`;
  });
  document.querySelector(".btn2").addEventListener("click", () => {
    questionbox.style.display = "none";
    document.querySelector(".foroptions").style.display = "none";
    button.style.display = "none";
    let h = document.createElement("div");
    h.className = "exit";
    document.querySelector(".container").insertAdjacentElement("afterbegin", h);
    h.innerHTML = `Thank You ${username},<p>Your Final Score:<span>${points}/16</span></p>`;
    document.querySelector(".container").style.height = "20%";
    document.querySelector(".container").classList.add("timepass");
  });

  button.addEventListener("click", () => {
    for (var i = 0; i < 4; i++) {
      {
        // chosen.addEventListener("click")

        options[i].classList.remove("inactive");
        document.querySelector(".foroptions").classList.remove("inactive");
      }
    }
    options[0].style.backgroundColor = "white";
    options[1].style.backgroundColor = "white";
    options[2].style.backgroundColor = "white";
    options[3].style.backgroundColor = "white";

    index++;

    questionbox.innerHTML = `${q[index]}`;
    options[0].innerHTML = `${a[index]}`;
    options[1].innerHTML = `${b[index]}`;
    options[2].innerHTML = `${c[index]}`;
    options[3].innerHTML = `${d[index]}`;

    // created1.innerHTML=(`${a[index]}`)
    // created2.innerHTML=(`${b[index]}`)
    // created3.innerHTML=(`${c[index]}`)
    // created4.innerHTML=(`${d[index]}`)
    //   console.log(index);
    if (index == 16) {
      questionbox.style.display = "none";
      document.querySelector(".foroptions").style.display = "none";
      button.style.display = "none";
      let h = document.createElement("div");
      h.className = "exit";
      document
        .querySelector(".container")
        .insertAdjacentElement("afterbegin", h);
      h.innerHTML = `Thank You ${username},<p>Your Final Score:<span>${points}/16</span></p>`;
      document.querySelector(".container").style.height = "20%";
      document.querySelector(".container").classList.add("timepass");
    }
  });

  // console.log(index);
  document.querySelector(".foroptions").addEventListener("click", (e) => {
    let chosen = e.target;
    //   console.log(index);

    //   console.log(chosen.innerHTML);
    //   console.log(correct[index]);
    //   console.log(chosen == correct[index]);

    if (chosen.innerHTML == correct[index]) {
      chosen.style.backgroundColor = "rgb(12, 253, 4)";
      document.getElementsByClassName("box")[index].style.backgroundColor =
        "rgb(12, 253, 4)";

      document.querySelector(".foroptions").style.backgroundColor =
        "rgb(2, 24, 36)";
      points++;
      p++;

      for (i = 0; i < 4; i++) {
        if (chosen.innerHTML != options[i].innerHTML) {
          // chosen.addEventListener("click")
          // console.log(options[i]);
          options[i].classList.add("inactive");
          document.querySelector(".foroptions").classList.add("inactive");
        }
      }
    } else {
      chosen.style.backgroundColor = "rgb(253, 5, 5)";
      document.getElementsByClassName("box")[index].style.backgroundColor =
        "rgb(253, 5, 5)";

      // for(let p=0;p<4;p++)
      // {
      //     if(options[p].innerhtml===correct[index])
      //     {
      //         options[p].style.backgroundColor="rgb(26, 250, 1)";
      //     }
      // }
      document.querySelector(".foroptions").style.backgroundColor =
        "rgb(2, 24, 36)";
      for (i = 0; i < 4; i++) {
        // if (chosen.innerHTML === options[i].innerHTML)
        {
          // chosen.addEventListener("click")
          // console.log(options[i]);

          options[i].classList.add("inactive");
          document.querySelector(".foroptions").classList.add("inactive");
          // options[i].style.backgroundColor="rgb(26, 250, 1)"
        }
      }
    }
  });
}
// console.log(points);
