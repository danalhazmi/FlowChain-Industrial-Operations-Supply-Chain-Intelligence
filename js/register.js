

/* =========================================================
   FLOWCHAIN ACCESS REQUEST SYSTEM
========================================================= */

const FLOWCHAIN_REQUESTS_KEY =
    "flowchainAccessRequests";


/* =========================================================
   GET STORED REQUESTS
========================================================= */

function getAccessRequests() {

    const stored =
        localStorage.getItem(
            FLOWCHAIN_REQUESTS_KEY
        );


    if (!stored) {
        return [];
    }


    try {

        const requests =
            JSON.parse(stored);

        return Array.isArray(requests)
            ? requests
            : [];

    } catch (error) {

        localStorage.removeItem(
            FLOWCHAIN_REQUESTS_KEY
        );

        return [];

    }

}


/* =========================================================
   SAVE REQUESTS
========================================================= */

function saveAccessRequests(requests) {

    localStorage.setItem(
        FLOWCHAIN_REQUESTS_KEY,
        JSON.stringify(requests)
    );

}


/* =========================================================
   GENERATE REQUEST ID
========================================================= */

function generateRequestId() {

    const randomNumber =
        Math.floor(
            1000 + Math.random() * 9000
        );

    return "REQ-" + randomNumber;

}


/* =========================================================
   HANDLE REGISTER
========================================================= */

function handleRegister(event) {

    event.preventDefault();


    const fullNameInput =
        document.getElementById(
            "fullName"
        );

    const emailInput =
        document.getElementById(
            "email"
        );

    const workIdInput =
        document.getElementById(
            "workId"
        );

    const passwordInput =
        document.getElementById(
            "reg-password"
        );

    const emailError =
        document.getElementById(
            "emailError"
        );


    const fullName =
        fullNameInput.value
            .trim();

    const email =
        emailInput.value
            .trim()
            .toLowerCase();

    const workId =
        workIdInput.value
            .trim();

    const password =
        passwordInput.value;


    emailError.style.display =
        "none";

    emailInput.classList.remove(
        "error-input"
    );


    /* =====================================================
       BASIC VALIDATION
    ====================================================== */

    if (
        !fullName ||
        !email ||
        !workId ||
        !password
    ) {

        return;

    }


    /* =====================================================
       LOAD EXISTING REQUESTS
    ====================================================== */

    const requests =
        getAccessRequests();


    /* =====================================================
       CHECK PENDING / APPROVED / REJECTED REQUESTS
    ====================================================== */

    const existingRequest =
        requests.find(
            request =>
                request.email === email
        );


    if (existingRequest) {

        emailError.textContent =
            "This email already has an existing access request.";

        emailError.style.display =
            "block";

        emailInput.classList.add(
            "error-input"
        );

        return;

    }


    /* =====================================================
       CHECK THE PRE-AUTHORIZED ACCOUNTS
       These accounts should not register again.
    ====================================================== */

    const preAuthorizedEmails = [

        "dana.alhazmi@flowchain.admin.sa",

        "majed.alsubaie@flowchain.emp.sa",

        "muneera.alshehri@flowchain.emp.sa",

        "turki.alghamdi@flowchain.emp.sa",

        "jawaher.alotaibi@flowchain.emp.sa",

        "fahad.alqarni@flowchain.emp.sa"

    ];


    if (
        preAuthorizedEmails.includes(
            email
        )
    ) {

        emailError.textContent =
            "This enterprise email is already associated with an existing FlowChain account.";

        emailError.style.display =
            "block";

        emailInput.classList.add(
            "error-input"
        );

        return;

    }


    /* =====================================================
       CREATE NEW ACCESS REQUEST
    ====================================================== */

    const newRequest = {

        requestId:
            generateRequestId(),

        fullName:
            fullName,

        name:
            fullName,

        email:
            email,

        workId:
            workId,

        password:
            password,

        role:
            "Employee — Pending Approval",

        department:
            "Pending Assignment",

        accountType:
            "employee",

        status:
            "Pending",

        submittedAt:
            new Date().toISOString()

    };


    /* =====================================================
       SAVE REQUEST
    ====================================================== */

    requests.push(
        newRequest
    );

    saveAccessRequests(
        requests
    );


    /* =====================================================
       SHOW SUCCESS
    ====================================================== */

    document
        .getElementById(
            "form-container"
        )
        .style.display =
            "none";


    document
        .getElementById(
            "success-message"
        )
        .style.display =
            "block";

}


/* =========================================================
   PASSWORD VISIBILITY
========================================================= */

function toggleRegPassword() {

    const passwordInput =
        document.getElementById(
            "reg-password"
        );


    const toggleButton =
        document.querySelector(
            ".toggle-password"
        );


    if (
        passwordInput.type ===
        "password"
    ) {

        passwordInput.type =
            "text";

        toggleButton.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type =
            "password";

        toggleButton.setAttribute(
            "aria-label",
            "Show password"
        );

    }

}

