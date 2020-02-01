#!/bin/bash

# this, script will backup the Music folder for ANY user of this computer and output it to desktop

# user=$(whoami)
# using a positional param for user
user=$1
input=/Users/$user/Music
output=/Users/$user/Desktop/${user}_music_$(date +%Y-%m-%d_%H%M%S).tar.gz

function total_directories {
    find $1 -type d | wc -l
}

function total_archived_directories {
        tar -tzf $1 | grep  /$ | wc -l
}

echo " *** START - - - - -"
echo "- - - - -"
echo "Start of backing up - $input - with recording script output in file outp-backup.txt"
echo "- - - - -"

tar -czf  $output $input &> outp-backup.txt
echo "--- On $(date +%Y-%m-%d_%H%M%S) ---" >> outp-backup.txt

# PRINT  date from file - an example for terminal input from another file
echo "$(< date-for-bup.txt)"

echo "- - - - -"
echo "Number of directories to be archived: $(total_directories $input)"
echo "- - - - -"

if [ $(total_archived_directories $output) -eq $(total_directories $input) ]
then
    echo "Number of archived directories: $(total_archived_directories $output)"
    echo "- - - - -"
    echo "Backup of - $input - directory for user - $user - was successful!"
    echo "- - - - -"
    echo "Archive details:"
    ls -al $output
else
    echo "Backup of - $input - directory for user - $user - failed!"
fi

echo " *** END - - - - -"
