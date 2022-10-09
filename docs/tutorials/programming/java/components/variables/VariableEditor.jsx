import CodeBlock from '@theme/CodeBlock';
import React from "react";


export default function VariableEditor({ formLabel, formField, typeDeclaration, declarationValue, output }) {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1em" }}>
                <label style={{ minWidth: '4em', marginRight: ".5em" }}>{formLabel}:</label>
                {formField}
            </div>
            <CodeBlock language="java" title="Main.java">
                {`class Main {
  public static void main(String args[]) {
    // highlight-start:green
    ${typeDeclaration} value = ${declarationValue};
    // highlight-end:green
    // highlight-start:red
    System.out.println(value);
    // highlight-end:red
  }
}`}
            </CodeBlock>
            <CodeBlock language='console' title={`Program Output${!output ? " (no output)" : ""}`}>{output}</CodeBlock>
    </div>
    );
}