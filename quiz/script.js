var scoreQuestion = document.querySelectorAll('.quiz-score');
var scoreTotal = document.querySelector('.score-total');
var scoreDescription = document.querySelector('.score-description');


function fnScore(question,answer) {
    scoreQuestion[question-1].innerHTML = answer;
    let intScoreTotal = 0;
    for (let i = 0; i < scoreQuestion.length; i++) {
        let intScoreQuestion = parseInt(scoreQuestion[i].innerHTML,10);
        if(isNaN(intScoreQuestion)) {
            intScoreQuestion = 0;
        }
        intScoreTotal = intScoreTotal + intScoreQuestion;
    }
    scoreTotal.innerHTML = intScoreTotal.toString(10);
    if(intScoreTotal < 0) {
        scoreDescription.innerHTML = "Ti sama/sam pališ računar ili to neko radi umesto tebe?";
    } else if (intScoreTotal < 20) {
        scoreDescription.innerHTML = "Ti na računaru koristiš word, malo excel, i to je dovoljno.";
    } else if (intScoreTotal < 50) {
        scoreDescription.innerHTML = "Ti računar koristiš na poslu, kod kuće malo fejs, web shop, tetris. Gledanje TV-a je i dalje zakon.";
    } else if (intScoreTotal < 80) {
        scoreDescription.innerHTML = "Računar ti je svakodnevni alat i na poslu i kod kuće.";
    } else if (intScoreTotal < 110) {
        scoreDescription.innerHTML = "Ti jesi power user i imaš potencijal ali moraš još da se potrudiš za eksperta.";
    } else if (intScoreTotal < 140) {
        scoreDescription.innerHTML = "Komšije te smatraju kompjuterskim genijem i zovu te da im besplatno popravljaš kompjuter.";
    } else if (intScoreTotal < 180) {
        scoreDescription.innerHTML = "Aj Ti, Aj Ti i samo Aj Ti. Ili se profesionalno baviš informatikom ili si 120% entuzijasta.";
    } else {
        scoreDescription.innerHTML = "Priznaj da si namestila/namestio rezultat.";
    }
}
