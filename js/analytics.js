

        /* =========================
           PAGE LOAD
        ========================= */

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                const storedUser =
                    localStorage.getItem(
                        "flowchainUser"
                    );


                /* =========================
                   NO LOGIN
                ========================= */

                if (!storedUser) {

                    window.location.href =
                        "login.html";

                    return;
                }


                let user;


                /* =========================
                   READ USER SESSION
                ========================= */

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
                   SHOW USER IN NAVBAR
                ========================= */

                const navActions =
                    document.getElementById(
                        "navActions"
                    );


                if (
                    navActions &&
                    user &&
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

            }
        );


        /* =========================================================
           ESCAPE HTML
        ========================================================= */

        function escapeHtml(value) {

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
           CLEAR FLOWCHAIN SESSION
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

    