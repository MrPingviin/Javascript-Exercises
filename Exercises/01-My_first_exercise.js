/* Hey, this is my first Javascript exercise c:
 Current version: v1.0

 Known bugs: When you set your name as Bob, you still can see the alert in the 'else' section.
 */
var name  = prompt("Set a name [Options: Bob, David / other]");
if (name === "Bob") {
    alert("Hey, Bob.");
}
if (name === "David") {
    alert("Hi, David.");
}
else {
    alert("I don't know you. :c");
}
