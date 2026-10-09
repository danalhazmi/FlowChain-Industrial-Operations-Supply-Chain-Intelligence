

        const suppliers = {

            apex: {
                title: "Apex Heavy Industries",
                subtitle: "Hydraulic Systems & Heavy Machinery Parts.",
                address: "Yanbu Industrial City, Zone 3, KSA",
                contact: "Eng. Tariq Al-Mutawa",
                email: "support@apexheavy.com",
                phone: "+966 14 392 4000",
                rating: "99.2% (Last 12 Months)"
            },

            titanium: {
                title: "Titanium Core Logistics",
                subtitle: "Industrial Transport & Raw Materials.",
                address: "Jubail Industrial City, Zone B, KSA",
                contact: "Eng. Faisal Al-Qahtani",
                email: "operations@titaniumcore.com",
                phone: "+966 13 355 8200",
                rating: "98.5% (Last 12 Months)"
            },

            gulf: {
                title: "Gulf Petro-Parts Corp",
                subtitle: "Refinery Valves & Pipeline Sensors.",
                address: "Dammam Industrial Area, KSA",
                contact: "Eng. Omar Al-Harbi",
                email: "support@gulfpetroparts.com",
                phone: "+966 13 812 4500",
                rating: "99.7% (Last 12 Months)"
            },

            omega: {
                title: "Omega Logistics",
                subtitle: "Secondary Transport & Parts — Under Review.",
                address: "Riyadh Logistics Zone, KSA",
                contact: "Operations Department",
                email: "support@omegalogistics.com",
                phone: "+966 11 445 9200",
                rating: "64.5% (Last 12 Months)"
            }

        };


        const params = new URLSearchParams(window.location.search);
        const supplierId = params.get("id") || "apex";

        const supplier = suppliers[supplierId] || suppliers.apex;


        document.getElementById("supplierTitle").textContent =
            supplier.title;

        document.getElementById("supplierSubtitle").textContent =
            supplier.subtitle;

        document.getElementById("supAddress").textContent =
            supplier.address;

        document.getElementById("supContact").textContent =
            supplier.contact;

        document.getElementById("supEmail").textContent =
            supplier.email;

        document.getElementById("supPhone").textContent =
            supplier.phone;

        document.getElementById("supRating").textContent =
            supplier.rating;


        if (supplierId === "omega") {

            document.getElementById("normalOrderSection").style.display =
                "none";

            document.getElementById("terminationSection").style.display =
                "block";

        }


        function terminateContract() {

            const reason =
                document.getElementById("terminationReason").value.trim();

            if (!reason) {

                alert("Please provide a reason for termination.");

                return;
            }

            const confirmed = confirm(
                "Are you sure you want to permanently terminate and blacklist this supplier?"
            );

            if (!confirmed) {
                return;
            }

            alert(
                "Supplier contract terminated and supplier added to blacklist."
            );

        }

    