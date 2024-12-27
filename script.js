function viewDetails(laureateName) {
    alert("More details about " + laureateName);
    // You can replace this alert with a modal or a redirection to another page
}


function changeYear(category, delta) {
    // Get the current year displayed
    const yearDisplay = document.getElementById(`${category}-year`);
    let currentYear = parseInt(yearDisplay.innerText);
    // Update the year based on button clicked
    currentYear += delta;
    yearDisplay.innerText = currentYear; // Set the new year
}


 // Set current year in footer
 document.getElementById('currentYear').textContent = new Date().getFullYear();







 let yesVotes = 0;
 let noVotes = 0;
 
 function submitVote(choice) {
     // Check which option was chosen and increment the corresponding vote count
     if (choice === 'yes') {
         yesVotes++;
     } else if (choice === 'no') {
         noVotes++;
     }
     updatePercentages();
 }
 
 function updatePercentages() {
     // Calculate the total number of votes and each option's percentage
     const totalVotes = yesVotes + noVotes;
     const yesPercentage = totalVotes > 0 ? ((yesVotes / totalVotes) * 100).toFixed(1) : 0;
     const noPercentage = totalVotes > 0 ? ((noVotes / totalVotes) * 100).toFixed(1) : 0;
 
     // Update the displayed results
     document.getElementById("yes-result").textContent = `Yes: ${yesPercentage}% (${yesVotes} votes)`;
     document.getElementById("no-result").textContent = `No: ${noPercentage}% (${noVotes} votes)`;
 }
 
 // Ensure this script is loaded after the HTML elements are rendered
 document.addEventListener("DOMContentLoaded", () => {
     // Attach event listeners to the buttons for polling functionality
     document.getElementById("yes-btn").addEventListener("click", () => submitVote("yes"));
     document.getElementById("no-btn").addEventListener("click", () => submitVote("no"));
 });

 










