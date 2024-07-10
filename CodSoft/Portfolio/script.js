let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Full Stack Developer','Web Designer', 'App Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const emailSubject = document.getElementById('subject');
const email = document.getElementById('email');
const mobileNumber = document.getElementById('number');
const msg = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number: ${mobileNumber.value}<br> Message: ${msg.value}`;
    Email.send({
        
        Username: "adihpcl9598@gmail.com",
        Password: "94FA09654CF687E31743927B84A7840C56E8",
        To: 'adihpcl9598@gmail.com',
        From: 'adihpcl9598@gmail.com', // Update with your email address
        Subject: emailSubject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully",
                    icon: "success"
                });
            } else {
                console.error("Error occurred while sending email:", message);
                Swal.fire({
                    title: "Error",
                    text: "Something went wrong while sending the message",
                    icon: "error"
                });
            }
        }
    );
}


function checkInputs() {
    const items = document.querySelectorAll(".input-box input, .input-box textarea");
    let allFilled = true;

    items.forEach(item => {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            allFilled = false;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    });

    return allFilled;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkInputs()) {
        sendEmail();
    } else {
        Swal.fire({
            title: "Error",
            text: "Please fill in all required fields",
            icon: "error"
        });
    }
});
