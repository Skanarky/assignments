#!/bin/bash

theNum=0

checkNumAndDoActn () {

echo $theNum

if [ $((theNum%2)) -eq 0 ]
then
  echo "Number is even."
else
  echo "Number is odd."
fi

((theNum+=5))

}

while true; do checkNumAndDoActn; sleep 5; done
