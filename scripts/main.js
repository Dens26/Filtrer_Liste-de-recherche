// référence du DOM
const listUserName = [...document.querySelectorAll('a')];
const input = document.querySelector('input');

/**
 * Fonction de filtrage des nom d'utilisateur
 * @param {string} value 
 */
function userNameFilter(value){
    // Pour chaque utilisateur
    for (let i = 0; i < listUserName.length; i++) {

        // L'utilisateur n'existe pas
        if(listUserName[i].textContent.toLowerCase().indexOf(value.toLowerCase()) == -1){
            console.log(listUserName[i].textContent);
            listUserName[i].parentElement.style.display = "none";
        }
        // L'utilisateur existe
        else{
            listUserName[i].parentElement.style.display = "flex";
        }
    }
}

// Ecouteur de l'input
input.addEventListener("input", evt => {
    userNameFilter(evt.target.value)
})