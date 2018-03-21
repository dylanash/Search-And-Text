Minimal React Starter
---

Setup
---

```
npm install
```
Start
---

```
npm start
```

Usage
---

1. `node server.js` OR `npm start`

2. Open [http://localhost:3000/](http://localhost:3000/).
OR go to -- https://serene-forest-93913.herokuapp.com/


1. Search engine query

Write a Javascript application (command-line or GUI) that prompts the user for a text string, performs a Web search (Google/Yahoo/Bing/etc - your choice) and returns the title and URL of the first result. Use any tools / libraries you wish, but you must provide instructions on how to build and run your application. Please include a brief description of your application and why you implemented it the way you did.


2. Pattern matching

You are given two text files: (a) input.txt - a free-text document composed of 1 or more lines of text, and (b) patterns.txt - a set of search strings (1 per line). Write a Javascript application (command-line or GUI) that can run in three following modes:

Required:

Mode 1: output all the lines from input.txt that match exactly any pattern in patterns.txt

Optional:

Mode 2: output all the lines from input.txt that contain a match from patterns.txt somewhere in the line.

Mode 3: output all the lines from input.txt that contain a match with edit distance <= 1 patterns.txt

An example:

input.txt
Hello.  This is line 1 of text.
and this is another.
line 3 here
the end

patterns.txt
the end
matches
line 3
and this is anoother.

Mode 1 outputs:
the end

Mode 2 outputs:
line 3 here
the end

Mode 3 outputs:
and this is another.
the end



