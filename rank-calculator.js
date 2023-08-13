function calculateRank() {
    // Getting the input value

    const marks = parseFloat(document.getElementById("marksInput").value);

    // Assigningn the Ranks for the respective marks

    let rank = "";
    if (marks >= 90 && marks <= 100) {
        rank = "Excellent";
    } else if (marks >= 80 && marks < 90) {
        rank = "Very Good";
    } else if (marks >= 70 && marks < 80) {
        rank = "Good";
    } else if (marks >= 60 && marks < 70) {
        rank = "Satisfactory";
    } else if (marks >= 50 && marks < 60) {
        rank = "Average";
    } else if (marks >= 10 && marks < 50) {
        rank = "Needs Improvement";
    } else if (marks >= 0 && marks < 10) {
        rank = "Only God can Save You!!";
    } else {
        rank = "Invalid marks entered";
    }

    // Displaying of the result

    document.getElementById("rankResult").textContent = "Rank: " + rank;
}
