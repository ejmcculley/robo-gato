# _robo-gato_

#### By _**Erin McCulley**_

#### _Beginners Web Development_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_
* _Markdown_
* _Git / Github_
* _Terminal_


## Description

_This is the third Independent Project for Epicodus Full-Stack Bootcamp. I'm using the HTML, CSS, Javascript, and JQuery learned in the first section of the program to create a web application that counts up to a given number, and inserts "Beep!", "Boop", and "Won't you be my neighbor?" after certain conditions._

## Setup/Installation Requirements

1. Click on the green "Code" button above this file list.
2. Copy the HTTPS link (this is the default option).
3. Open your local Terminal.
4. Navigate to the local directory where you want the cloned directory to go.
5. In your Terminal type "git clone" (without the quotes) then paste the URL you copied above. 
6. Press 'enter' and the cloned directory should be copied to your current working directory.
7. To view the HTML file (index.html), double click the file and the it will open in your web browser. 

## Specs

_Describe: beepBoop()_

_Test: "It should return an array with a 0 if the number 0 is inputted"_
_Code: beepBoop(0);_
_Expected Output: [0]_

__Test: "It should return an string that starts with 0 and ends with the inputted number"_
_Code: beebBoop(5);_
_Expected Output: "0, 1, 2, 3, 4, 5"_

_Test: "If a number contains 1, it should return "Beep!"_
_Code: beepBoop(5);_
_Expected Output: "0, Beep!, 2, 3, 4 , 5"_

_Test: "If a number contains 2, it should return "Boop"_
_Code: beepBoop(5);_
_Expected Output: "0, Beep!, "Boop", 3, 4 , 5"_

_Test: "If a number contains 3, it should return "Won't you be my neighbor?"_
_Code: beepBoop(5);_
_Expected Output: "0, Beep!, "Boop", 3, 4 , 5"_

_Test: "Exceptions are in order so that the numbers 13 and 32 are replaced with "Won't you be my neighbor?" and 21 is replaced with "Boop""_
_Code: beepBoop(5);_
_Expected Output: "0, Beep!, "Boop", 3, 4 , 5"_

## Known Bugs

* Not at the moment

## License
MIT License

Copyright (c) [2021] [Erin McCulley]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.