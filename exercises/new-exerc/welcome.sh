#!/bin/bash

theGreeting="What' Up"
theUser=$(whoami)
theDay=$(date +%A)

echo "$theGreeting my man $theUser!"
echo "Today is $theDay - BEST DAY EVER!"
echo "FYI the bash version is: $BASH_VERSION. Isn't that SWEET!"
echo "Have a splendid one!"
