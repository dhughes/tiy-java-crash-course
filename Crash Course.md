

# Welcome To the Java Crash Course at The Iron Yard!

This lecture can be found at: http://dhughes.github.io/tiy-java-crash-course/

[Please fill out our crash course survey.](http://bit.ly/2absN3C)

## Hello, I'm Doug and I'll Be Your Instructor Tonight.

* Java instructor at the Raleigh The Iron Yard campus.
* Programmer for more than 17 years, using a plethora of languages.
* I've worked with dozens of companies on a wide range of projects.

<!-- Try to entice the class to participate. -->
<!-- Ask for some volunteers to say why they're here tonight.
	If no one volunteers, call out some people.
	How many attended my previous crash course?
	-->

## Writing Software in Java

To write a program is to "speak" in a language a computer can understand. We don't actually "speak" to a computer, but we can write  messages that it can understand. These words aren't in a natural language, though. Instead, they're in a _programming language_.

This class is about the programming language Java. Java is just one of _hundreds_ of programming languages, but it has the distinction of being the most popular.

To a fresh eye, programming languages often look like gibberish. For example:

<iframe src='https://glot.io/snippets/egqarv4w4d/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

This could be translated into english as something like, "Calculate an average score." This example is somewhat obtuse, but only to illustrate a point: _Java isn't english_. 

## What _is_ Java?

### Java is a programming language.

In English we know that we start sentences with capitol letters and end them with periods, question marks, or exclamation points. We know the basic sentence structure of "subject verb noun". Sentences can be collected together to communicate complex messages. This is the _syntax_ of English. All human languages have their own syntax.

All programming languages also have their own syntax. Java code is written in Java's syntax. Unlike spoken languages, a programming language's rules are _very_ strict. In English, a missing comma isn't the end of the world. A human can usually figure out what the writer is trying to communicate. In Java, a missing semicolon results in a program that won't run at all. Computers don't have intuition.

The programming language Java is the syntax you use to tell the computer what to do.

Java code is written in plain text files that have a `.java` extension.

### Java is a compiler

Computers only speak one language: Binary; ones and zeros. That's it. A CPU receives instructions in binary and does exactly what the instructions tell it to do. Unfortunately, humans don't speak binary. This is why we have programming languages.

The Java compiler is what translates code in the Java programming language into binary code that can be run by a computer.

Compiled Java files have a `.class` extension.

### Java is a "Runtime Environment"

Java is not compiled for a specific computer. Because of this, we can't just execute it like you normally would. Instead, we need a _Java Runtime Environment_ (JRE). This is the "Java" that your computer is constantly bugging you to update.

![java update available.png](https://tiy-learn-content.s3.amazonaws.com/221f36d2-java%20update%20available.png)

The JRE is actually a virtual computer. It simulates the CPU and hardware of a real computer. The JRE takes the compiled Java code and executes using a computer's non-virtual hardware.

The JRE effectively hides from the programmer everything that makes a particular computer unique. Java programers don't need to know how to read files on Windows, Mac, Unix, and your set-top cable box. The JRE knows how to do it.

This process of hiding implementation details is called _abstraction_. 

## Hello World

Let's get started here by writing our first Java program. When learning a new language, programmers typically begin by writing the simplest possible program. Traditionally, this program simply outputs the text  "Hello world."

Java programmers usually write code in specialized text editors called  Integrated Development Environments (IDEs). An IDE provides a wide range of tools to help programmers write and debug code. However, for the purposes of this class, we'll be using an online tool called [glot.io](https://glot.io/) to write, run, and share our code. 

Go to https://glot.io/new/java to get started. Here you will see a simple interface that will allow you to enter code and run it. You can also use edit and rerun the embedded code below.

The default program on glot.io just so happens to be a Hello World program:

<iframe src='https://glot.io/snippets/egqcav81gh/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

Go ahead and click the run button. You'll see the text "Hello World" output.

## Modeling with Object Oriented Programming

Software is often used to model the real world. For example, the desktop on your computer was originally designed to feel like a desk in a traditional office; complete with file folders, a calendar, a clock, etc. Video games often model scenes, characters, and the physics of the real world. Online purchases model purchases in the real world.

One relevant dictionary definition of model is:

> a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions.

Java is an _Object Oriented Programming_ (OOP) language. What this means is that programmers model the world using a construct called a _class_. Real world, objects have properties and capabilities. Classes are how programmers describe an object's properties and capabilities in code.

The name class comes from classification. This dictionary definition of class may shed light on the word:

> a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.

## Java Classes

All Java code is written in classes. We've already seen an example of a class:

<iframe src='https://glot.io/snippets/egqcav81gh/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

Our Hello World program is made up of one class, `Main`. 

This is the basic syntax used to write a class:

```
class {Class Name}{
	// code that describes properties

	// code that describes capabilities (methods)
}
```

The `{Class Name}` shown in the example above is a placeholder for an actual class name. For example, the Hello World program's class is named `Main`. Class names must start with a letter (typically upper case) and can contain letters, numbers, and the underscore character, `_`.

The class name should make sense for what you're modeling. For example, if you're modeling a playing card, a logical class name would be `Card`:

<iframe src='https://glot.io/snippets/egqcc75bo4/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

This class doesn't actually _do_ or _describe_ anything, but it is 100% valid code.

## Objects

Java classes describe objects, but are not actually the objects being described. 

A class is like a blueprint for a house. A blueprint is a detailed plan for building a house. It shows the placement and measurements of all rooms, where fixtures will be placed, where utilities will be run, how the roof will be assembled, and much more. 

![House_Plans_(Blueprints).jpg](https://tiy-learn-content.s3.amazonaws.com/b9067c2c-House_Plans_%28Blueprints%29.jpg)

An object is like a house you actually build using a blueprint. You can make many houses using the same blueprint, but each house is a distinct instance.

![what a house might look like.jpg](https://tiy-learn-content.s3.amazonaws.com/70364e47-what%20a%20house%20might%20look%20like.jpg)

What this means is that you don't actually _use_ classes in your program. Instead, you programmatically create and use object instances based on your class. 

You create an instance of an object using the `new` keyword. For example:

```
new {class name}()
```

The `new` keyword tells Java to create a new _instance_ of the class. The `{class name}` is a placeholder for a class name. This specifies the class to create an instance of. This must be followed by parenthesis. The parenthesis are called a _constructor_.

If we wanted to create a new instance of the `Card` class we could write this:

```java
new Card();
```

You can place this code inside a method like this:

<iframe src='https://glot.io/snippets/egqce8ph9m/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

Here, I've updated our `Main` class' `main` method. Where before it printed out the text "Hello World", it now prints out a description of an instance of `Card`. When run, the output should look something like this:

```
Card@4aa298b7
```

This is a description of the object instance, according to Java. This doesn't mean a whole lot to humans.

Our Card still doesn't actually _do_ or _describe_ anything yet, but now we can create new instances of it.

## Variables 

Sometimes we want to hold onto an object or value so we can reference it or change it later on. In Java we use variables to hold this data. Do you remember basic algebra? Remember how variables are used to stand in for numeric values? Variables in Java are the same concept, but they can stand in for any type of data, not just numbers.

The basic syntax for creating a variable is this:

```
{data type} {variable name} = {data / value};
```

This syntax is used to tell Java that a variable exists, what type of data the variable is, and sets the variable's initial value.

`{data type}` is a placeholder for the type of data a variable can hold. Java is _statically typed_. This means that a variable in Java can only ever hold one type of data. Because of this, you have to explicitly tell Java what type of data a variable can hold.

`{variable name}` is a placeholder for a variable's name. Variable names must start with a letter (typically lower case) and can contain letters, numbers, and the underscore character, `_`.

`=` is the _assignment operator_. An operator is a special bit of syntax that tells Java to perform some action on one, two, or three _operands_. Operands are the data an operator uses. In this case, the assignment operator assigns the value to the right of the operator to the variable specified to the left side.

`{data / value}` is a placeholder indicating a specific value to store in the variable. This value must be of the same type as specified in `{data type}`. 

You can also declare a variable without setting its initial value using this syntax:

```
{data type} {variable name};
```

Beyond just declaring a variable, you can later read and/or change a variable's value. For example:

<iframe src='https://glot.io/snippets/egqcezgh82/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

## Types of Data

In Java there are two types of data, primitives and objects. 

### Primitives

Primitives are a small set of basic data types. The most common primitives are:

* `boolean` - A value indicating true or false.
* `int` - Short for integer, int represents the numbers we count with, -5, -4, -3, -2, -1, 0, 1, 2, 3..., etc.
* `double` - A (potentially very big) decimal number.

An example of a primitive variable would be:

```java
int meaningOfLife = 42;
```

### Objects

All other data in Java are objects. As we learned above, objects are instances of classes. Java comes with a staggering number of classes; more than 20,000! Each of these classes has a specific purpose in Java.

One extremely common class is `String`. A string represent any string of letters, numbers, and other characters. IE: It's just text.

Another example of a class is the `Card` class we wrote earlier.

An example of a variable that holds an object would be:

```java
Card aceOfHearts = new Card();
```

Left to right, `Card` specifies the type of data. `aceOfHearts` specifies the name of the variable being created. The `=` assignment operator is used to set the value of the variable to the value to the right of the operator. The `new` keyword tells Java that we're going to be creating a new instance of a class. `Card` specifies the class we're creating an instance of. Finally, the parenthesis `()` are a constructor. 

## Class Properties

Properties are how you describe things. A property of the sky is that it's blue. A property of a laptop is what CPU it has. A property of a tweet is the text of the tweet.

Class properties are simply variables defined inside a specific class. Here's an example:

```java
class Card{
	boolean faceUp = true;
	String value = "King";
	String suit = "Spades";
}
```

This example shows a class named `Card` that models a playing card. This class has three properties, `faceUp`, `value`, and `suit`. The default values of these properties are `true`, `"King"`, and `"Spades"` respectively.

These properties can be accessed by any code in the `Card` class. And, by default, they can also be read and modified from "outside" the class. 

<iframe src='https://glot.io/snippets/egqcfzv0d1/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

This example shows how we can create a new instance of a `Card` using the new keyword. The new `Card` instance is assigned to a variable named `myCard`. We can do this because we declared that `myCard` can hold `Card` data. 

Next, we modify two properties on the `myCard` object instance. This changes two of the three properties we defined inside the `Card` class. The `.` dot tells Java that the property belongs to the specified object. In this case, `value` is a property that belongs to `myCard` which is an instance of the `Card` class.

Finally, we print out the `myCard` variable. Because we didn't tell our class to do anything different, this still results in output that looks like this:

```
Card@4aa298b7
```

## Methods

Capabilities are what a thing can do. A gun can shoot. A person can sleep. A transaction can transfer money between two bank accounts.

Programmers give classes capabilities by writing _methods_. Methods are chunks of code inside a class that can be run by "calling" them. Our `Main` class above has one method, `main`.

The `main` method is unique in Java. It must be written in the form:

```java
public static void main(String[] args) {
    // code that does something (a capability)
}
```

Every Java program has a `main` method. This method is what the Java Runtime executes first when you run your program. It's the entry point to your projects. 

The Code in methods is executed top to bottom. So, if you had ten lines of code in your main method, Java would first execute line 1, then 2, etc, until it reached line 3.

Our `Main` class has one capability - defined by the `main` method - the ability to print "Hello World" to the console.

Methods can be used to calculate values, apply logic, or, really, just about anything else. Typically they will interact with or modify an object's properties. 

Here is the basic syntax for a method:

```
public {data type} {method name}(){
	// method code
}
```

`public` is an example of an _access modifier_. An access modifier controls how other code interacts with the method. The `public` access modifier is the most permissive access modifier and allows any other code to execute this method. 

Methods have the ability to _return_ data to the code that executes it. The `{data type}` placeholder is used to indicate what type of data the method will return. This is like the data type for a variable. Methods are not required to return values. If a method doesn't return anything the `{data type}` placeholder would be replaced with `void`.

`{method name}` is a placeholder for a method's name. Method names must start with a letter (typically lower case) and can contain letters, numbers, and the underscore character, `_`. 

The parenthesis `()` following the method name indicate `arguments`. Arguments are data that can be provided to a method when it is executed. The basic syntax above doesn't declare any arguments, but you still need the parenthesis. 

Finally, the `{}` curly braces define the body of the method. When methods are executed, the code in their body is run, one line at a time, top to bottom.

All objects in Java are automatically given a number of methods. One of these is `toString()`. The `toString()` method is used to get a description of an instance of an object. By default, this is just the name of the class followed by a string of letters and numbers. This is what the `System.out.println()` method is using when it prints out our `Card`.

```
Card@4aa298b7
```

Developers can optionally provide their own implementation of `toString()`. Perhaps we want to specify our own description of a card? We could do so like this:

<iframe src='https://glot.io/snippets/egqcgo6tmb/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

Here we've declared the `toString()` method as being `public` (globally accessible) and indicated that it will return `String` data. In the body of the method we are using `+` addition operator to build a `String` that describes the current card. We use the `return` keyword to provide this `String` description back to whatever executes the method.

Now, if we run our main method we'll see output that looks like this:

> King of Spades

## Conditional logic

Most programs need to be able to make decisions and execute different code depending on circumstances. For example, stock trading software might be configured to watch a specific stock and purchase it automatically if it falls below a certain threshold. Alternatively, it might sell a stock if the price rises above a different threshold. This is called conditional logic.

The primary way that conditional logic is written in Java using `if`, `else if`, and `else` statements. Here is the basic syntax for an `if` statement:

```
if({conditional expression}){
	// The body of the if statement. 
}
```

The `if` keyword indicates that this is a conditional expression. The body of the `if` statement is only executed if the `{conditional expression}` evaluates to true. 

Here is a really simple conditional expression:

<iframe src='https://glot.io/snippets/egqcw1tnpn/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

This example uses `>`, the greater than operator. Java has a number of operators for comparing values:

* `>` - Greater than.
* `>=` - Greater than or equal to.
* `<` - Less than.
* `<=` - Less than or equal to.
* `==` - Is equal to. Note, this is different than `=`, the assignment operator.

Each of these operators compare the value on the left to the value on the right and returns true of false accordingly.

In english, the example above says, "If `x`, which is 99, is greater than `y`, which is 10, then output the text 'x us greater than y!'."

But, what if `x` isn't greater than `y`? This is where `else` statements can be handy. The syntax for `if`/`else` expression is this:

```
if({conditional expression}){
	// This body is run when the conditional expression is true
} else {
	// This body is run when the conditional expression is false
}
```

Let's update our example above to use `else`:

<iframe src='https://glot.io/snippets/egqcwhfa7a/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

This can be read in english like, "If `x`, which is 10, is greater than `y`, which is 99, then output the text 'x is greater than y!'. Otherwise, output 'x is not greater than y!'."

Lastly, if you have multiple conditions you want to test for you can use  `else if` expressions. The syntax for this is:

```
if({conditional expression}){
	// This body is run when the conditional expression is true
} else if({another conditional expression}) {
	// This body is run when the second conditional is true
} else if({yet another conditional expression}) {
	// This body is run when the third conditional is true
} else {
	// This body is run when none of the conditionals are true
}
```

This shows how you can string individual conditional statement together to make complex conditional statement. Java will _only_ execute the first statement that evaluates to true.

This type of conditional expression always starts with an `if` statement. This is optionally followed by as many `else if` statements as you want. The expression can optionally end with a single `else` statement. The `else` statement is only run when none of the conditionals evaluate to true.

## Putting it all together

We can put everything we've learned today together to create very complex and powerful software. You can combine different blocks of code in novel ways to solve specific problems. 

For example, let's say we want to give our `Card` class the ability to be flipped over. We could do this by writing a method that provides this capability. The method could use a conditional expression that checks the class' faceUp property and sets it to the opposite value.

<iframe src='https://glot.io/snippets/egqcycmnl3/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

The new `flip()` method uses a conditional expression to see if the card is face up. If it is, it sets the card to be face down. If not, it sets the card to be face up. The method's return type is `void` because the method doesn't return anything, it just changes the state of the object.

We can continue to build our Card class using these features. For example, maybe we would like our card's description to only show the suit and value when the card is face up. When the card is face down this should be hidden. 

With a small change to our main method too, we can demonstrate this feature working:

<iframe src='https://glot.io/snippets/egqczemq0h/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>

When run, this code will output:

> Ace of Diamonds
> - - -

The first line, "Ace of Diamonds", is printed because the card is face up. However, after printing that out we call the `flip()` method. This sets the card to be face down. As such, when we print the card next we only see '- - -'.

## Conclusion

In this lesson we learned some of the core foundational concepts behind Java.

You learned:

* Java is...
	* A programming language
	* A compiler
	* A runtime environment
* Java is Object Oriented
* Programmers model the real word using classes.
* How to write simple classes.
* What objects are and how they relate to classes.
* How to create new instances of objects.
* How to use variables to store data.
* What primitive datatypes are.
* Some basic Java operators.
* Properties are used to describe an object.
* Methods are used to give objects capabilities.
* Conditional logic is used when your application needs to make decisions.

These few tools form the foundation of Java. This lecture only scratches the surface of Java, but literally everything in Java builds off of these few constructs.

## Further learning

There are a many fantastic resources for learning Java. Some of my favorites are:

**Codeacademy** - Codeacademy is on online, interactive, code school. They have many topics available for many languages. Their Java curriculum is a nice gentle introduction. 

	https://www.codecademy.com/learn/learn-java

**Head First Java** - Head First Java is a really great, unintimidating, introduction to the Java programming language. It's an oldie, but still a very valuable introduction to the language.

	ISBN-13: 978-0596009205
	ISBN-10: 0596009208

**The Iron Yard** - The Iron Yard provides an immersive 12 week bootcamp-style coding classes. This is a fantastic way to learn a new skill and kick off a new career.

	http://theironyard.com

