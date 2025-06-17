# regular expression(regex)

## name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)

- /.../ → this is the syntax for a regular expression.

- ^ → start of the string.

- [A-Za-z]+ → one or more letters (for the first name).

- \s{1} 
or space → exactly one space between the first and last name.

- [A-Za-z]+ → one or more letters (for the last name).

- $ → end of the string.


phone.match(/^[0-9]{10}$/)

email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)