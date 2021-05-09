# Caesar-cipher-CLI-tool
## Description
options 

- --shift  -s   a shift (You can input positive or negatve value) 
- --action -a  an action encode/decode 
- --input  -i  ./input.txt  an input file
- --output -o  ./output.txt  an output file


## For example 
All parameters must be passed to execute the application.
```
node app.js  -s 1 -a encode -i ./input.txt  -o output.txt 
```
or
```
node app.js  --shift 1 --action encode --input ./input.txt  --output ./output.txt 
node app.js  -s -3 -a encode --input ./input.txt  --output ./output.txt 
```
- If the path of the input file is missing or incorrect, then the text is entered into the console.
- If the path of the output file is missing or incorrect, then the text is output to the console.
- If the paths to the files are specified correctly, then the text is not displayed on the console.
## Install
```
npm install
```
