inlets = 1;
outlets = 8;

// Function to process a list of 70 floats and provide 8 outputs, one for each channel
function list() {
    // Get the input data passed to the 'js' object (Max/MSP automatically passes it as an argument to 'list()')
    var numbers = arrayfromargs(arguments); // Convert the incoming arguments into an array

    // Check if the list contains exactly 70 values
    if (numbers.length !== 70) {
        post("The input must contain exactly 70 float values.\n");
        return;
    }

    // Discard the last 14 values (values 57-70)
    numbers = numbers.slice(0, 56); // This slices the first 56 values and discards the rest

    // Create an array to hold the 8 channel outputs
    var channels = [];

    // Loop through each channel (0-7) and grab every 7th value starting from the corresponding index
    for (var i = 0; i < 8; i++) {
        var channelData = [];
        for (var j = i; j < numbers.length; j += 8) {
            channelData.push(numbers[j]);
        }
        channels.push(channelData);
    }

    // Output each channel as a separate outlet (0-7)
    for (var i = 0; i < 8; i++) {
        outlet(i, channels[i]); // This will send the data to the corresponding outlet (0 to 7)
    }
}