import React from "react";
import VariableEditor from "./VariableEditor";

export default function BooleanExample() {
    const [text, setText] = React.useState("false");
    
    return (
        <VariableEditor
            typeDeclaration="boolean" declarationValue={text} output={text}
            formLabel="Boolean"
            formField={(
                <select
                    style={{ width: '100%', maxWidth: "100%", height: "37px", fontSize: "1.1em" }}
                    value={text} onChange={e => setText(e.target.value)}
                >
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            )}
        />
    );
}