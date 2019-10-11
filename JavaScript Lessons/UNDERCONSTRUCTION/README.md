# Learning JavaScript for HTML5
And Reviewing HTML with inline CSS

Summary of Assignments
- Landscape or Portrait: teaching example, introductory HTML and introductory JS
- Max of Two Numbers: reuses LandScape or Portrait assignment files with different user prompts
- Ordering Grades: see HTML for explanations and bonus grades
- Demerit Points: teaching example of FOR Loop and Division Statement to start algorithm (using cascading IFs to notice number patterns), introductory HTML with hints at making JS more advanced
- Modulus: Lesson including data set of what modulus does (mathematics lesson data set)
- FizzBuzz and Greeting Someone is explanation of ReadMe.md only (all coding done by students)

Explanation of Assignments
- Landscape or Portrait: Reviews ternary operator and how to write very few lines of code, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/LandScape%20or%20Portrait">Click Here</a>
- Max of Two Numbers: Reviews decisions in terms of comparisons, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/Max%20of%20Two%20Numbers">Click Here</a>
- Ordering Grades: easier ordering "RETURN" Logic, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/Ordering%20Grades">Click Here</a>
- Demerit Points: ordering "RETURN" Logic, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/Demerit%20Points">Click Here</a>
- Modulus Assignment: Review arrays and decisions, also review modulus operator to evaluate even and odd numbers, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/Modulus">Click Here</a>
- FizzBuzz: ordering "RETURN" logic with a problem situation common in blogs, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/FizzBuzz">Click Here</a>
- Greeting Someone (based on the hour of the day): Reviews issues with decisions, <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/JavaScript%20Lessons/UNDERCONSTRUCTION/ReadMe%20Explanations/Greeting%20Someone">Click Here</a>

---

# Code to Begin Project Folders and Files

### HTML Boilerplate, notice BODY is below

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <noscript><h1 style="color:red;">JavaScript needs to be enabled in Settings</h1></noscript> <!-- Checks browser settings for JavaScript -->

    <meta charset="utf-8">
    <meta name="author" content="Mark Mercer">
    <meta name="description" content="JavaScript Assignments, output to HTML and Console"> <!-- Webpage Description to poplulate search engines like Google-->
    <meta name="keywords" content="JavaScript, Console"> <!-- Key words for searching -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Title</title>

  </head>

  <body>

    <header></header>
    <nav></nav>
    <aside></aside>
    <section><article></article></section>

    <script src=""></script>

  </body>

  <footer>
    <blockquote cite="https://www.brainyquote.com/quotes/mitchell_kapor_163583">
    <!--  Date Accessed: 20180920 -->
    <p><strong>"Getting information off the Internet is like taking a drink from a firehose."</strong>
      <em><a href="https://www.brainyquote.com/quotes/mitchell_kapor_163583" target="_blank">- Michell Kapor</a></em></p>
    <p>&copy Mark Mercer, powered by MercersKitchen in GitHub</p>
  </footer>

</html>
```
### HTML Body, Inner HTML and ALERT Notification

```HTML
<header><h1>Assignment</h1></header>

<nav></nav>
<aside></aside>

<section>
  <article>
    <!--  -->
    <form action="x.html" method="post" onsubmit="event.preventDefault();">
    <!-- Ensures this FORM doesn't work with PHP or other server side scripting
    languages-->

    <p>&nbsp;</p>
    <!-- See: https://www.w3schools.com/html/html_entities.asp-->
    <!-- Non-breaking real space, adds real space to webpage that is not
    eliminated by browser (hard coded space)-->

    <a><strong>Enter the values  ...</strong></a>

    <p>
      <label for="textfield">Name: </label>
      <input name="textfield1" type="text" id="textfield1">
        <a id="validityTest1">"See the Alert", Inner HTML</a>
    </p>

    <p>
      <label for="textfield2">Name: </label>
      <input name="textfield2" type="text" id="textfield2">
        <a id="validityTest2">See the Alert</a>
    </p>

    <!-- Submit Button -->
    <br>
    <button type="button" onclick="main()">Submit</button>
    <br>
    <h3>Explanation
      <a id="answer">Inner HTML</a>
    </h3>
    <br><br><br>

    <!-- Exemplar illstrating what this page does -->
    <!-- Future: make this illustrative of the example to understand the problem -->
    <fieldset>
      <legend>Case Study</legend>
      <p>See Mr. Mercer for lesson, below reviews vocabulary</p>
      <div>
        <button type="button" onclick="checkboxes()">Submit</button>
        <br><br>
        <label>
          <input type="checkbox" name="Checkbox1" nalue="checkbox1" id="Checkbox1">
          <a>Question: </a><a id="checkbox1_answer">True False Answer</a>
        </label>
        <br>
        <label>
          <input type="checkbox" name="Checkbox2" nalue="checkbox2" id="Checkbox2">
          <a>Question: </a><a id="checkbox2_answer">True False Answer</a>
        </label>
        <br>
        <label>
          <input type="checkbox" name="Checkbox3" nalue="checkbox3" id="Checkbox3">
          <a>Question: </a><a id="checkbox3_answer">True False Answer</a>
        </label>
    </fieldset>

  </article>
</section>

<br><br><br>

<script src="directory pathway"></script>
```

### JavaScript File, HTML and Console Output

```JavaScript
console.log("Did you change my file name?"); //When connecting HTML to JavaScript
console.log("You made it to the console!");

//Global Variables
let stop = false; //NAN Boolean Memory

function testNaN (number) {
  //console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
} //End testNaN

function mainAlgorithm () { //Notice these parameters are local and do not mix with "number" variable

}//End mainAlgorithm

function checkboxes() { //For Vocabulary and Lesson Review illustrating separate SUBMIT Button
  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "Question";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "Question";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
}//End checkboxes

function main() {
  //console.log("It works");

  let firstNumber, secondNumber;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;

  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  //Illustrates one example of character escapes
  console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber);
  //Notice concatenating

  //Executing mainAlgorithm
  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The display geometry is", mainAlgorithm (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "This display is " + mainAlgorithm (firstNumber, secondNumber);
  }

}//End main

```

---

# To Include


---
