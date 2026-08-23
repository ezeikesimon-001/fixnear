/* =========================================================
   FIXNEAR
   Frontend interaction logic
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const searchBtn = document.getElementById("searchBtn");

const locationInput = document.getElementById("locationInput");

const applianceInput = document.getElementById("applianceInput");

const problemInput = document.getElementById("problemInput");

const technicianCards =
    document.querySelectorAll(".technician-card");

const requestModal =
    document.getElementById("requestModal");

const modalClose =
    document.getElementById("modalClose");

const confirmRequest =
    document.getElementById("confirmRequest");

const modalTechnician =
    document.getElementById("modalTechnician");

const requestButtons =
    document.querySelectorAll(".request-btn");

const startRequestBtn =
    document.getElementById("startRequestBtn");

const toast =
    document.getElementById("toast");

const toastTitle =
    document.getElementById("toastTitle");

const toastMessage =
    document.getElementById("toastMessage");

const menuBtn =
    document.getElementById("menuBtn");


/* =========================================================
   SELECTED TECHNICIAN
========================================================= */

let selectedTechnician = "David Technician";


/* =========================================================
   APPLIANCE CARDS
========================================================= */

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("click", () => {

        const appliance =
            card.dataset.appliance;

        applianceInput.value = appliance;

        serviceCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        document
            .getElementById("find-technician")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================================
   SEARCH
========================================================= */

searchBtn.addEventListener("click", () => {

    const location =
        locationInput.value.trim();

    const appliance =
        applianceInput.value;

    const problem =
        problemInput.value.trim();


    if (!location) {

        showToast(
            "Location required",
            "Please enter your location first."
        );

        locationInput.focus();

        return;
    }


    if (!appliance) {

        showToast(
            "Choose an appliance",
            "Select the appliance that needs repair."
        );

        applianceInput.focus();

        return;
    }


    if (!problem) {

        showToast(
            "Describe the problem",
            "Tell us briefly what is wrong."
        );

        problemInput.focus();

        return;
    }


    showToast(
        "Technicians found",
        `Showing technicians near ${location}.`
    );


    document
        .getElementById("resultsSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

});


/* =========================================================
   TECHNICIAN SELECTION
========================================================= */

technicianCards.forEach(card => {

    card.addEventListener("click", () => {

        technicianCards.forEach(item => {
            item.classList.remove("active-tech");
        });

        card.classList.add("active-tech");

        selectedTechnician =
            card.dataset.technician;

        showToast(
            "Technician selected",
            `${selectedTechnician} is ready for your request.`
        );

    });

});


/* =========================================================
   OPEN REQUEST MODAL
========================================================= */

function openRequestModal(technician) {

    selectedTechnician =
        technician || "David Technician";

    modalTechnician.textContent =
        selectedTechnician;

    requestModal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   PROFILE / REQUEST BUTTONS
========================================================= */

requestButtons.forEach(button => {

    button.addEventListener("click", () => {

        openRequestModal(
            button.dataset.technician
        );

    });

});


/* =========================================================
   START REQUEST
========================================================= */

startRequestBtn.addEventListener("click", () => {

    openRequestModal(selectedTechnician);

});


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    requestModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


requestModal.addEventListener("click", event => {

    if (event.target === requestModal) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================================
   CONFIRM REQUEST
========================================================= */

confirmRequest.addEventListener("click", () => {

    closeModal();

    showToast(
        "Request sent successfully",
        `${selectedTechnician} has been notified.`
    );


    updateServiceStatus();

});


/* =========================================================
   SERVICE STATUS
========================================================= */

function updateServiceStatus() {

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    let currentStep = 1;


    const interval =
        setInterval(() => {

            if (currentStep >= timelineItems.length) {

                clearInterval(interval);

                return;
            }


            timelineItems[currentStep]
                .classList.add("active");


            currentStep++;

        }, 1800);

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(title, message) {

    toastTitle.textContent = title;

    toastMessage.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

}


/* =========================================================
   MAP CONTROLS
========================================================= */

const mapControls =
    document.querySelectorAll(".map-controls button");


mapControls.forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            "Map control",
            "Interactive map controls are ready for integration."
        );

    });

});


/* =========================================================
   LOGIN DEMO
========================================================= */

const loginButton =
    document.querySelector(".login-btn");


loginButton.addEventListener("click", () => {

    showToast(
        "Login",
        "Customer authentication will be connected in the backend."
    );

});


/* =========================================================
   GET STARTED
========================================================= */

const getStarted =
    document.querySelector(".primary-btn.small");


getStarted.addEventListener("click", () => {

    document
        .getElementById("find-technician")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener("click", () => {

    const nav =
        document.querySelector(".nav-links");

    const isOpen =
        nav.style.display === "flex";


    if (isOpen) {

        nav.style.display = "none";

        return;
    }


    nav.style.display = "flex";

    nav.style.position = "absolute";

    nav.style.top = "76px";

    nav.style.left = "0";

    nav.style.right = "0";

    nav.style.padding = "20px";

    nav.style.background = "white";

    nav.style.flexDirection = "column";

    nav.style.borderBottom = "1px solid #e2e8f0";

});


/* =========================================================
   DEMO LOCATION
========================================================= */

locationInput.addEventListener("focus", () => {

    if (!locationInput.value) {

        locationInput.placeholder =
            "e.g. Port Harcourt, Nigeria";

    }

});


/* =========================================================
   INITIAL STATE
========================================================= */

console.log(
    "FixNear is running successfully."
);

console.log(
    "Frontend demo initialized."
);