// Function to calculate PAYE (Tax) based on monthly taxable pay
function calculatePAYE(monthlyTaxablePay) {
    let paye = 0;

    if (monthlyTaxablePay >= 0 && monthlyTaxablePay <= 24000) {
        paye = monthlyTaxablePay * 0.10; // 10% tax rate
    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {
        paye = 24000 * 0.10 + (monthlyTaxablePay - 24000) * 0.25; // 10% up to 24,000, 25% above 24,000
    } else if (monthlyTaxablePay >= 32334 && monthlyTaxablePay <= 500000) {
        paye = 24000 * 0.10 + 8333 * 0.25 + (monthlyTaxablePay - 32333) * 0.30; // 10% up to 24,000, 25% from 24,001 to 32,333, 30% above 32,333
    } else if (monthlyTaxablePay >= 500001 && monthlyTaxablePay <= 800000) {
        paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (monthlyTaxablePay - 500000) * 0.325; // 10% up to 24,000, 25% from 24,001 to 32,333, 30% from 32,334 to 500,000, 32.5% above 500,000
    } else if (monthlyTaxablePay > 800000) {
        paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (monthlyTaxablePay - 800000) * 0.35; // 10% up to 24,000, 25% from 24,001 to 32,333, 30% from 32,334 to 500,000, 32.5% from 500,001 to 800,000, 35% above 800,000
    }

    return paye;
}

// Function to calculate NHIF deductions based on gross pay
function calculateNHIFDeductions(grossPay) {
    let nhifDeduction = 0;

    if (grossPay >= 0 && grossPay <= 5999) {
        nhifDeduction = 150;
    } else if (grossPay >= 6000 && grossPay <= 7999) {
        nhifDeduction = 300;
    } else if (grossPay >= 8000 && grossPay <= 11999) {
        nhifDeduction = 400;
    } else if (grossPay >= 12000 && grossPay <= 14999) {
        nhifDeduction = 500;
    } else if (grossPay >= 15000 && grossPay <= 19999) {
        nhifDeduction = 600;
    } else if (grossPay >= 20000 && grossPay <= 24999) {
        nhifDeduction = 750;
    } else if (grossPay >= 25000 && grossPay <= 29999) {
        nhifDeduction = 850;
    } else if (grossPay >= 30000 && grossPay <= 34999) {
        nhifDeduction = 900;
    } else if (grossPay >= 35000 && grossPay <= 39999) {
        nhifDeduction = 950;
    } else if (grossPay >= 40000 && grossPay <= 44999) {
        nhifDeduction = 1000;
    } else if (grossPay >= 45000 && grossPay <= 49999) {
        nhifDeduction = 1100;
    } else if (grossPay >= 50000 && grossPay <= 59999) {
        nhifDeduction = 1200;
    } else if (grossPay >= 60000 && grossPay <= 69999) {
        nhifDeduction = 1300;
    } else if (grossPay >= 70000 && grossPay <= 79999) {
        nhifDeduction = 1400;
    } else if (grossPay >= 80000 && grossPay <= 89999) {
        nhifDeduction = 1500;
    } else if (grossPay >= 90000 && grossPay <= 99999) {
        nhifDeduction = 1600;
    } else if (grossPay >= 100000) {
        nhifDeduction = 1700;
    }

    return nhifDeduction;
}

// Function to calculate NSSF deductions based on the selected tier
function calculateNSSF(grossSalary, selectedTier) {
    let nssfDeductions = 0;

    if (selectedTier === "TierI") {
        nssfDeductions = 720; // Tier I NSSF deduction
    } else if (selectedTier === "TierII") {
        nssfDeductions = 1080; // Tier II NSSF deduction
    } else {
        console.error("Invalid NSSF tier selected.");
    }

    return nssfDeductions;
}

// Function to calculate salary components
function calculateSalary() {
    // Prompt the user for basic salary and benefits
    const basicSalaryInput = prompt("Enter Basic Salary:");
    const benefitsInput = prompt("Enter Benefits:");

    // Parse the user input as numbers
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    // Check if the inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.error("Invalid input. Please enter valid numbers for Basic Salary and Benefits.");
        return;
    }

    // Prompt the user to select an NSSF tier
    const selectedTier = prompt("Select NSSF Tier (TierI or TierII):").trim();

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    const paye = calculatePAYE(grossSalary);

    // Calculate NHIF deductions
    const nhifDeductions = calculateNHIFDeductions(grossSalary);

    // Calculate NSSF deductions based on the selected tier
    const nssfDeductions = calculateNSSF(grossSalary, selectedTier);

    // Calculate Housing Levy
    const housingLevyRate = 0.015;
    const housingLevy = grossSalary * housingLevyRate;

    // Calculate net salary
    const netSalary = (grossSalary - paye - nhifDeductions - nssfDeductions - housingLevy).toFixed(2);

    const results = `
        Basic Salary: ${basicSalary}
        Benefits: ${benefits}
        Gross Salary: ${grossSalary}
        PAYE (Tax): ${paye}
        NHIF Deductions: ${nhifDeductions}
        NSSF Deductions: ${nssfDeductions}
        Housing Levy: ${housingLevy}
        Net Salary: ${netSalary}
    `;

    console.log(results);
}

// Call the function to calculate salary based on user input
calculateSalary();

