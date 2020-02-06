#!/bin/bash

# VARIABLES
theNum=0
# needs to be odd num
delayTimeInSecs=35
# timesToRun var needs to be even num so Safari can be closed at the end
timesToRun=4

# FUNCTIONS (with 2 different ways of declarating)
function countTimesCalledNum {
  echo $(($1/delayTimeInSecs))
}

timesToRunFn () {
# it's minus 1 because we have less than equal in the while loop 
  echo $((timesToRun-1))
}

function countTimesCalledMsg {

  local calledT=$(countTimesCalledNum $1)
  local leftTimes=$((timesToRun-calledT))

  echo "Main 'checkNumAndDoActn' function has been called $calledT times!"

  if [ $leftTimes -eq 0 ]
  then
    echo -n "This was the last iteration! "
    echo "Program will be terminated in $delayTimeInSecs seconds."
  else
    echo "$leftTimes times left!"
  fi

}

checkNumAndDoActn () {

  if [ $((theNum%2)) -eq 0 ]
  then
    echo "Main counter is even - Safari will open."
    open -a Safari
  else
    echo "Main counter is odd - Safari will close."
    killall Safari
  fi

}

# delay before first open of Safari
# sleep 50

while [ $(countTimesCalledNum $theNum) -le $(timesToRunFn) ]; do 
  checkNumAndDoActn
  ((theNum+=delayTimeInSecs))
  countTimesCalledMsg $theNum
  sleep $delayTimeInSecs
done