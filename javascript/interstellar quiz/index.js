var points = 0;
var hasAnswered = false;
var hasDateAnsweredCorrectly = false;
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
        optionMenu.classList.remove("active");
    });
});