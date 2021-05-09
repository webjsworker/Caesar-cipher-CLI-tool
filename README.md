# Caesar-cipher-CLI-tool
## Description
options 

- --shift  -s   a shift (positive)
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
node app.js  -s 1 -a encode --input ./input.txt  --output ./output.txt 
```
## Install
```
npm install
```
