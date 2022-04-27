import "./NewDirectory.css";

export const NewDirectory = function () {

    function cancelModal () {
        document.getElementById("NewDirectory").style.display = "none";
    }

    return(
        <div id="NewDirectory" className="modal">
            <h1>Nouveau dossier</h1>
            <input type="text" name="newDirectory" placeholder="Nom du dossier" />
            <input type="submit" value="Créer" />
            <p id="cancel" onClick={cancelModal}>Annuler</p>
        </div>
    );
}