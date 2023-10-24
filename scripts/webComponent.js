class UserFilter extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        // Récupération des attributs
        const ul = document.querySelector('ul');
        this.input = document.querySelector('input');

        this.EventListener();

        // Modification du DOM
        for (let i = 0; i < this.attributes.length; i++) {
            const li = document.createElement('li');
            li.role = "name";

            const a = document.createElement('a');
            a.href = "";
            a.title = "name";
            a.textContent = this.getAttribute(`item-${i}`);
            li.appendChild(a);
            ul.appendChild(li);
        }
        this.listUserName = [...document.querySelectorAll('a')];
    }
    // Ecouteur de l'input
    EventListener() {
        this.input.addEventListener("input", evt => {
            this.UserNameFilter(evt.target.value)
        })
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
}

customElements.define('filterable-list', UserFilter);