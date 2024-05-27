
/* Script de el Carousel */

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let num = 0;

    function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
        image.style.display = 'block';
        } else {
        image.style.display = 'none';
        }
    });
    }

    function nextImage() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    showImage(num);
    }

    function prevImage() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    showImage(num);
    }

    prev.addEventListener('click', prevImage);
    next.addEventListener('click', nextImage);

    showImage(num);
});

/* ------------------------------------------------------------------------------------------ */
/* Script de el validador de formulario */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        
        var fullName = document.getElementById("fullname").value.trim();
        var email = document.getElementById("email").value.trim();
        var interest = document.getElementById("options").value;
        event.preventDefault();

        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var errors = [];
        
        if (fullName === "") {
            errors.push("Please enter your full name.");
        }
        if (email === "") {
            errors.push("Please enter your email address.");
        } else if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (interest === "null") {
            errors.push("Please select an option.");
        }

        if (errors.length > 0) {
            var warning = document.getElementById("warning");
                warning.innerHTML = errors.join("<br>");
        } else {
            var submittedData = document.getElementById("submitted-data");
                submittedData.innerHTML = "<p>Full Name: " + fullName + "</p>" + "<p>Email: " + email + "</p>" + "<p>Interest: " + interest + "</p>";
            
            var warning = document.getElementById("warning");
                warning.innerHTML = "Sent!🚀";
        }
    });
});