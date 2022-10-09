---
sidebar_position: 2
---

# Basic Types & Variables

```mdx-code-block
import PrintAnything from "./components/hello-world/PrintAnything"
import BooleanExample from "./components/variables/BooleanExample"
import IntegerExample from "./components/variables/IntegerExample"
import StringExample from "./components/variables/StringExample"
```

Let's look back at the _Hello World_ example from the last section, specifically the version where we can change what we want the program to end up printing out.

```mdx-code-block
<PrintAnything />
```

---

We can keep changing the text of our _Hello World_ program, but its kind of tedious to change it every time we want to print something different. It would be better to prompt (ask) the user for what the program should output. We can do that by using some Java tools and taking advantage of Java variables!

## Variables

In programming, a variable is a value that can change, be set, and be referenced by name. Variables allow programs to store values temporarily while running, and reference them later to reduce how much code needs to be written and to make programs easier to read.

### Defining Variables

In most cases, defining variables in Java requires the following syntax, or structure:

```
Type name = value;
```

#### Variable Names

The `name` of a variable is a human-readable, friendly name that let's the programmer reference the associated value later in the program. Variables **must** start with a letter (`a-z` or `A-Z`), dollar sign (`$`), or underscore (`_`) followed by any _alphanumeric_ (letters of digits).

:::info Kebab Casing

When working with Java variable names, it is standard convention to use something known as `kebabCasing`. For variables, the naming convention is to always start with a lowercase letter and then capitalize the first letter of every subsequent word. The following are examples of well-named variables.

```
fullName

streetAddress

exampleBigNumber
```

:::

:::tip Variable Naming

It is best to name variables appropriately so you and other readers of the code know what it represents. If a variable represents an age, call it `age` instead of `a`. Try to be descriptive, yet concise.

:::

#### Variable Types

The `Type` of a variable determines what we can do with it. For example, we could have a variable that represents a number, like `age`, and by defining it as a number, we know that it can be added, subtracted, divided, and more. If we have a `String` text like in our program above, we can't divide something from that because it doesn't make sense!

#### Variable Values

The last part of defining a variable is to set it's value. This can be done by placing an equals sign `=` and then the desired value for the variable. **The value you assign needs to match the `Type` of the variable when you declare it**, meaning that if you define `age` as being a number, it must _always_ be assigned a number.[^1]

## Basic Variable Types

Java comes with a few _primitive_ (basic) variable types that we can take advantage of. Actually, our examples above have already been using an existing type for our _Hello World_ example(s); the `String` that represents text!

### String

`String` variables hold text values exactly[^2] as defined between two double quotation marks.

- What is your name? `"The Alumiboti"`
- What month were you born? `"September"`

```mdx-code-block
<StringExample />
```

### Integer

Integer variables are used to keep track of whole numbers in a program, both positive and negative.

- How old is the team? `7`
- What year was the team founded? `2015`
- What is the distance between LA and NYC? `2445`

:::caution Max Integer Value

The biggest number an `int`eger value can be is `2,147,483,647` and the smallest is `-2,147,483,648`. Anything outside of this range needs to use another number variable type that isn't `int`.

:::

```mdx-code-block
<IntegerExample />
```

### Boolean

**Boolean**s are variable that represent either _True_ or _False_. The are useful for situations where a program needs to know if a certain condition is true or not:

- Are you 16 years old? **No** (`false`)
- Is the light in the kitchen on? **Yes** (`true`)

:::tip Boolean Logic

Booleans can also be combined together, just like the truth tables you learned in geometry! This will be discussed more later on.

- Are you over 16 and do you have your drivers license? **Yes** (`true` and `true` = `true`)
- Are you free saturday and do you want to go to the mall? **No** (`false` and `true` = `false`)

:::

```mdx-code-block
<BooleanExample />
```

---

## Null Means Nothing

There's one important extra little quirk about variables to introduce early; the idea of the `null` value. **You can assign a variable's value to `null` and it is like saying there is no value set**, or like it doesn't exist yet! You may see it throughout code, and it's important to call out now so you are aware of what it means.

```java
String myName = null;  // set to nothing

// Find out the name of the user somewhere and set it
myName = "Alumiboti";
```

## Asking for Input

With our _Hello World_ program and some basic knowledge about variables, we can:

1. Add in some Java magic 🪄 to ask the user what they would like to say
2. Save their answer to a `String` variable (since the input will be text)
3. Output their answer using our existing `System.out.println` tool

The following code allows us to do all of that, and it is described just under the example.

```java title="Main.java" showLineNumbers
// highlight-start:green
import java.util.Scanner;
// highlight-end:green

class Main {
  public static void main(String[] args) {
    // highlight-start:green
    // This bit of magic allows us to read input from the user
    Scanner scan = new Scanner(System.in);
    // highlight-end:green

    // highlight-start:blue
    // Ask the user for input
    System.out.println("Type Something: "); // Prompt the user to type something
    String answer = scan.nextLine();        // wait for Enter key & save text to variable
    System.out.println();                   // Print an empty line to create space
    // highlight-end:blue

    // highlight-start:red
    // Print the user's answer
    System.out.println(answer);
    // highlight-end:red
  }
}
```

There are <HighlightReference color="green">somes magic lines</HighlightReference> added that allow our program to read what the user inputs back to the program. There is a tool in Java called the `Scanner` that reads user input, and it allows us to easier build the program. Notice how line 6 _sorta_ looks like a variable declaration; if you notice that, then that is good enough to understand for now!

In <HighlightReference color="blue">the next block</HighlightReference>, the program then prints out `Type Something:` to inform the user that the program will be expecting them to type something. If you run the program, you should see this. The following line then includes some magic from the `Scanner` mentioned above; `scan.nextLine()` waits for the user to type something and press the _Enter_ key.

When the user presses the _Enter_ key, the text the user typed is saved to the newly declared `answer` variable that is a `String` type (because again, its just text!).

Finally, <HighlightReference color="red">the last line</HighlightReference> prints the `answer` that the user typed in the same exact fashion we've been doing above when describing each of the variable types.

:::tip

While it's not critical to understand _everything_ that is going on in the code example above - especially the `Scanner` stuff - it is important to understand that we are creating an `answer` variable of type `String` from the user's input, and we are printing it out.

Try to walk through the code line-by-line a few times to understand what is happening to the best of your abilities.

:::

[^1]: Variable values must be set to a matching type or be set to `null`.
[^2]: The only strings show something different from what is in quotes is when [an escape character (`\`)](https://www.javatpoint.com/java-escape-characters) is being used.