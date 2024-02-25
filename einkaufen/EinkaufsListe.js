document.addEventListener("DOMContentLoaded", function() {
    // Hintergrundfarbe ändern
    document.body.style.backgroundColor = "#00c4cc";

    // Hintergrundbild einfügen
    document.body.style.backgroundImage = "url('hintergrundbild.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    const addItemBtn = document.getElementById("addItemBtn");
    const addItemPopup = document.getElementById("addItemPopup");
    const newItemNameInput = document.getElementById("newItemName");
    const addItemConfirmBtn = document.getElementById("addItemConfirmBtn");
    const addItemCancelBtn = document.getElementById("addItemCancelBtn");
    const shoppingList = document.getElementById("shoppingList");

    addItemBtn.addEventListener("click", function() {
        addItemPopup.style.display = "block";
    });

    addItemCancelBtn.addEventListener("click", function() {
        addItemPopup.style.display = "none";
    });

    addItemConfirmBtn.addEventListener("click", function() {
        const newItemName = newItemNameInput.value.trim();
        if (newItemName !== "") {
            const li = document.createElement("li");
            li.textContent = newItemName;
            
            // Mülltonnen-Symbol hinzufügen
            const trashIcon = document.createElement("span");
            trashIcon.innerHTML = "&#128465;";
            trashIcon.classList.add("delete-icon");
            trashIcon.addEventListener("click", function(event) {
                shoppingList.removeChild(li);
                event.stopPropagation(); // Verhindert, dass das Listenelement abgehakt wird
            });
            li.appendChild(trashIcon);
            
            // Abhaken, um Element durchzustreichen
            li.addEventListener("click", function() {
                li.classList.toggle("checked");
            });

            // Doppelklick, um Element zu bearbeiten
            li.addEventListener("dblclick", function() {
                const newText = prompt("Neuen Text eingeben:", li.textContent);
                if (newText !== null) {
                    li.textContent = newText;
                }
            });

            shoppingList.appendChild(li);
            newItemNameInput.value = "";
            addItemPopup.style.display = "none";
        } else {
            alert("Bitte geben Sie einen Artikelnamen ein.");
        }
    });
});
