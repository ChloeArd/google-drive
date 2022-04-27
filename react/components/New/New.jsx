import "./New.css";
import {NewDirectory} from "../NewDirectory/NewDirectory";

export const New = function () {

    function notDisplayNew () {
        document.getElementById("New").style.display = "none";
    }

    function displayModalNewDirectory () {
        document.getElementById("NewDirectory").style.display = "flex";
    }

    function displayModalImportDirectory () {
        document.getElementById("ImportDirectory").style.display = "flex";
    }

    function displayModalImportFile() {
        document.getElementById("ImportFile").style.display = "flex";
    }

    return(
        <div id="New" onMouseLeave={notDisplayNew}>
            <p onClick={displayModalNewDirectory}>Dossier</p>
            <p onClick={displayModalImportFile}>Importer un fichier</p>
            <p onClick={displayModalImportDirectory}>Importer un dossier</p>
        </div>
    )
}