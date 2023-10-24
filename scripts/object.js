/**
 * Classe de filtrage des nom d'utilisateur
 */
class UserFilter {
    constructor() {
        // référence du DOM
        this.listUserName = [...document.querySelectorAll('a')];
        this.input = document.querySelector('input');

        // Appel à la fonction listener
        this.EventListener();
    }
    /**
     * Méthode de filtrage des nom utilisateur
     * @param {string} value 
     */
    UserNameFilter(value) {
        // Pour chaque utilisateur
        for (let i = 0; i < this.listUserName.length; i++) {

            // L'utilisateur n'existe pas
            if (this.listUserName[i].textContent.toLowerCase().indexOf(value.toLowerCase()) == -1) {
                this.listUserName[i].parentElement.style.display = "none";
            }
            // L'utilisateur existe
            else {
                this.listUserName[i].parentElement.style.display = "flex";
            }
        }
    }

    // Ecouteur de l'input
    EventListener() {
        this.input.addEventListener("input", evt => {
            this.UserNameFilter(evt.target.value)
        })
    }
}

const filter = new UserFilter();