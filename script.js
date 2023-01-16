const btnValideStudy = document.getElementById("valideStudy");
const btnValideBac = document.getElementById("valideBac");
const btnValideSpec = document.getElementById("valideSpec");
const btnValideName = document.getElementById("valideName");
const form = document.getElementById("quizz-form");
let total = 0;

function validate(btn, answer) {
  let score = 0;

  btn.addEventListener("click", () => {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((node) => {
      if (node.checked) {
        node.value === answer ? score++ : score;
      }
    });

    if (score === 1) {
      alert("You are a good student 👍");
      total += 1;
    } else {
      alert("You are a bad student 👎");
    }

    console.log("You have " + total + " good answers out of 4 questions");

    return score === 1;
  });
}

validate(btnValideStudy, "IPEIG");

validate(btnValideBac, 2019);

validate(btnValideSpec, "Technique");

validate(btnValideName, "Saif");
