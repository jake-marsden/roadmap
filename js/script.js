document.addEventListener("DOMContentLoaded", function() {
    // Splash screen logic (Temporarily disabled)
    /*
    const body = document.body;
    body.classList.add('splash-active');

    setTimeout(() => {
        body.classList.remove('splash-active');
        // Trigger header fade-in after an additional delay
        setTimeout(() => {
            const header = document.querySelector('.main-header');
            if (header) {
                header.classList.add('visible');
            }
        }, 1000); // 1 second delay
    }, 3000); // 3 seconds for splash
    */

    // Load header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    // Load footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
}); 