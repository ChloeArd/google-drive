import "./New.css";

export const New = function () {

    function notDisplayNew () {
        document.getElementById("New").style.display = "none";
    }

    return(
        <div id="New" onMouseLeave={notDisplayNew}>
            <p>Dossier</p>
            <p>Importer un fichier</p>
            <p>Importer un dossier</p>
        </div>
    )
}