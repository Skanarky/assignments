#!/bin/bash

theNum=0

checkNumAndDoActn () {

echo $theNum

if [ $((theNum%2)) -eq 0 ]
then
  echo "Number is even."
  open -a Safari
else
  echo "Number is odd."
  killall Safari
fi

((theNum+=5))

echo "var state after incr OR decr: $theNum"

}

# while true; do checkNumAndDoActn; sleep 5; done

while [ $theNum -le 25 ]; do checkNumAndDoActn; sleep 5; done
