###################################################################
###### README ###### (Sonification-of-Brain-Activity VERSION 1.0] #
###################################################################

EEG-Driven Generative Sound Installation - Project based on MaxMSP using a Unicorn Hybrid Black EEG headset to read brainwave data. 

This project transforms real-time brainwave signals into an immersive sonic experience. Using advanced electroencephalography(EEG) data from a g.Tec Unicorn Hybrid Black headset linked to the software Max/MSP, this interactive installation creates a generative soundscape that evolves in response to the user's brain activity. Brain signals—such as those associated with focus, relaxation, or cognitive load—are mapped to musical parameters like tempo, harmony, and texture.
The headset measures seven frequency bands: Delta, Theta, Alpha, Beta Low, Beta Mid, Beta High, and Gamma. These are averaged and compared to estimate the user's mental state. Lower frequencies (Delta, Theta) are associated with rest, meditation, and deep relaxation, while higher frequencies (Alpha, Beta, Gamma) relate to concentration, stress, or heightened alertness. The soundscape moves between these five moods based on these signals, aiming to create a reflection of the participant's brain activity.
The work draws on research in music psychology, neuroscience, and brain-computer interfaces to explore how subjective internal experiences can be meaningfully expressed through sound and how sound, in return, can influence the human mind. Visitors are invited to experience music not only as an art form but as a direct reflection of their own mind in motion.


Gabriel Lanús (2025)
alias MALASVERTE //

####################################################################
##### INSTALL ######################################################

Cycling '74Max v8.6.0 or above

Unicor Suite (https://www.gtec.at/product/unicorn-suite/?srsltid=AfmBOopdQ-5r4RSj_cJmqErrO-ZwkK_4OC1xYyP2aTD8DG7cXux8aKv9)
Bandpower Add-on

MaxMSP required packages:
- FluidCorpusManipulation by FluCoMa
- Java 8

####################################################################
##### USAGE ########################################################

1. Connect Unicorn EEG headset and open Bandpower app.

2. Set UDP port and IP adress in the settings of Bandpower app.

3. Restart the app

4. Open FinalProject.maxproj
   
5. Open Start00.maxpat

6. On first usage you might need to change the serial port message to same port of the Unicorn App - Exit presentation mode and set the right @port (top Left corner of the screen)

7. Turn On the communtication from serial port.

8. Activate Audio Engine and Enjoy!!

####################################################################
####################################################################

