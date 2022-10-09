---
sidebar_position: 1
---

# Introduction to Java

The Alumiboti, just like many other FRC teams, program their robot in a [programming language](../basics/languages) called **Java**. Java is an object-oriented language (OOP), that we will learn about later.

## "Hello World" Program

When learning a new programming language, it is customary to start by having the computer print `Hello World`.

:::tip

**Don't be scared away if you don't understand** most things in the example, that's perfectly normal since this is the very first lesson. Future sections will go over the different parts of the Java programming language and it will start to make more sense.

:::

```java title="Main.java" showLineNumbers
class Main {
  // highlight-start:blue
  public static void main(String[] args) {
    // highlight-start:red
    System.out.println("Hello world!");
    // highlight-end:red
  }
  // highlight-end:blue
}
```

```console title="Program Output"
Hello world!
```

### Public Static What?!

This is as simple of a Java program as they come, and already it looks daunting. The way Java was created, it needs to know _where_ your code actually starts. Once you start developing bigger and more complex programs, Java would have no idea where to start when you hit the _Run_ button, right?

Actually, Java looks for <HighlightReference color="blue">the `public static void main(String[] args) {` line</HighlightReference> to know where to start, and every Java program needs to be inside what is called a `class`, which will be taught later.

For now, its best to look at our Java programs through two lenses:

1. What do we need to have so our program can actually run?
   - i.e. What do we _need_ to have?
2. What do we actually want our program to do?
   - i.e. What do we _want_ to do?

And with those two questions, we can break down our program in each lense to look like the following:

<Tabs>
<TabItem value="needs" label="What we Need">

```java
// highlight-start:green
class Main {
  public static void main(String args[]) {
// highlight-end:green
    System.out.println("Hello world!");
    // ...whatever else to run goes here...
// highlight-start:green
  }
}
// highlight-end:green
```

</TabItem>
<TabItem value="want" label="What we Want">

```java
class Main {
  public static void main(String args[]) {
    // highlight-start:red
    System.out.println("Hello world!");
    // ...whatever else to run goes here...
    // highlight-end:red
  }
}
```

</TabItem>
</Tabs>

For the first few lessons, please try to not think too heavy on <HighlightReference color="green">the parts that are needed</HighlightReference>, accept that the structure needs to be the way it is, and instead, just try to focus on <HighlightReference color="red">the code we will be changing and trying to run</HighlightReference>.

### System.out.println

The last bit of code that we need to understand in the _Hello World_ example is the `System.out.println(...)` bit.

### A More Personal Hello

Let's try our first code change to the _Hello World_ example above. Let's have the program say hello to you, personally! Type your name in the input box below to see how the code would change to print out your name instead of `World`!

```mdx-code-block
import PersonalHelloWorld from "./components/hello-world/PersonalHelloWorld"

<PersonalHelloWorld />
```

## Printing Anything

By changing what is in the quotation marks (`"`) above, we can change the program to say whatever we want to say! `System.out.println` is a **function** - similar to a function or formula in math - that will print out whatever is provided inside the parameters.

In our `Hello world` examples, we are passing what is known as a `String`, which is any text surrounded by double quotation marks. Any characters can be put inside a String, and it will be considered a single String, just like a message!

```mdx-code-block
import PrintAnything from "./components/hello-world/PrintAnything"

<PrintAnything />
```

:::tip One Step Further...

What happens if you try to add a quotation mark (`"`) inside the string? 🔎

**Why?** Since strings have to start and end with a quotation mark, if we just allowed them in our output _as is_, then the computer wouldn't know what what quotation marks we wanted to include and where the string should actually end! Computers are dumb, so in these cases where a character - such as `"` - would "break" the string, it needs to start with a blackslash `\` character to tell the computer to view it as any other normal character. This is called an **escape character**.

:::

Congrats! 🎉 You made a small change to the code, so **you are officially a programmer!**

## Comments

While these tutorials will try to <HighlightReference color="blue">highlight</HighlightReference> the important parts, many following code examples will also include **comments**.

Comments are extra lines in code that are ignored by the program when it is running. It's useful to give extra context or information around a piece of code, remove a block of code to prevent it from running, or [to make cool artwork in your code](https://gist.github.com/paulirish/292907)!

The codeblock below showcases both ways to make comments; <HighlightReference color="blue">multi-line</HighlightReference> and <HighlightReference color="green">single-line</HighlightReference> comments.

- <HighlightReference color="blue">Multi-line comments</HighlightReference> start with <code>/*</code> and end with <code>*/</code>. Anything between these two blocks is considered a part of the comment and will be skipped by the program
- <HighlightReference color="green">Single-line</HighlightReference> comments start with <code>// </code> and have their text to the right. Any text to the right of these slashes are considered part of the comment and will be skipped by the program

```java title="Main.java with comments"
// highlight-start:blue
/*
 * This is our very first program, and I am using this top level comment to describe what it
 * does over multiple lines to really explain all of the cool stuff its going to do, like
 * print `Hello world!` to your computer screen!
 *
 */
 // highlight-end:blue
class Main {
  // highlight-start:blue
  /*
   * This is where the program will actually start running, even if you don't
   * quite understand why yet 🤔
   */
  // highlight-end:blue
  public static void main(String args[]) {
    System.out.println("Hello world!");
    // highlight-start:green
    // Anything starting with `//` is a single-line comment, like this or the one below!
    // ...whatever else to run goes here...
    // highlight-end:green
  }
}
```