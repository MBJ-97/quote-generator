import Modal from "./Modal";
import { useState } from "react";

export default function ShareButton({advice}) {
    const [show, setShow] = useState(false);
    const [shareLink, setShareLink] = useState('');

    const share = () => {
        var l = advice;
        var h = l.split(' ').join('+');
        let link = `quote-gen-m.netlify.app/${h}`;
        
        console.log(link) // construct the link.
        setShow(true);
        setShareLink(link);
    }

    return (
        <div>
            <button className="share-btn" onClick={share}>Share this quote</button>
            {/* Need to set and display (on arrive a capter the current state !!) the path*/}
            { show && (<Modal show={show} onShowChange={setShow} shrLink={shareLink} />) }
            
        </div>
    )
}
