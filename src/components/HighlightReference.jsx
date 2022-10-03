import React from 'react';

export default function HighlightReference({ color, children }) {
    return (
        <span className={`code-highlight-reference code-highlight-${color}`}>{children}</span>
    );
}