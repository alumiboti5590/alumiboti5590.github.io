import CodeBlock from '@theme/CodeBlock';
import React from "react";

export default function PrintAnything() {
    const [text, setText] = React.useState("Hello world");
    const escapedText = text.replace(/"/g, '\\"');
    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1em" }}>
                <label style={{ minWidth: '3em', marginRight: ".5em" }}>Text:</label>
                <input
                    className='input' style={{ width: '100%', maxWidth: "100%" }}
                    value={text} onChange={e => setText(e.target.value)}
                />
            </div>
            <CodeBlock language="java" title="Main.java">
                {`class Main {
  public static void main(String args[]) {
    // highlight-start:red
    System.out.println("${escapedText}");
    // highlight-end:red
  }
}`}
            </CodeBlock>
            <CodeBlock language='console' title={`Program Output${!text ? " (no output)" : ""}`}>{text}</CodeBlock>
    </div>
    );
}