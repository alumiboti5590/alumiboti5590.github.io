import React from "react";
import VariableEditor from "./VariableEditor";

export default function StringExample() {
    const [text, setText] = React.useState("Hello world");
    const escapedText = text.replace(/"/g, '\\"');
    const displayVariable = `"${escapedText}"`;
    
    return (
        <VariableEditor
            typeDeclaration="String" declarationValue={displayVariable} output={text}
            formLabel="Text"
            formField={(
                <input
                    className='input' style={{ width: '100%', maxWidth: "100%" }}
                    value={text} onChange={e => setText(e.target.value)} type="text"
                />
            )}
        />
    );
}