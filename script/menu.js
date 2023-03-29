// Add an event listener that listens for the DOMContentLoaded event, which is triggered when the page has finished loading
window.addEventListener("DOMContentLoaded", function(e) {
    console.log("The page loaded"); // Output a message to the console to indicate that the page has loaded

// Get a const reference to all the buttons with a 'data-order' attribute
const orderButtons = document.querySelectorAll("button[data-order]");

// Create a loop that iterates over each button in orderButtons
orderButtons.forEach(function(btn){

    // Add an event listener that listens for a click event on the current button
    btn.addEventListener("click", function(e){
        console.log("button clicked"); // Output a message to the console to indicate that the button was clicked

        // Get a const reference to the current button and its parent node
        const btn = e.currentTarget;
        const container = btn.parentNode;

        // Create an order object that stores the id, title, and price of the clicked item
        const order = {
            id: btn.getAttribute("data-order"), // Get the value of the 'data-order' attribute of the current button and store it as the 'id' property of the order object
            title: container.querySelector(".desc").innerText, // Get the inner text of the 'desc' class of the parent node of the current button and store it as the 'title' property of the order object
            price: "$0.00" // Set the 'price' property of the order object to a default value of "$0.00"
        };

        // Save the order object to local storage as a JSON string
        localStorage.setItem("order", JSON.stringify(order));

        // Redirect the user to the request.html page
        const url = window.location.href.replace("menu.html", "request.html"); // Get the current URL of the page and replace "menu.html" with "request.html" to create the URL for the request.html page
        window.location.href = url; // Redirect the user to the request.html page
    });


    });

});