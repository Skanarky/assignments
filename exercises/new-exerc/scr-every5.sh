#!/bin/bash

theNum=1

checkNumAndDoActn () {

echo $theNum

if [ $((theNum%2)) -eq 0 ]
then
  echo "Number is even."
else
  echo "Number is odd."
fi

((++theNum))

echo $theNum

}

checkNumAndDoActn
