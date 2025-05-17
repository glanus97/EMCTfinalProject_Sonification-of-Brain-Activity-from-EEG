inlets = 1;
outlets = 1;

// Called when a list of values arrives
function list() {
    var a = arrayfromargs(arguments);
    if (a.length !== 7) {
        post("EEGstate.js: error — expected 7 values, got " + a.length + "\n");
        return;
    }

    var delta    = a[0];
    var theta    = a[1];
    var alpha    = a[2];
    var betaLow  = a[3];
    var betaMid  = a[4];
    var betaHigh = a[5];
    var gamma    = a[6];

    // calculate scores
    var thetaScore = (0.5 * alpha) + (0.6 * theta)
                        - (0.4 * (betaLow + betaMid + betaHigh + gamma));

    var alphaScore = (0.4 * betaLow) + (0.3 * betaMid) + (0.2 * betaHigh)
                   - (0.3 * (alpha + theta));

    var betaScore = (0.6 * gamma) + (0.8 * betaHigh)
                    - (0.3 * (alpha + theta + delta));

    var deltaScore = (0.3 * theta) + (0.3 * delta)
                        - (0.4 * (betaLow + betaMid + betaHigh));

    var gammaScore = (0.7 * gamma) + (0.5 * betaHigh)
                     - (0.5 * (alpha + theta));

    // bundle into arrays for easy comparison
    var states =    ["Theta", "Alpha", "Beta", "Delta", "Gamma"];
    var scores =    [thetaScore, alphaScore, betaScore, deltaScore, gammaScore];

    // find highest
    var highestIdx = 0;
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] > scores[highestIdx]) {
            highestIdx = i;
        }
    }

    // output the higher state
    outlet(0, states[highestIdx]);
}