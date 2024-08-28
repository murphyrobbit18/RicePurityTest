//function to calculate the user's score
function calculateScore(){

    //sets the maximum score as 100
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let score = 100;
            
    //for each checkbox that is selected, 1 is taken from the total score
    checkboxes.forEach((checkbox) => { 
        if (checkbox.checked){
        score--;
    }

    });

    //displays score
    const resultDiv = document.getElementById('result'); 
    resultDiv.textContent = `Your purity score is: ${score}`;
    resultDiv.style.display = 'block'; 

}

//function to clear the checkboxes
function clearBoxes(){

    //makes it so that the checkboxes being checked is made false
    const questions = document.querySelectorAll('input[type = "checkbox"]')
    questions.forEach((question) => {
        question.checked = false;

    });
    
    //clears the screen of checked checkboxes and score
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none'; 
    
}