import React from 'react';

export default function Modal({onShowChange, shrLink}) {

    const handleClick = () => {
        onShowChange(false);
    }
    return ( 
        
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sharing is caring</h4>
                </div>
                <div className="modal-body">
                    {shrLink}
                </div>
                <div className="modal-footer">
                    <button onClick ={handleClick} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
