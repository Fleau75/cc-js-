document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formCalculatrice").onsubmit = function (event) {
        event.preventDefault();

        const affichageErreur = document.querySelector(".affichageErreur");
        const affichageResultat = document.getElementById("affichageResultat");

        affichageErreur.textContent = "";
        affichageResultat.textContent = "";

        const premierNombre = parseFloat(
            document.getElementById("premierNombre").value
        );
        const deuxiemeNombre = parseFloat(
            document.getElementById("deuxiemeNombre").value
        );
        const choixOperation = document.getElementById("choixOperation").value;
        let resultat;

        if (isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
            affichageErreur.textContent =
                "Les deux nombres doivent être valides.";
            return;
        }

        resultat = calculer(premierNombre, deuxiemeNombre, choixOperation);

        if (resultat === undefined) {
            affichageErreur.textContent =
                "Une erreur s'est produite lors de l'opération.";
        } else {
            affichageResultat.textContent = "Le résultat est : " + resultat;
        }
    };

    function calculer(num1, num2, operation) {
        switch (operation) {
            case "addition":
                return num1 + num2;
            case "soustraction":
                return num1 - num2;
            case "multiplication":
                return num1 * num2;
            case "division":
                return num2 !== 0
                    ? num1 / num2
                    : "Impossible de diviser par zéro.";
            default:
                return;
        }
    }

    window.reinitialiserCalculatrice = function () {
        document.getElementById("formCalculatrice").reset();
        document.getElementById("affichageResultat").textContent = "";
        document.querySelector(".affichageErreur").textContent = "";
    };
});
