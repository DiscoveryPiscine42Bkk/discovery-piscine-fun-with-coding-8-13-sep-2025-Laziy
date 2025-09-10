#out put the number of files in the current directory
#!/bin/bash
ls -A | wc -l | tr -d ' '
