

function filterSuppliers() {

    const input =
        document
            .getElementById(
                "supplierSearch"
            )
            .value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            ".card-box"
        );


    cards.forEach(
        function(card) {

            const name =
                (
                    card.dataset.name ||
                    ""
                ).toLowerCase();


            if (
                name.includes(input)
            ) {

                card.style.display =
                    "";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

}

