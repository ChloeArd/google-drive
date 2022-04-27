import "./ImportDirectory.css";

export const ImportDirectory = function () {

    function cancelModal () {
        document.getElementById("ImportDirectory").style.display = "none";
    }

    return(
        <div id="ImportDirectory" className="modal">
            <h1>Importer un dossier</h1>
            <input type="file" name="importDirectory"/>
            <input type="submit" value="Importer" />
            <p id="cancel" onClick={cancelModal}>Annuler</p>
        </div>
    );
}