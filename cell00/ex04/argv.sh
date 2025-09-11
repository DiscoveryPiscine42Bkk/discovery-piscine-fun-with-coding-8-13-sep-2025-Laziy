#output arguments maximum 3
#!/bin/bash
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
elif [ $# -eq 1 ]
then
    echo "$1"
elif [ $# -eq 2 ]
then
    echo "$1"
    echo "$2"
else
    echo -e "$1"
    echo -e "$2"
    echo -e "$3"
fi
