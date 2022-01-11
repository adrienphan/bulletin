let button = document.getElementById("boutonMoyenne");
let moyenneDisplay = document.getElementById("moyenne");
let notesElement = document.querySelectorAll("#notes>li>input");
let commentaire = document.getElementById("commentaire");
let medium;
//make medium when button is clicked
button.addEventListener("click", function(){
    medium = MakeMediums(notesElement);
    moyenneDisplay.innerHTML = medium;
    if (0 <= medium && medium < 10){
        commentaire.innerHTML = "En dessous de la moyenne";
    } else if (10 <= medium && medium < 13){
        commentaire.innerHTML = "Moyen";
    } else if (13 <= medium && medium < 16){
        commentaire.innerHTML = "Bien";
    }else if (16 <= medium && medium < 20){
        commentaire.innerHTML = "Très Bien !";
    }else if (medium == 20){
        commentaire.innerHTML = "Excellent !!";
    } 
});


/**
 * MakeMediums
 * @param {array: int} notes 
 */
function MakeMediums(notes){
    let total = 0;
    for (const note of notes) {
        total += parseInt(note.value);
    }
    return total/5;
}