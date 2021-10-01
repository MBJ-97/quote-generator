import React from 'react';
import { useState } from 'react';

export default function Modal({onShowChange, shrLink}) {

    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        onShowChange(false);
    }

    const clickNdCopy = () => {
        var text = document.getElementById('textt').innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        setCopied(true);

        console.log('it clicked')
    }

    return ( 
        
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sharing is caring</h4>
                </div>
                <div className="modal-body">
                    <p className="paragraph" id="textt">{shrLink}</p>
                </div>
                <div className="modal-footer">
                    <button onClick ={handleClick} className="button">
                        
                        Close
                    </button>
                    <button onClick={clickNdCopy} className="copy-btn button">
                        {copied?("Copied!"):("Click'n'Copy")}
                    </button>
                </div>
            </div>
        </div>
    )
}
