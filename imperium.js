document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const section = document.getElementById('team');

    function checkVisibility() {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (sectionRect.top < windowHeight && sectionRect.bottom >= 0) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 400); // Delay each card by 400ms
            });
        } else {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.remove('visible');
                }, index * 400); // Delay each card by 400ms
            });
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load
});


document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById('services');
    const services = servicesSection.querySelectorAll('.service');

    function checkScroll() {
        services.forEach(service => {
            const servicePosition = service.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (servicePosition < screenHeight * 0.75) {
                service.classList.add('visible');
            } else {
                service.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const communitySection = document.getElementById('community');
    const programs = communitySection.querySelectorAll('.program');

    function checkScroll() {
        programs.forEach(program => {
            const programPosition = program.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (programPosition < screenHeight * 0.75) {
                program.classList.add('visible');
            } else {
                program.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.text, .image');

    function checkScroll() {
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight * 0.75) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});






// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    const cards = document.querySelectorAll('.cards');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});





document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.Btn');
    const homeSection = document.getElementById('home');
    const footerSection = document.querySelector('footer'); // Assuming your footer has a <footer> tag

    function checkScroll() {
        const homeHeight = homeSection.offsetHeight;
        const footerTop = footerSection.getBoundingClientRect().top;

        if (window.scrollY > homeHeight && footerTop > window.innerHeight) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkScroll);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial check
    checkScroll();
});











document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');

    // Toggle the navigation menu when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Hide the navigation menu when any link is clicked
    links.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
        });
    });
});

