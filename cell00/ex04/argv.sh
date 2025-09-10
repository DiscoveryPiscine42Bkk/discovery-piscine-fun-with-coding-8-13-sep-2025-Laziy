#output arguments maximum 3
#!/bin/bash
if [ $# -eq 0 ]
then
    echo "No arguments provided"
elif [ $# -eq 1 ]
then
    echo "One argument provided: $1"
elif [ $# -eq 2 ]
then
    echo "Two arguments provided: $1, $2"
elif [ $# -eq 3 ]
then
    echo "Three arguments provided: $1, $2, $3"
else
    echo "More than three arguments provided"
fi
