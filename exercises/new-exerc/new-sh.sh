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
echo "2. like note above but with '>>' + existing file will write directly into the file (output no error), or use '2>' to output error, or '&>' to output both - normal and error"
echo "3. echo + command in !!!SINGLE quotes '' + '>>' + <existing-file> will write that command in the file"
echo "*3. cool example --> echo 'echo DBL-QUOTESsome stringDBL-QUOTES' >> <existing-file> <-- will write the echo command with that string in the file"
echo "4. single qutoes can be used for passing text info like point 3 above"
echo "5. double quotes - strings"
echo "6. man + command name -> loads manual page for that command"
echo "7. tar command for archiving"
echo "8. use '#' for comments, except in the shebang"
echo "9. if file is executable (must have the shebang tho) can run with just './<file-name>', otherwise run with 'bash <file-name>'"
echo "10. look at the backup script file for more uses of vars with '$', '(', '{' or without the '(', '{'"
echo "11. redirect to /dev/null if you want to discard any data or output, see man null"
echo "12. use '<' to get input - see backup script for an example (pulling string from a  file)"
echo "13. functions + functions with vars"
echo "14. using arithmetic expansion '((number here...))' to do arithmetics"
echo "15. functions CAN NOT return values, they dump their execution msg into the '$?' variable"
