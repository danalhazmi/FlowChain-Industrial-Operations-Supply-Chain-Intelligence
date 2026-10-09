

/* =========================================================
   PRE-AUTHORIZED FLOWCHAIN USERS
========================================================= */

const FLOWCHAIN_USERS = {

    "dana.alhazmi@flowchain.admin.sa": {

        password:
            "2026",

        name:
            "Dana Alhazmi",

        fullName:
            "Dana Alhazmi",

        role:
            "Administrator",

        department:
            "Administration",

        accountType:
            "admin"

    },


    "majed.alsubaie@flowchain.emp.sa": {

        password:
            "2026",

        name:
            "Majed Alsubaie",

        fullName:
            "Majed Alsubaie",

        role:
            "Operations & Maintenance Employee",

        department:
            "Operations & Maintenance",

        accountType:
            "employee"

    },


    "muneera.alshehri@flowchain.emp.sa": {

        password:
            "2026",

        name:
            "Muneera Alshehri",

        fullName:
            "Muneera Alshehri",

        role:
            "Supply Chain Employee",

        department:
            "Supply Chain",

        accountType:
            "employee"

    },


    "turki.alghamdi@flowchain.emp.sa": {

        password:
            "2026",

        name:
            "Turki Alghamdi",

        fullName:
            "Turki Alghamdi",

        role:
            "Information Technology Employee",

        department:
            "Information Technology",

        accountType:
            "employee"

    },


    "jawaher.alotaibi@flowchain.emp.sa": {

        password:
            "2026",

        name:
            "Jawaher Alotaibi",

        fullName:
            "Jawaher Alotaibi",

        role:
            "Employee — Under Review",

        department:
            "Pending Review",

        accountType:
            "employee"

    },


    "fahad.alqarni@flowchain.emp.sa": {

        password:
            "2026",

        name:
            "Fahad Alqarni",

        fullName:
            "Fahad Alqarni",

        role:
            "Senior Management Employee",

        department:
            "Senior Management",

        accountType:
            "employee"

    }

};


/* =========================================================
   ACCESS REQUEST KEY
========================================================= */

const FLOWCHAIN_REQUESTS_KEY =
    "flowchainAccessRequests";


/* =========================================================
   GET ACCESS REQUESTS
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
            JSON.parse(
                stored
            );


        return Array.isArray(
            requests
        )
            ? requests
            : [];

    } catch (error) {

        return [];

    }

}


/* =========================================================
   FIND REGISTERED USER REQUEST
========================================================= */

function findAccessRequest(
    email
) {

    const requests =
        getAccessRequests();


    return requests.find(
        request =>
            request.email ===
            email
    );

}


/* =========================================================
   CREATE SESSION
========================================================= */

function createUserSession(
    email,
    user
) {

    const loggedInUser = {

        email:
            email,

        name:
            user.name,

        fullName:
            user.fullName,

        role:
            user.role,

        department:
            user.department,

        accountType:
            user.accountType,

        loginTime:
            new Date().toISOString()

    };


    localStorage.setItem(
        "flowchainUser",
        JSON.stringify(
            loggedInUser
        )
    );


    localStorage.setItem(
        "flowchainLoggedIn",
        "true"
    );


    localStorage.setItem(
        "flowchainUserName",
        user.name
    );


    localStorage.setItem(
        "flowchainAccountType",
        user.accountType
    );

}


/* =========================================================
   CREATE SESSION FOR APPROVED REQUEST
========================================================= */

function createApprovedRequestSession(
    request
) {

    const loggedInUser = {

        email:
            request.email,

        name:
            request.fullName ||
            request.name,

        fullName:
            request.fullName ||
            request.name,

        role:
            request.role ||
            "Employee",

        department:
            request.department ||
            "Pending Assignment",

        accountType:
            "employee",

        requestId:
            request.requestId,

        loginTime:
            new Date().toISOString()

    };


    localStorage.setItem(
        "flowchainUser",
        JSON.stringify(
            loggedInUser
        )
    );


    localStorage.setItem(
        "flowchainLoggedIn",
        "true"
    );


    localStorage.setItem(
        "flowchainUserName",
        loggedInUser.name
    );


    localStorage.setItem(
        "flowchainAccountType",
        "employee"
    );

}


/* =========================================================
   ERROR MESSAGE
========================================================= */

function showLoginMessage(
    message,
    type = "error"
) {

    const errorMessage =
        document.getElementById(
            "error-msg"
        );


    errorMessage.textContent =
        message;


    errorMessage.style.display =
        "block";


    errorMessage.classList.remove(
        "approval-message",
        "rejected-message"
    );


    if (
        type ===
        "pending"
    ) {

        errorMessage.classList.add(
            "approval-message"
        );

    }


    if (
        type ===
        "rejected"
    ) {

        errorMessage.classList.add(
            "rejected-message"
        );

    }

}


/* =========================================================
   HANDLE LOGIN
========================================================= */

function handleLogin(
    event
) {

    event.preventDefault();


    const emailInput =
        document.getElementById(
            "email-input"
        );


    const passwordInput =
        document.getElementById(
            "password"
        );


    const email =
        emailInput.value
            .trim()
            .toLowerCase();


    const password =
        passwordInput.value;


    const user =
        FLOWCHAIN_USERS[email];


    /* =====================================================
       1. PRE-AUTHORIZED USERS
    ====================================================== */

    if (user) {

        if (
            user.password !==
            password
        ) {

            showLoginMessage(
                "Invalid email address or password. Please try again.",
                "error"
            );


            emailInput.classList.add(
                "error-input"
            );


            passwordInput.classList.add(
                "error-input"
            );


            passwordInput.value =
                "";


            return;

        }


        emailInput.classList.remove(
            "error-input"
        );


        passwordInput.classList.remove(
            "error-input"
        );


        showLoginMessage(
            "",
            "error"
        );


        document
            .getElementById(
                "error-msg"
            )
            .style.display =
            "none";


        createUserSession(
            email,
            user
        );


        /* =========================
           ADMIN
        ========================= */

        if (
            user.accountType ===
            "admin"
        ) {

            window.location.href =
                "admin-dashboard.html";

            return;

        }


        /* =========================
           NORMAL EMPLOYEE
        ========================= */

        window.location.href =
            "index.html";


        return;

    }


    /* =====================================================
       2. REGISTERED USERS
    ====================================================== */

    const request =
        findAccessRequest(
            email
        );


    /*
     * No account and no request.
     */

    if (!request) {

        showLoginMessage(
            "Invalid email address or password. Please try again.",
            "error"
        );


        emailInput.classList.add(
            "error-input"
        );


        passwordInput.classList.add(
            "error-input"
        );


        passwordInput.value =
            "";


        return;

    }


    /* =====================================================
       3. CHECK REQUEST PASSWORD
    ====================================================== */

    if (
        request.password !==
        password
    ) {

        showLoginMessage(
            "Invalid email address or password. Please try again.",
            "error"
        );


        emailInput.classList.add(
            "error-input"
        );


        passwordInput.classList.add(
            "error-input"
        );


        passwordInput.value =
            "";


        return;

    }


    emailInput.classList.remove(
        "error-input"
    );


    passwordInput.classList.remove(
        "error-input"
    );


    /* =====================================================
       4. PENDING
    ====================================================== */

    if (
        request.status ===
        "Pending"
    ) {

        showLoginMessage(
            "Your access request is still under review. Please wait for administrator approval.",
            "pending"
        );


        passwordInput.value =
            "";


        return;

    }


    /* =====================================================
       5. REJECTED
    ====================================================== */

    if (
        request.status ===
        "Rejected"
    ) {

        showLoginMessage(
            "Your access request has been rejected. Please contact the FlowChain administrator.",
            "rejected"
        );


        passwordInput.value =
            "";


        return;

    }


    /* =====================================================
       6. APPROVED
    ====================================================== */

    if (
        request.status ===
        "Approved"
    ) {

        createApprovedRequestSession(
            request
        );


        window.location.href =
            "index.html";


        return;

    }


    /* =====================================================
       UNKNOWN STATUS
    ====================================================== */

    showLoginMessage(
        "Your account status could not be verified. Please contact the administrator.",
        "error"
    );


    passwordInput.value =
        "";

}


/* =========================================================
   PASSWORD TOGGLE
========================================================= */

function togglePassword() {

    const passwordInput =
        document.getElementById(
            "password"
        );


    if (
        passwordInput.type ===
        "password"
    ) {

        passwordInput.type =
            "text";

    } else {

        passwordInput.type =
            "password";

    }

}


/* =========================================================
   CLEAR ERROR ON INPUT
========================================================= */

document
    .getElementById(
        "email-input"
    )
    .addEventListener(
        "input",
        function () {

            this.classList.remove(
                "error-input"
            );


            const errorMessage =
                document.getElementById(
                    "error-msg"
                );


            errorMessage.style.display =
                "none";


            errorMessage.classList.remove(
                "approval-message",
                "rejected-message"
            );

        }
    );


document
    .getElementById(
        "password"
    )
    .addEventListener(
        "input",
        function () {

            this.classList.remove(
                "error-input"
            );


            const errorMessage =
                document.getElementById(
                    "error-msg"
                );


            errorMessage.style.display =
                "none";


            errorMessage.classList.remove(
                "approval-message",
                "rejected-message"
            );

        }
    );


/* =========================================================
   CLEAN INVALID SESSION DATA
========================================================= */

if (
    localStorage.getItem(
        "flowchainLoggedIn"
    ) === "true" &&
    localStorage.getItem(
        "flowchainUser"
    )
) {

    try {

        const existingUser =
            JSON.parse(
                localStorage.getItem(
                    "flowchainUser"
                )
            );


        if (
            existingUser &&
            existingUser.name &&
            existingUser.email
        ) {

            localStorage.setItem(
                "flowchainUserName",
                existingUser.name
            );


            localStorage.setItem(
                "flowchainAccountType",
                existingUser.accountType ||
                "employee"
            );

        }

    } catch (error) {

        localStorage.removeItem(
            "flowchainUser"
        );

        localStorage.removeItem(
            "flowchainLoggedIn"
        );

        localStorage.removeItem(
            "flowchainUserName"
        );

        localStorage.removeItem(
            "flowchainAccountType"
        );

    }

}

