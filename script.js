// Simple Vanilla JS Single-Page Interaction
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the dynamic Say Hello button
    const alertButton = document.getElementById('alert-btn');

    if (alertButton) {
        // Attach click event listener
        alertButton.addEventListener('click', () => {
            // Trigger standard browser notification alert
            alert('Hello!');
        });
    }

    console.log("Modern portfolio script initialized successfully!");
});