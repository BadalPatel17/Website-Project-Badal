document.getElementById("btn").addEventListener("click", btnclicked);
function btnclicked() {
  let correct = 0;
  let ans1 = document.getElementById("question1").value.toLowerCase();
  let ans2 = document.getElementById("question2").value.toLowerCase();
  let ans3 = document.getElementById("question3").value.toLowerCase();
  let ans4 = document.getElementById("question4").value.toLowerCase();

  if (ans1 === "long and wide") {
    correct = correct + 1;
  }
  if (ans2 === "28") {
    correct = correct + 1;
  }
  if (ans3 === "4") {
    correct = correct + 1;
  }
  if (ans4 === "feathered") {
    correct = correct + 1;
  }

  if (correct === 4) {
    document.getElementById("output").innerHTML = `<p>4/4 (100%) Good Job!</p>`;
  } else if (correct === 3) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>3/4 (75%) Pretty Good!</p>`;
  } else if (correct === 2) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>2/4 (50%) You need to review some concepts</p>`;
  } else if (correct === 1) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>1/4 (25%) You suck at this; Redo the quiz!</p>`;
  } else if (correct === 0) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>0/4 (0%) Quit Badminton!</p>`;
  }

  if (ans1 != "long and wide") {
    document.getElementById(
      "output1"
    ).innerHTML = `<p>The boudaries for doubles are long and wide because a bigger space is needed if there are more people playing</p>`;
  }
  if (ans2 != "28") {
    document.getElementById(
      "output2"
    ).innerHTML = `<p>Pros usually use a string tension of 28 as it won't break that easily and it has good power</p>`;
  }
  if (ans3 != "4") {
    document.getElementById(
      "output3"
    ).innerHTML = `<p>The maximum players playing doubles at once are 4, as there are 2 on each side of the court</p>`;
  }
  if (ans4 != "feathered") {
    document.getElementById(
      "output4"
    ).innerHTML = `<p>In pro games they use feathered birdies as plastic ones are used for training and leisure play</p>`;
  }
}
