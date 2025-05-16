// Initialize the object with a list input
function list() {
    var input_list = arrayfromargs(arguments);
    
    // Ensure we have exactly 8 numbers in the input list
    if (input_list.length === 8) {
        var sum = 0;
        
        // Sum the values in the list
        for (var i = 0; i < input_list.length; i++) {
            sum += input_list[i];
        }
        
        // Calculate the average
        var average = sum / input_list.length;
        
        // Output the average value
        outlet(0, average);
    } else {
        // If there are not exactly 8 values, send an error message
        post("Error: You must input exactly 8 numbers.\n");
    }
}

// Initialize the object and specify the output
outlets = 1;
