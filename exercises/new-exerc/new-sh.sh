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

for aVar in  $( cat a-list.txt ); do echo $aVar; done
echo "- - - - -"
for aVar in  $( cat a-list.txt ); do echo -n $aVar | wc -c; done

echo "- - - - -"
echo "done with example for 'for' loop and accessing another file"
echo "- - - - -"



echo "some notes:"
echo "*. always keep a space between commands parenthesis, brackets, variables, numbers, etc."
echo "**. use '|' to pipe the output of one command to be the input of the next command (like above '&&' but pipes the output)"
echo "***. use ';' to separate and execute multiple, independent on the output or success, commands"
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
echo "16. to pass parameter in a function call it and next to it put the argument - this becomes parameter 'DollarSign1'... till 'DollarSignn'"
echo "17. to exit script use 'exit <number-for-exit-code>', see articles for exit codes"
echo "18. use '&&' to execute multiple commands if every prior command was successful"
echo "19. use 'grep <file-repo-app-you-look-for>' to find things; also 'find <file-name>' kind of similar"
echo "20. you can open or close apps by using 'osascript' or 'open -a' and 'killall' with the name of the app OR 'kil' but then you need the PID of the running app that you can get with the 'pgrep' command and pass it"
echo "21. 'wc' command can count files, dirs, etc.; see 'man wc'"
echo "22. 'DollarSign#' contains the total amount of passed params in a fn or script file"
echo "23. 'DollarSign*' contains all the passed params in a fn or script file"
echo "24. Arithmetic expansion: 'DollarSign' + enclose any mathematical expression inside double parentheses"
echo "25. Arithmetic expansion with expression: 'expr 2 + 2'"
echo "26. Arithmetic expansion with 'let': 'let b=(2**3)/2' - notice no spaces between numbers and operators!"
echo "27. Arithmetic expansion with 'bc' and 'scale' for decimal numbers: 'echo 'scale=10; 8.5 / 2.3' | bc' - notice the single qutoes, after the 'echo', and pipe the 'echo' output to 'bc' command! 'scale' is for number of decimals!"
echo "28. 'sqrt(4)' -> 2, gets the square"

echo "- - - - -"
echo "Execute script Backup for user 'owner'"
# ./backup-exerc.sh owner

echo "next - read while loop and change while loop addition in the actual loop - scr-every file; read until loop; do -exercise- at the end of Loops' Section; Bash Arithmetics."