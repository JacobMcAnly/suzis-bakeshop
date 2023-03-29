window.addEventListener("DOMContentLoaded", function(e){
   // Get the order object from local storage as a JSON string
    const order = localStorage.getItem("order");

    // Check if the order object exists
    if(order) {

        // Parse the JSON string into a JavaScript object
        const bakeryRequest = JSON.parse(order);

        // Get the element that contains the image and title of our bakery items
        const menuOption = document.querySelector(".menu-option");

        // Get the description element
        const desc = menuOption.querySelector(".desc");

        // Update the description to the value of the bakeryRequest title
        desc.innerText = bakeryRequest.title;

        // Get the id of the choice
        const choiceId = bakeryRequest.id;

        // Get the dropdown element
        const dropdown = document.getElementById("menu-item");

        // Get all the existing options in the dropdown
        const dropdownChoices = dropdown.querySelectorAll("option");

        // Loop through each dropdown option
        dropdownChoices.forEach(function(dropdownChoice){

            // If the current option has the same id as the bakeryRequest id, mark it as selected
            if (dropdownChoice.id === choiceId) {
                dropdownChoice.selected = true;
            }
        });

        // Get the image element
        const img = menuOption.querySelector("img");

        // Set the src attribute to the bakeryRequest id, and set alt text to the bakeryRequest title
        img.setAttribute("src", `../images/${choiceId}.jpg`);
        img.setAttribute("width", "280");
        img.setAttribute("height", "200");
        img.setAttribute("alt", bakeryRequest.title);

        // Add an event listener to the dropdown element
        dropdown.addEventListener("change", function() {

            // Get the value of the currently selected option in the dropdown
            const selectedOption = dropdown.value;

            // Find the option element with a value attribute equal to selectedOption
            const selectedChoice = dropdown.querySelector(`option[value="${selectedOption}"]`);

            // Get the id attribute of the selected option element
            const choiceId = selectedChoice.id;

            // Get the value attribute of the selected option element
            const choiceTitle = selectedChoice.value;

            // Set the inner text of an element with ID "desc" to choiceTitle
            desc.innerText = choiceTitle;

            // Set the src attribute of an image element to a file path in the ../images/ directory
            // The file name is constructed from the choiceId variable, and has a .jpg file extension
            if (selectedOption === "") {
                img.setAttribute("src", "../images/click-here.jpg");
                img.setAttribute("width", "250");
                img.setAttribute("height", "150");
            } else {
                img.setAttribute("src", `../images/${choiceId}.jpg`);
                img.setAttribute("alt", choiceTitle);
            }
        });
    }

});