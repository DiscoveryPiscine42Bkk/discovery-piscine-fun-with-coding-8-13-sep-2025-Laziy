#create a folders using the arguments of this program by adding 'ex' to the beginning of the name
#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments provided"
else
  for arg in "$@"; do
    mkdir "ex$arg"
  done
fi