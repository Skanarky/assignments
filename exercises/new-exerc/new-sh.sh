#!/bin/bash

echo "- - - - -"

echo "if you change permissions to executable always include the shebang"

echo "otherwise you can explicitly run with 'bash name-of-bash-file'"

echo "- - - - - -" 

date

echo "- - - - -"
echo "done with date"
echo "- - - - -"

cal

echo "- - - - -"
echo "done with cal"
echo "- - - - -"

echo "some notes:"
echo "1. some command + '>' + <new-file-name> can create the file and wrtie the output of that command"
echo "2. like note above but with '>>' + existing file will write directly into the file"
echo "3. echo + command in !!!SINGLE quotes '' + '>>' + <existing-file> will write that command in the file"
echo "*3. cool example --> echo 'echo DBL-QUOTESsome stringDBL-QUOTES' >> <existing-file> <-- will write the echo command with that string in the file"
echo "4. single qutoes can be used for passing text info like point 3 above"
echo "5. double quotes - strings"
echo "6. man + command name -> loads manual page for that command"
echo "7. tar command for archiving"
