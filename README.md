# EMCTfinalProject_Sonification-of-Brain-Activity-from-EEG
EEG-Driven Generative Sound Installation - Project based on MaxMSP using a Unicorn Hybrid Black EEG headset to read brainwave data. 

This project transforms real-time brainwave signals into an immersive sonic experience. Using advanced electroencephalography(EEG) data from a g.Tec Unicorn Hybrid Black headset linked to the software Max/MSP, this interactive installation creates a generative soundscape that evolves in response to the user's brain activity. Brain signals—such as those associated with focus, relaxation, or cognitive load—are mapped to musical parameters like tempo, harmony, and texture.
The headset measures seven frequency bands: Delta, Theta, Alpha, Beta Low, Beta Mid, Beta High, and Gamma. These are averaged and compared to estimate the user's mental state. Lower frequencies (Delta, Theta) are associated with rest, meditation, and deep relaxation, while higher frequencies (Alpha, Beta, Gamma) relate to concentration, stress, or heightened alertness. The soundscape moves between these five moods based on these signals, aiming to create a reflection of the participant's brain activity.
The work draws on research in music psychology, neuroscience, and brain-computer interfaces to explore how subjective internal experiences can be meaningfully expressed through sound and how sound, in return, can influence the human mind. Visitors are invited to experience music not only as an art form but as a direct reflection of their own mind in motion.
Gabriel Lanús (2025)
alias MALASVERTE //

###################################################################
###### README ###### (UltraSonic Waves VERSION 0.1] ###############
###################################################################
                                                                      
                                      **=                             
                               ====--=-:--==-=--:::+-                 
                          ==--:-::==-:=+====-*=--::.::.               
                        ==:.   .: *===:. .==-++.     -=..             
                      ==-.:    ..:=+==*--=+++**--::::==-::            
                    +=======-==+*=*+++*****+==*=-=:-==::---           
           :::.::::::-:::----=*+*##***+====-:::- ::::::   :           
       =::::::-=::-=-::::-=+***==-.    =--:=::.:=+*##*-:+*=           
      =-******+====+++=:      . ..::=*#%%%%%#***+=+**%%@%==           
      ==**#%%+::== ...::-===++*%%##++*****#####%%%%#**+*+=            
      ***+**#+.:+*%%%%%%@@%@@@%###%###%%%%%%%%######*.::*             
      ***#%#**++******%#+*%%%#@%%%#######%%#%%%%  %%*-:=*             
        *:-*###%%%%%#%***=::*##%###%%%             %%#**              
           ####%%%%#%#*#*:::-##                                       
              %%%%%  %##%-::*##                                       
                      %###*##*                                        
                         %                                            
                       
####################################################################
####################################################################             

Welcome to [UltraSonic Waves]
[The main mapping strategy which gives meaning to the instrument's 
functionality is the distance value. The data controlled by the 
user's hand controls the playing note (the closer it gets, the 
higher the pitch). The user can select the desired scale and mode 
plus control over the playing octave. The joystick module is mapped 
to the interpolation between random presets of the synth voicing 
created through the Flu-co-ma neural network. The two knob 
potentiometers are used to change multiple parameters (e.g. filters 
cutoff and resonance, distortion, detuning). Temperature and 
humidity are combined to determine the parameters of a comb filter 
applied to the main synth (mc.synth). This control is used to give a
different colour to the sound based on the surrounding environment.]

####################################################################
##### AUTHORS ######################################################

anonimous <anonimous@anonimous.cc> >> >>

Predicting Points - Patch adapted from FluCoMa 
	FluidCorpusManipulation tutorial "Controlling a Synth with a
	Neural Network"

AbletonScaleNotes - adapted from M4L object "M4L.PitchScale.bpatch"

####################################################################
##### INSTALL ######################################################

Cycling '74Max v8.6.0

FluidCorpusManipulation by FluCoMa

####################################################################
##### USAGE ########################################################

1. Open START.maxpat

2. Connect Arduino to Usb port.

3. The first time connecting the Arduino controller to a new laptop
	activate patching mode and press the print button in the top
	left corner of the screen. Double check that the usb port
	name (port d) matches the one used by the new laptop.

4. Turn On the communtication from serial port.

5. Activate Audio Engine and play!!

####################################################################
##### COPYING ######################################################

Attribute the Patch if you use it!

====================================================================
====================================================================

