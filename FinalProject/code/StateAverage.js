inlets = 1;
outlets = 1;

// Function to process the list and determine the dominant band
function list() {
    // Convert the incoming arguments into an array
    var numbers = arrayfromargs(arguments);

    // Check if the input has exactly 7 values (averaged bandpower values)
    if (numbers.length !== 7) {
        post("Expected 7 bandpower values, but received " + numbers.length + " values.\n");
        return;
    }

    // Find the maximum bandpower and its index (dominant band)
    var maxBandpower = Math.max.apply(null, numbers);
    var dominantBandIndex = numbers.indexOf(maxBandpower);

    // Array of band names corresponding to the indices
    var bandNames = ['Delta', 'Theta', 'Alpha', 'Beta', 'Beta', 'Beta', 'Gamma'];

    // Output the name of the dominant band
    outlet(0, bandNames[dominantBandIndex]);
}
