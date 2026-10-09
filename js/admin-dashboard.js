

/* =========================================================
   FLOWCHAIN ACCESS REQUEST SYSTEM
========================================================= */

const FLOWCHAIN_REQUESTS_KEY =
    "flowchainAccessRequests";


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const storedUser =
            localStorage.getItem(
                "flowchainUser"
            );


        if (!storedUser) {

            window.location.href =
                "login.html";

            return;
        }


        let user;


        try {

            user =
                JSON.parse(
                    storedUser
                );

        } catch (error) {

            clearFlowChainSession();

            window.location.href =
                "login.html";

            return;
        }


        /* =========================
           ADMIN ONLY
        ========================= */

        if (
            !user ||
            user.accountType !== "admin"
        ) {

            window.location.href =
                "index.html";

            return;
        }


        /* =========================
           NAVBAR
        ========================= */

        const navActions =
            document.getElementById(
                "navActions"
            );


        if (
            navActions &&
            user.name
        ) {

            navActions.innerHTML = `

                <div class="welcome-user">

                    <span class="welcome-text">
                        Welcome,
                    </span>

                    <span class="employee-name">
                        ${escapeHtml(user.name)}
                    </span>

                </div>


                <button
                    type="button"
                    class="logout-btn"
                    onclick="flowchainLogout()"
                >
                    Logout
                </button>

            `;

        }


        /* =========================
           RENDER REQUESTS
        ========================= */

        renderAccessRequests();

    }
);


/* =========================================================
   GET REQUESTS
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
   SAVE REQUESTS
========================================================= */

function saveAccessRequests(
    requests
) {

    localStorage.setItem(
        FLOWCHAIN_REQUESTS_KEY,
        JSON.stringify(requests)
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatRequestDate(
    dateString
) {

    if (!dateString) {
        return "Unknown time";
    }


    const date =
        new Date(
            dateString
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "Unknown time";

    }


    return date.toLocaleString(
        "en-SA",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   RENDER ACCESS REQUESTS
========================================================= */

function renderAccessRequests() {

    const requestList =
        document.getElementById(
            "requestList"
        );


    const pendingCount =
        document.getElementById(
            "pendingRequestsCount"
        );


    const requestSummary =
        document.getElementById(
            "requestSummary"
        );


    if (
        !requestList ||
        !pendingCount ||
        !requestSummary
    ) {

        return;

    }


    const requests =
        getAccessRequests();


    const pendingRequests =
        requests.filter(
            request =>
                request.status ===
                "Pending"
        );


    pendingCount.textContent =
        String(
            pendingRequests.length
        ).padStart(
            2,
            "0"
        );


    if (
        pendingRequests.length === 0
    ) {

        requestSummary.textContent =
            "No pending requests";

    } else {

        requestSummary.textContent =
            `${pendingRequests.length} pending`;

    }


    if (
        requests.length === 0
    ) {

        requestList.innerHTML = `

            <div class="empty-requests">

                No access requests have
                been submitted yet.

            </div>

        `;

        return;
    }


    const sortedRequests =
        [...requests].sort(
            (a, b) =>
                new Date(
                    b.submittedAt || 0
                ) -
                new Date(
                    a.submittedAt || 0
                )
        );


    requestList.innerHTML =
        sortedRequests
            .map(
                request =>
                    createRequestHtml(
                        request
                    )
            )
            .join("");

}


/* =========================================================
   CREATE REQUEST HTML
========================================================= */

function createRequestHtml(
    request
) {

    const name =
        escapeHtml(
            request.fullName ||
            request.name ||
            "Unknown User"
        );


    const email =
        escapeHtml(
            request.email ||
            "No email"
        );


    const workId =
        escapeHtml(
            request.workId ||
            "No ID"
        );


    const status =
        request.status ||
        "Pending";


    const requestId =
        escapeHtml(
            request.requestId ||
            "REQ"
        );


    const submittedAt =
        formatRequestDate(
            request.submittedAt
        );


    let statusClass =
        "pending";


    if (
        status === "Approved"
    ) {

        statusClass =
            "approved";

    }


    if (
        status === "Rejected"
    ) {

        statusClass =
            "rejected";

    }


    let actionsHtml =
        "";


    if (
        status === "Pending"
    ) {

        actionsHtml = `

            <div class="request-actions">

                <button
                    type="button"
                    class="request-btn approve"
                    onclick="approveRequest('${request.requestId}')"
                >
                    Approve
                </button>

                <button
                    type="button"
                    class="request-btn reject"
                    onclick="rejectRequest('${request.requestId}')"
                >
                    Reject
                </button>

            </div>

        `;

    }


    return `

        <div class="request-item">


            <div class="request-info">


                <div class="request-icon">

                    <svg viewBox="0 0 24 24">

                        <path
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        ></path>

                        <circle
                            cx="12"
                            cy="7"
                            r="4"
                        ></circle>

                    </svg>

                </div>


                <div>

                    <div class="request-name">
                        ${name}
                    </div>

                    <div class="request-meta">

                        ${email}
                        ·
                        ${workId}
                        ·
                        ${requestId}
                        ·
                        ${submittedAt}

                    </div>

                </div>


            </div>


            ${
                actionsHtml ||
                `<span class="request-status ${statusClass}">
                    ${escapeHtml(status)}
                </span>`
            }


        </div>

    `;

}


/* =========================================================
   APPROVE REQUEST
========================================================= */

function approveRequest(
    requestId
) {

    const requests =
        getAccessRequests();


    const requestIndex =
        requests.findIndex(
            request =>
                request.requestId ===
                requestId
        );


    if (
        requestIndex === -1
    ) {

        alert(
            "Access request could not be found."
        );

        return;
    }


    const request =
        requests[
            requestIndex
        ];


    if (
        request.status !==
        "Pending"
    ) {

        alert(
            "This request has already been processed."
        );

        return;
    }


    const confirmed =
        confirm(
            `Approve access for ${request.fullName || request.name}?`
        );


    if (!confirmed) {
        return;
    }


    requests[
        requestIndex
    ].status =
        "Approved";


    requests[
        requestIndex
    ].approvedAt =
        new Date().toISOString();


    requests[
        requestIndex
    ].approvedBy =
        "Dana Alhazmi";


    saveAccessRequests(
        requests
    );


    renderAccessRequests();


    alert(
        "Access request approved successfully."
    );

}


/* =========================================================
   REJECT REQUEST
========================================================= */

function rejectRequest(
    requestId
) {

    const requests =
        getAccessRequests();


    const requestIndex =
        requests.findIndex(
            request =>
                request.requestId ===
                requestId
        );


    if (
        requestIndex === -1
    ) {

        alert(
            "Access request could not be found."
        );

        return;
    }


    const request =
        requests[
            requestIndex
        ];


    if (
        request.status !==
        "Pending"
    ) {

        alert(
            "This request has already been processed."
        );

        return;
    }


    const confirmed =
        confirm(
            `Reject access for ${request.fullName || request.name}?`
        );


    if (!confirmed) {
        return;
    }


    requests[
        requestIndex
    ].status =
        "Rejected";


    requests[
        requestIndex
    ].rejectedAt =
        new Date().toISOString();


    requests[
        requestIndex
    ].rejectedBy =
        "Dana Alhazmi";


    saveAccessRequests(
        requests
    );


    renderAccessRequests();


    alert(
        "Access request rejected."
    );

}


/* =========================================================
   CLEAR SESSION
========================================================= */

function clearFlowChainSession() {

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


/* =========================================================
   LOGOUT
========================================================= */

function flowchainLogout() {

    clearFlowChainSession();

    window.location.href =
        "login.html";

}

