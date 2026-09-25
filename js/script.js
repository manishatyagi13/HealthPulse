/* =========================================================
   DRMUDHIWALLA HEALTHTECH
   COMMON JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.toggle("open");

}


/* =========================================================
   MOBILE DROPDOWN
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");

        });

    }


    /* -----------------------------------------------------
       MOBILE PRODUCT / INDUSTRIES DROPDOWN
       ----------------------------------------------------- */

    const mobileDropdownButtons =
        document.querySelectorAll(".mobile-dropdown-btn");


    mobileDropdownButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const parent =
                button.parentElement;

            parent.classList.toggle("open");

        });

    });


    /* -----------------------------------------------------
       CLOSE MOBILE MENU AFTER CLICKING NORMAL LINK
       ----------------------------------------------------- */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                !link.closest(".mobile-dropdown-content")
            ) {

                if (mobileMenu) {
                    mobileMenu.classList.remove("open");
                }

            }

        });

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", function (event) {

        if (!mobileMenu || !menuToggle) {
            return;
        }


        const clickedInsideMenu =
            mobileMenu.contains(event.target);


        const clickedToggle =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            mobileMenu.classList.remove("open");

        }

    });

});