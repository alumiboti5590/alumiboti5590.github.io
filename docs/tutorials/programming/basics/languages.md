---
sidebar_position: 1
---


# Introduction to Programming

How do computers know to open YouTube when you click [a link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)? How does an iPhone know to send a message when you hit _Send_?

Because someone, somewhere **programmed** the device to do that.

**Programming** is the process of writing a software program that is responsible for giving a machine, such as a computer or smartphone, _precise_ instructions on what it should do.

What can we tell a computer to do? Well, as you'll learn, we can have it do **a lot** of different things, but to start,
we can control a computer to do some math for us; just like a calculator! In fact, calculators are _programmed_ to solve
math for you!

- Adding 2 numbers
- Dividing something and finding the remainder
- Rounding off a number, etc

Programming involves taking really simple instructions - such as "add two numbers" - and combining them in different &amp; complex ways to build more complex tasks

- Calculating simple interest, given principal, rate and time
- Calculate how much water someone should be drinking based on their height and weight

The above 2 tasks require complex calculations with multiple steps. They cannot usually be expressed in simple instructions like adding 2 numbers, etc. This means we can write a program to solve them.

:::tip

Computer programs are similar to the math equations you do in algebra, trig, or calculus; **given some input (like age), solve an equation and return the answer/output**.

:::

Just like we humans can understand a few languages (English, Spanish, Mandarin, French, etc.), so is the case with computers. Computers understand instructions that are written in a specific syntactical form called a programming language.

## What is a Programming Language?

Just like we humans can understand a few languages (English, Spanish, Mandarin, French, etc.), so is the case with computers. Computers understand instructions that are written in a specific syntactical form called **a programming language**. A programming language provides a way for a programmer to express a task so that it could be understood and executed by a computer.

The following is an example of a program to find the area of a triangle in three different languages; Java, Python, and JavaScript. They all do the same thing, just in different languages. You may be able to infer some functionality from reading the code, but **please do not stress by not being able to understand it!** Just as you have to learn a foreign language before being able to read it, the same is true of programming languages.

<Tabs>
<TabItem value="java" label="Java">

```java title="Find the area of a triangle in Java"
class TriangleUtility {

  public static void main(String args[]) {
    // highlight-start:red
    int BASE = 5;
    int HEIGHT = 12;
    // highlight-end:red

    // highlight-start:green
    double answer = TriangleUtility.area(BASE, HEIGHT);
    System.out.println(answer);
    // highlight-end:green
  }

  // highlight-start:blue
  public static double area(int base, int height) {
    return .5 * base * height;
  }
  // highlight-end:blue
}
```

</TabItem>
<TabItem value="py" label="Python">

```py title="Find the area of a triangle in Python"
# highlight-start:red
BASE = 5
HEIGHT = 12
# highlight-end:red

# highlight-start:blue
def area(base, height):
  return .5 * base * height
# highlight-end:blue

# highlight-start:green
answer = area(BASE, HEIGHT)
print(answer)
# highlight-end:green
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js title="Find the area of a triangle in JavaScript"
// highlight-start:red
const BASE = 5;
const HEIGHT = 12;
// highlight-end:red

// highlight-start:blue
function area(base, height) {
  return .5 * base * height;
}
// highlight-end:blue

// highlight-start:green
const answer = area(base, height);
console.log(answer);
// highlight-end:green
```

</TabItem>
</Tabs>

Each example above contains some <HighlightReference color="red">**variable definitions** of the `BASE` and `HEIGHT`</HighlightReference> of the triangle, <HighlightReference color="blue">a **function** called `area` that represents a reusable block of code</HighlightReference>, and <HighlightReference color="green">two lines that compute the answer using the function and prints the result</HighlightReference> so we can see it.