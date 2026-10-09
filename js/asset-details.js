

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           USER SESSION
        ===================================================== */

        const navActions =
            document.getElementById(
                "navActions"
            );

        const storedUser =
            localStorage.getItem(
                "flowchainUser"
            );


        if (
            navActions &&
            storedUser
        ) {

            let user = null;


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

                localStorage.removeItem(
                    "flowchainUserName"
                );

                localStorage.removeItem(
                    "flowchainAccountType"
                );

            }


            if (
                user &&
                user.name
            ) {

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

        }


        /* =====================================================
           GET ASSET ID
        ===================================================== */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const assetId =
            (
                params.get("id") ||
                "EQ-9042"
            ).toUpperCase();


        /* =====================================================
           ASSET DATABASE
        ===================================================== */

        const assetData = {

            "EQ-9042": {

                name:
                    "Heavy Hydraulic Crane X-8",

                id:
                    "EQ-9042",

                location:
                    "Yanbu Hub - Zone A",

                type:
                    "Heavy Hydraulic Crane",

                manufacturer:
                    "Industrial Fleet",

                status:
                    "Operational",

                maintenance:
                    "Scheduled",

                risk:
                    "Low",

                riskClass:
                    "risk-low",

                temperature:
                    82,

                fuel:
                    68,

                hours:
                    8421.0,

                service:
                    14.0,

                base:
                    58,

                volatility:
                    8

            },


            "EQ-1105": {

                name:
                    "Industrial Conveyor Belt Pro",

                id:
                    "EQ-1105",

                location:
                    "Jubail Hub - Zone B",

                type:
                    "Industrial Conveyor System",

                manufacturer:
                    "Industrial Fleet",

                status:
                    "Operational",

                maintenance:
                    "Routine Check Due",

                risk:
                    "Medium",

                riskClass:
                    "risk-medium",

                temperature:
                    91,

                fuel:
                    54,

                hours:
                    11240.0,

                service:
                    27.0,

                base:
                    63,

                volatility:
                    15

            },


            "EQ-3321": {

                name:
                    "Petrochemical Turbine Core",

                id:
                    "EQ-3321",

                location:
                    "Dammam Logistics Park",

                type:
                    "Petrochemical Turbine",

                manufacturer:
                    "Industrial Fleet",

                status:
                    "Operational",

                maintenance:
                    "Inspection Required",

                risk:
                    "High",

                riskClass:
                    "risk-high",

                temperature:
                    104,

                fuel:
                    39,

                hours:
                    18620.0,

                service:
                    41.0,

                base:
                    72,

                volatility:
                    24

            }

        };


        const currentAsset =
            assetData[assetId] ||
            assetData["EQ-9042"];


        /* =====================================================
           ELEMENTS
        ===================================================== */

        const assetName =
            document.getElementById(
                "assetName"
            );

        const assetMeta =
            document.getElementById(
                "assetMeta"
            );

        const assetType =
            document.getElementById(
                "assetType"
            );

        const manufacturer =
            document.getElementById(
                "manufacturer"
            );

        const assetLocation =
            document.getElementById(
                "assetLocation"
            );

        const operatingStatus =
            document.getElementById(
                "operatingStatus"
            );

        const maintenanceStatus =
            document.getElementById(
                "maintenanceStatus"
            );

        const riskLevel =
            document.getElementById(
                "riskLevel"
            );

        const engineTemp =
            document.getElementById(
                "engineTemp"
            );

        const fuelLevel =
            document.getElementById(
                "fuelLevel"
            );

        const engineHours =
            document.getElementById(
                "engineHours"
            );

        const lastService =
            document.getElementById(
                "lastService"
            );


        /* =====================================================
           STATIC ASSET INFORMATION
        ===================================================== */

        if (assetName) {

            assetName.textContent =
                currentAsset.name;

        }


        if (assetMeta) {

            assetMeta.innerHTML =
                "Asset ID: FC-" +
                currentAsset.id +
                " &nbsp; • &nbsp; " +
                currentAsset.location;

        }


        if (assetType) {

            assetType.textContent =
                currentAsset.type;

        }


        if (manufacturer) {

            manufacturer.textContent =
                currentAsset.manufacturer;

        }


        if (assetLocation) {

            assetLocation.textContent =
                currentAsset.location;

        }


        if (operatingStatus) {

            operatingStatus.textContent =
                currentAsset.status;

        }


        if (maintenanceStatus) {

            maintenanceStatus.textContent =
                currentAsset.maintenance;

        }


        if (riskLevel) {

            riskLevel.textContent =
                currentAsset.risk;

            riskLevel.className =
                "detail-value " +
                currentAsset.riskClass;

        }


        /* =====================================================
           LIVE NUMBERS
        ===================================================== */

        let liveTemperature =
            currentAsset.temperature;

        let liveFuel =
            currentAsset.fuel;

        let liveHours =
            currentAsset.hours;

        let liveService =
            currentAsset.service;


        function pulseValue(element) {

            if (!element) {
                return;
            }

            element.classList.remove(
                "updated"
            );

            void element.offsetWidth;

            element.classList.add(
                "updated"
            );

        }


        /* =====================================================
           ENGINE TEMPERATURE
        ===================================================== */

        function updateEngineTemperature() {

            const variation =
                (Math.random() * 3) - 1.5;


            liveTemperature =
                currentAsset.temperature +
                variation;


            liveTemperature =
                Math.round(
                    liveTemperature * 10
                ) / 10;


            engineTemp.innerHTML =
                liveTemperature.toFixed(1) +
                '<span class="telemetry-unit">°C</span>';


            pulseValue(
                engineTemp
            );

        }


        /* =====================================================
           FUEL LEVEL
        ===================================================== */

        function updateFuelLevel() {

            const variation =
                (Math.random() * .6) - .3;


            liveFuel +=
                variation;


            liveFuel =
                Math.max(
                    1,
                    Math.min(
                        100,
                        liveFuel
                    )
                );


            liveFuel =
                Math.round(
                    liveFuel * 10
                ) / 10;


            fuelLevel.innerHTML =
                liveFuel.toFixed(1) +
                '<span class="telemetry-unit">%</span>';


            pulseValue(
                fuelLevel
            );

        }


        /* =====================================================
           ENGINE HOURS
           واضح التغيير كل تحديث
        ===================================================== */

        function updateEngineHours() {

            /*
             * Increase by 0.1 hour
             * on every update.
             */

            liveHours +=
                0.1;


            liveHours =
                Math.round(
                    liveHours * 10
                ) / 10;


            engineHours.innerHTML =
                liveHours.toLocaleString(
                    undefined,
                    {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    }
                ) +
                '<span class="telemetry-unit">hrs</span>';


            pulseValue(
                engineHours
            );

        }


        /* =====================================================
           LAST SERVICE
           واضح التغيير كل تحديث
        ===================================================== */

        function updateLastService() {

            /*
             * Increase service age by 0.1 day
             * on every update.
             */

            liveService +=
                0.1;


            liveService =
                Math.round(
                    liveService * 10
                ) / 10;


            lastService.innerHTML =
                liveService.toFixed(1) +
                '<span class="telemetry-unit">days ago</span>';


            pulseValue(
                lastService
            );

        }


        /* =====================================================
           UPDATE TOP TELEMETRY CARDS
        ===================================================== */

        function updateTopTelemetry() {

            updateEngineTemperature();

            updateFuelLevel();

            updateEngineHours();

            updateLastService();

        }


        /*
         * Initial update
         */

        updateTopTelemetry();


        /*
         * Update all four top cards
         * every 1.5 seconds.
         */

        setInterval(
            updateTopTelemetry,
            1500
        );


        /* =====================================================
           LIVE TELEMETRY CHART
        ===================================================== */

        const bars =
            Array.from(
                document.querySelectorAll(
                    ".chart-bar"
                )
            );


        function randomBetween(
            min,
            max
        ) {

            return Math.random() *
                (max - min) +
                min;

        }


        function updateTelemetryChart() {

            bars.forEach(
                function(
                    bar,
                    index
                ) {


                    const wave =
                        Math.sin(
                            (
                                Date.now() /
                                1800
                            ) +
                            index * .55
                        ) * 5;


                    const noise =
                        randomBetween(
                            -currentAsset.volatility,
                            currentAsset.volatility
                        );


                    let value =
                        currentAsset.base +
                        wave +
                        noise;


                    value =
                        Math.max(
                            15,
                            Math.min(
                                95,
                                value
                            )
                        );


                    /*
                     * High risk:
                     * bigger spikes.
                     */

                    if (
                        currentAsset.risk ===
                        "High" &&
                        Math.random() < .18
                    ) {

                        value =
                            randomBetween(
                                82,
                                96
                            );

                    }


                    /*
                     * Medium risk:
                     * moderate spikes.
                     */

                    if (
                        currentAsset.risk ===
                        "Medium" &&
                        Math.random() < .10
                    ) {

                        value =
                            randomBetween(
                                75,
                                88
                            );

                    }


                    bar.style.height =
                        value + "%";

                }
            );

        }


        updateTelemetryChart();


        setInterval(
            updateTelemetryChart,
            1200
        );

    }
);


/* =========================================================
   LOGOUT
========================================================= */

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

