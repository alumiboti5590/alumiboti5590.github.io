import React from "react";
import VariableEditor from "./VariableEditor";

const MAX_VAL = 2147483647;
const MIN_VAL = -2147483648;

export default function IntegerExample() {
    const [text, setText] = React.useState("5");
    const preventNonNumberPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    const setTextToSafeNumber = (value) => {
        const integer = parseInt(value);
        const boundedInteger = Math.min(MAX_VAL, Math.max(MIN_VAL, integer));
        setText(boundedInteger.toString());
    }
    
    return (
        <VariableEditor
            typeDeclaration="int" declarationValue={text} output={text}
            formLabel="Integer"
            formField={(
                <input
                    className='input' style={{ width: '100%', maxWidth: "100%" }}
                    value={text} onChange={e => setTextToSafeNumber(e.target.value)} type="number"
                    onKeyPress={preventNonNumberPress}
                />
            )}
        />
    );
}