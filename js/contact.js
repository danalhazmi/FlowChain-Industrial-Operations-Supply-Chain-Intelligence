

        /* =========================
           SUPPORT FORM
        ========================= */

        document
            .getElementById("supportForm")
            .addEventListener(
                "submit",
                function(event) {

                    event.preventDefault();

                    this.style.display = "none";

                    document
                        .getElementById("successMessage")
                        .style.display = "block";

                }
            );


        /* =========================
           LOGGED-IN USER NAVBAR
        ========================= */

        document.addEventListener(
            "DOMContentLoaded",
            function() {

                const navActions =
                    document.getElementById(
                        "navActions"
                    );


                if (!navActions) {
                    return;
                }


                const storedUser =
                    localStorage.getItem(
                        "flowchainUser"
                    );


                if (!storedUser) {
                    return;
                }


                let user;


                try {

                    user =
                        JSON.parse(
                            storedUser
                        );

                } catch (error) {

                    localStorage.removeItem(
                        "flowchainUser"
                    );

                    localStorage.removeItem(
                        "flowchainLoggedIn"
                    );

                    return;
                }


                if (
                    !user ||
                    !user.name
                ) {
                    return;
                }


                navActions.innerHTML = `

                    <div class="welcome-user">

                        <span class="welcome-text">
                            Welcome,
                        </span>

                        <span class="employee-name">
                            ${user.name}
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
        );


        /* =========================
           LOGOUT
        ========================= */

        function flowchainLogout() {

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


            window.location.href =
                "login.html";

        }

    