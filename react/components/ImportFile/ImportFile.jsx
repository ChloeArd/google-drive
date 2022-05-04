import "./ImportFile.css";
import { Document } from 'react-pdf';

export const ImportFile = function () {

    function cancelModal () {
        document.getElementById("ImportFile").style.display = "none";
    }

    return(
        <div id="ImportFile" className="modal">
            <h1>Importer un fichier</h1>
            <input type="file" name="importFile"/>
            <input type="submit" value="Importer" />
            <p id="cancel" onClick={cancelModal}>Annuler</p>
        </div>
    );
}