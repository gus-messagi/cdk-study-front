import React from 'react';
import { Input } from 'antd';
import './TextEditor.sass';

const { TextArea } = Input;

function TextEditor() {
    return (
        <TextArea 
            className="text-editor"
        />
    )
}

export default TextEditor;