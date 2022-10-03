---
sidebar_position: 1
---

# Introduction to Git Concepts

When developing software, it is essential to share the code we have written with other team members.
If two individuals are both contributing to the same project, there needs to be some way to share the
changes between each other effectively without breaking the project.

Git is the tool that allows us to effectively share code between multiple developers. The technical term for this is that Git is a **version control system**, and most computers have a command called `git` that let's people use this system.

## Repository as a Timeline

When using `git`, usually a project has an associated **`git` repository**. A **repository** acts like a timeline
for the code in the project; it keeps track of what different files and their contents look like over time, so that
a developer can look back and see what the project looked like at the beginning, 1 month ago, 1 year ago, or today.

These repository timelines are what make a version control system such as `git` so helpful; it provides a full history
of a project, where **each timeline entry has the who, what, and when associated with it.**

![Timeline example](https://docs.google.com/drawings/d/e/2PACX-1vQRyd-lgL7wcVd9CQgA_U_cl3EcopZkPaFC7OOPPyn_izCeluuW5PlsRHeSDVR4827HmBGOuD_TAFcG/pub?w=870&h=310)

These "_timeline entries_" - marked by the blue circles in the diagram above - are called **commits**.

## A Git Commit

A `git` commit is a _snapshot_ of the project at a given point in time that saves the content of the project, the time the snapshot was created, and _who_ created the snapshot, and a message by the author summarizing what changed. This snapshot acts as the timeline entry listed above, and the information for the first commit listed above might contain the following:

- **Date** - January 1st, 2022
- **Author** - Dan (they created the commit/snapshot/timeline entry)
- **Content** - The `hello.txt` file and its contents
- **Message** - `added the 'hello.txt' file to say 'Hello, world!'`

These attributes get attached to the new commit and they make it easier to build a full timeline view that makes up the repository's history, as discussed &amp; shown above.

:::note

**Commits** do not get created automatically, and they can contain multiple changes at once. They are just arbituary snapshots of the project as the developers see fit to create them. A commit might have just one file change, or 100.

:::

Most importantly, each commit has a **U**niversally **U**nique **ID**entifier (UUID) associated with it that lets us reference each commit in the repository. This UUID (also known as a commit `sha`) is generated automatically by the `git` tool when a developer creates a commit. 

A commit ID SHA probably looks like a random string of numbers and letters, either 7 or 40 characters, like `7e39b52` or `7e39b52f25a1b15053dbc631286f6cb49903e19e`. These examples both represent the same commit (or timeline entry), because the IDs generated are _so_ random that even the first 7 characters are usually "_good enough_".

:::info

The example SHA ID `7e39b52` above actually represents [a commit on the website's repository](https://github.com/alumiboti5590/alumiboti5590.github.io/tree/7e39b52f25a1b15053dbc631286f6cb49903e19e) where you can see what the code looked like at this point in time!

It was created on September 28<sup>th</sup>, 2022.

:::

The following is a diagram of what might be included in the second commit (marked as being from January 5<sup>th</sup>) of the above diagram.

![Example commit details](https://docs.google.com/drawings/d/e/2PACX-1vSFzMKbujS0Iob0HfGV_QinMGWVS5SJXW5hJ-dWLl0XJKYB7s--1HBrt8fiuMIMutfpXX0_I7nglq-_/pub?w=570&h=531)

Taking a look at the diagram, we see

- The commit snapshot was created by `bob@sjci.com` on January 5<sup>th</sup>
- The commit message included says: `Added the 'bye.txt' file`
- The file contents in the commit snapshot include the newly added `bye.txt`, but _also_ the `hello.txt` from the previous commit timeline entry.

**Each commit contains the information from the previous (_parent_) commit and just modifies the timeline to match what should be in the new commit snapshot.**