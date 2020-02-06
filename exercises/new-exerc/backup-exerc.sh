#!/bin/bash

# this, script will backup the Music folder for any (if permission OK) user of this computer and output it to desktop
# user name parameter need to be passed -> ./backup-exerc.sh <name-of-user>

runsNum=0

theBackupFn () {
    ((runsNum+=1))
    
    echo ""
    echo "RUN No. $runsNum; Executing with Bash ver. $BASH_VERSION"

    if [ -z $1 ]
    then
        user=$(whoami)
    else
        user=$1

        echo "### For user: - $user - ###"
        echo "- - - - -"

        if [ ! -d "/Users/$1/Music" ]
        then
            echo "Requested - $1 - user Music directory doesn't exist."
            exit 1
        fi

    fi

    input=/Users/$user/Music
    output=/Users/$user/Desktop/${user}_music_$(date +%Y-%m-%d_%H%M%S).tar.gz

    function total_directories {
        find $1 -type d | wc -l
    }

    function total_archived_directories {
        tar -tzf $1 | grep  /$ | wc -l
    }

    function lsit_directories_names {
        local varForLoop="$input/*"
        for aVar in  $( ls $varForLoop ); do echo "$aVar has $(echo -n $aVar | wc -c | awk '{$1=$1;print}') bytes/characters!"; done
    }

    echo " *** START - - - - -"
    echo "- - - - -"
    echo "Start of backing up - $input - with recording script output in file outp-backup.txt"
    echo "- - - - -"
    echo "Number of directories to be archived: $(total_directories $input)"
    echo "- - - - -"
    echo "Directories' names and character number (if name has space it splits the name):"
    lsit_directories_names
    echo "- - - - -"

    if [ $(total_directories $input) -gt 0 ]
    then 
        tar -czf  $output $input &> outp-backup.txt
        # OR
        # tar -czf  $output $input 2> /dev/null 
        echo "--- On $(date +%Y-%m-%d_%H%M%S) ---" >> outp-backup.txt
        echo "- - - - -"
        echo "Msg from within outp-backup.txt file:"
        cat outp-backup.txt
        echo "- - - - -"

        # PRINT  date from file - an example for input from another file
        # Can use with constant or similar
        # echo "$(< date-for-bup.txt)"
        # echo "- - - - -"

        if [ $(total_archived_directories $output) -gt 0  -a  $(total_archived_directories $output) -eq $(total_directories $input) ]
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
    else
        echo "There are no directories to back up - program will exit."
    fi    

}

for theUser in $*; do
    theBackupFn $theUser
done;
