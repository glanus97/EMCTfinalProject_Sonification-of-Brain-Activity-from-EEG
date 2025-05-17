inlets = 1;
outlets = 7;

// Function to extract and output the 7 averaged values (from 57th to 63rd)
function list() {
    // Convert the incoming arguments into an array
    var numbers = arrayfromargs(arguments);

    // Check if the input has exactly 70 values
    if (numbers.length !== 70) {
        post("Expected 70 values, but received " + numbers.length + " values.\n");
        return;
    }

    // Extract the averaged values (57th to 63rd values in the list, which are indices 56 to 62)
    var averages = numbers.slice(56, 63); // This will get values from indices 56 to 62 (0-based indexing)

    // Output the 7 averages to 7 outlets (Delta, Theta, Alpha, Beta Low, Beta Mid, Beta High, Gamma)
    for (var i = 0; i < 7; i++) {
        outlet(i, averages[i]); // Send the averaged values to the corresponding outlet (0 to 6)
    }
}
