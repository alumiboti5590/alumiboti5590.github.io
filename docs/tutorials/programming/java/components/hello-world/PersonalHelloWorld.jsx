import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import React from "react";

export default function PersonalHelloWorld() {
    const [name, setName] = React.useState("Alumiboti member");
    const greeting = `${name ? 'Hello ' + name : 'Hello'}!`;
    return (
        <div style={{ width: "100%" }}>
            <Admonition title="JavaScript Required" type="caution">
                You will need to have JavaScript enabled to run the following (and many other) examples.
            </Admonition>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1em" }}>
                <label style={{ marginRight: ".5em" }}>Your Name:</label>
                <input
                    className='input' style={{ width: '300px', maxWidth: "100%" }}
                    value={name} onChange={e => setName(e.target.value)}
                />
            </div>
            <CodeBlock language="java" title="Main.java">
                {`class Main {
  public static void main(String args[]) {
    // highlight-start:red
    System.out.println("${greeting}");
    // highlight-end:red
  }
}`}
            </CodeBlock>
            <CodeBlock language='console' title="Program Output">{greeting}</CodeBlock>
    </div>
    );
}