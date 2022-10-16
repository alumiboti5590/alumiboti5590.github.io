import React from "react";

export const features = [
  {
    title: "Discover",
    description: (
      <>
        Students will <strong>discover</strong> new interests, ideas, and
        solutions to difficult problems as members of the Alumiboti.{" "}
        <a href="https://www.firstinspires.org/robotics/frc">FIRST</a> Robotics
        is constantly pushing us to find new perspectives and to think outside
        the box.
      </>
    ),
  },
  {
    title: "Learn",
    description: (
      <>
        Once students develop ideas, they will <strong>learn</strong> how to
        implement them effectively and safely. The Alumiboti's{" "}
        <a href="https://www.sjci.com/apps/pages/innovationcenter">
          mechanical workshop, programming workstations, and design studios
        </a>{" "}
        allow for students to learn new skills to solve problems.
      </>
    ),
  },
  {
    title: "Apply",
    description: (
      <>
        Students will have the opportunity to show off what they've learned and
        applied at regional competitions, featuring other schools &amp; teams of
        their peers. Students involved with FIRST find new opportunities,{" "}
        <a href="https://www.firstinspires.org/community/scholarships/scholarships-faq">
          new scholarships
        </a>
        , and new ways to have fun!
      </>
    ),
  },
];

export const ExampleRobotCode = `
public boolean maintainPosition(double speed, double tolerance) {
  double currentHeight = encoder.getDistance();
  if (Library.withinTolerance(currentHeight, this.desiredHeight, tolerance)) {
    this.stabilize();
    return true;
  }
		
  if (currentHeight < desiredHeight) {
    this.setSpeed(speed);
  } else {
    this.setSpeed(-.2);
  }

  return false;
}`;
