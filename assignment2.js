// Function to calculate demerit points based on car speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const pointsThresholdForSuspension = 12;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);

        // Print the demerit points
        console.log(`Points: ${demeritPoints}`);

        // Check if the driver's license should be suspended
        if (demeritPoints > pointsThresholdForSuspension) {
            console.log("License suspended");
        }
    }
}

// Example: Call the function with a speed of 80
calculateDemeritPoints(80);
