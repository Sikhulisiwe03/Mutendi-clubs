/* =====================================
   MUTENDI CLUBS JAVASCRIPT
   ===================================== */


/* Starting number of members */

let members = {

    "Innovation Club": 72,

    "Toastmasters": 64,

    "Soccer": 98,

    "Debate Club": 53,

    "Interact Club": 60

};


/* =====================================
   UPDATE MEMBER NUMBERS
   ===================================== */

function updateMemberNumbers() {

    document.getElementById("innovationMembers").textContent =
        members["Innovation Club"];

    document.getElementById("toastmastersMembers").textContent =
        members["Toastmasters"];

    document.getElementById("soccerMembers").textContent =
        members["Soccer"];

    document.getElementById("debateMembers").textContent =
        members["Debate Club"];

    document.getElementById("interactMembers").textContent =
        members["Interact Club"];


    /* Calculate total */

    let total = 0;

    for (let club in members) {

        total += members[club];

    }

    document.getElementById("totalMembers").textContent = total;

}


/* =====================================
   SELECT CLUB
   ===================================== */

function selectClub(clubName) {

    document.getElementById("clubSelect").value = clubName;

    document.getElementById("join").scrollIntoView({

        behavior: "smooth"

    });

}


/* =====================================
   JOIN FORM
   ===================================== */

document.getElementById("joinForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        let studentName =
            document.getElementById("studentName").value;

        let grade =
            document.getElementById("grade").value;

        let club =
            document.getElementById("clubSelect").value;

        let month =
            document.getElementById("month").value;


        /* Increase membership */

        members[club]++;


        /* Update website */

        updateMemberNumbers();


        /* Determine fees */

        let joiningFee;

        let monthlyFee;


        if (club === "Soccer") {

            joiningFee = "$0";

            monthlyFee = "$0";

        } else {

            joiningFee = "$10";

            monthlyFee = "$5";

        }


        /* Display successful registration */

        let message =
            document.getElementById("successMessage");


        message.innerHTML =

            "<strong>Registration Successful!</strong><br><br>" +

            "Thank you, " + studentName + ".<br>" +

            "Grade: " + grade + "<br>" +

            "Club: " + club + "<br>" +

            "Month: " + month + "<br><br>" +

            "Joining Fee: " + joiningFee + "<br>" +

            "Monthly Subscription: " + monthlyFee;


        message.style.display = "block";


        /* Clear form */

        document.getElementById("joinForm").reset();


        /* Scroll to message */

        message.scrollIntoView({

            behavior: "smooth"

        });

    }
);


/* =====================================
   START WEBSITE
   ===================================== */

updateMemberNumbers();