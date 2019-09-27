// 1. What is scope?

// I think scope means within '{ }' variables are created and die within the brackets
// Global scope means they are created inside the file under the master or class { } so they are allowed in every function scope
// block scope or i think of it more as function scope is that variable are created and die inside a function or a block of code

// 2. Why are Global variables avoided?

// They are avoided because if we have global variables then because they can cause side effects
//  from my understanding we dont want global variables that can be manipulated by functions but we want functions that take inputs and then the function only manipulate the inputs

// 3. Explain Strict Mode

//  throws an error when a variable is declared without let or const

// 4. what are side effects? and what is a pure function? 

// a side effect is when a function reaches outside its local scope up into a parent scope and alters a value that lives there
// a pure function is when it is a determinate function and has no side effects