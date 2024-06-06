var points = 0;
var hasAnswered = false;
var hasDateAnsweredCorrectly = false;
var hasMusicAnsweredCorrectly = false;
var hasDaughterAnswered = false;
var hasLineAnswered = false;
var hasAnsweredShip = false;
var hasYearAnswered = false;

console.log(points);

const options = document.querySelectorAll('input[name="select"]');
options.forEach(option => {
    option.addEventListener('change', checkAnswer);
});

const dateInput = document.getElementById('release_date');
dateInput.addEventListener('input', checkDate);

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="select"]:checked');
    if (!selectedOption) {
        return;
    }

    const selectedLabel = document.querySelector(`label[for=${selectedOption.id}] .text`);
    const answerText = selectedLabel.textContent.trim();

    const correctAnswer = "Christopher Nolan";
    if (answerText === correctAnswer && !hasAnswered) {
        points += 1;
        hasAnswered = true;
        console.log(points);
    }
}

function checkDate() {
    // Get the selected date
    const selectedDate = dateInput.value;
    
    // Check if the selected date is correct
    const correctDate = "2014-11-05";
    if (selectedDate === correctDate && !hasDateAnsweredCorrectly) {
        points += 1;
        hasDateAnsweredCorrectly = true; // Mark that the correct date has been selected
        console.log(points);
    }
}

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       selectOptions = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
selectOptions.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        if(selectedOption == "Hans Zimmer" && !hasMusicAnsweredCorrectly){
            points += 1;
            hasMusicAnsweredCorrectly = true;
            console.log(points);
        }
        optionMenu.classList.remove("active");
    });
});

var daughterInput = document.getElementById("daughter");

daughterInput.addEventListener("input", () => {
    if(daughterInput.value == "Murphy" && !hasDaughterAnswered){
        points += 1;
        hasDaughterAnswered = true;
        console.log(points);
    }
})

var lineInput = document.getElementById("line");

lineInput.addEventListener("input", () => {
    if(lineInput.value == "No, it's necessary" && !hasLineAnswered){
        points += 1;
        hasLineAnswered = true;
        console.log(points);
    }
})

var possibleAnswers = document.querySelectorAll('input[name="spacecraft"]');

possibleAnswers.forEach(answer => {
        answer.addEventListener("change", () => {
            if (possibleAnswers[0].checked == true && possibleAnswers[1].checked == true && possibleAnswers[2].checked == false && possibleAnswers[3].checked == true && !hasAnsweredShip) {
                points += 1;
                hasAnsweredShip = true;
                console.log(points);
            }
        });
});

var yearInput = document.getElementById("year");

yearInput.addEventListener("input", () => {
    if(yearInput.value == "23" && !hasYearAnswered){
        points += 1;
        hasYearAnswered = true;
        console.log(points);
    }
})

function checkAnswers(){
    document.getElementById("container").style.display="none";
    document.getElementById("checkBtn").style.display="none";
    document.getElementById("finalPoints").style.display="block";

    document.getElementById("pointsGot").innerHTML = `${points}`;
}

console.log("1. kérdés: Christopher Nolan\n2. kérdés: 2014 november 5\n3.kérdés: Hans Zimmer\n4. kérdés: Murphy\n5. kérdés: No, it's necessary\n6. kérdés: Endurance, Ranger, Lazarus\n7. kérdés: 23")