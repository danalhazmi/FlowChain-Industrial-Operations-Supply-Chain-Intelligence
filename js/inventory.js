

        document.addEventListener(
            "DOMContentLoaded",
            function () {


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


                /*
                 * If nobody is logged in,
                 * keep the normal Login /
                 * Request Access buttons.
                 */

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


                /*
                 * Make sure the saved user
                 * actually contains a name.
                 */

                if (
                    !user ||
                    !user.name
                ) {

                    return;
                }


                /*
                 * Replace Login /
                 * Request Access with:
                 *
                 * Welcome, User Name
                 * Logout
                 */

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



        /* =========================================================
           LOGOUT
        ========================================================= */

        function flowchainLogout() {


            /*
             * Delete the logged-in
             * employee information.
             */

            localStorage.removeItem(
                "flowchainUser"
            );


            localStorage.removeItem(
                "flowchainLoggedIn"
            );


            /*
             * Return to Login.
             */

            window.location.href =
                "login.html";

        }

    