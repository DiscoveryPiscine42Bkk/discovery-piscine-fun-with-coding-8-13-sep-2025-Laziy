#create a folders using the arguments of this program by adding 'ex' to the beginning of the name
#!/bin/bash
if [ $# -eq 0 ]
then
    echo "No arguments provided"
elif [ $# -eq 1 ]
then
    mkdir ex$1
elif [ $# -eq 2 ]
then
    mkdir ex$1 ex$2
elif [ $# -eq 3 ]
then
    mkdir ex$1 ex$2 ex$3
else
    echo "More than three arguments provided"
fi
