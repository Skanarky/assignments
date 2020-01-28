#!/bin/bash

# this, script will backup the Music folder for ANY user of this computer and output it to desktop

user=$(whoami)
input=/Users/$user/Music
output=/Users/$user/Desktop/${user}_music_$(date +%Y-%m-%d_%H%M%S).tar.gz

function total_directories {
    find $1 -type d | wc -l
}

echo "- - - - -"
echo "Start of backing up - $input - with recording script output in file outp-backup.txt"
echo "- - - - -"

tar -czf  $output $input &> outp-backup.txt
echo "--- On $(date +%Y-%m-%d_%H%M%S) ---" >> outp-backup.txt

# PRINT  date from file - an example for terminal input from another file
echo "$(< date-for-bup.txt)"

echo "Backup of - $input - folder for user - $user - done!"
echo "- - - - -"
echo "Number of directories added: $(total_directories $input)"
echo "- - - - -"
echo "Archive details:"
ls -al $output
echo "- - - - -"
