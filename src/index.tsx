import { useState } from "react";
import { createPortal } from "react-dom";
import Preview from "./preview";

const RHFPreview = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

    return (
        <>
            {createPortal(
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 9999 }}>
                    <button onClick={() => { setIsDrawerOpen(prev => !prev) }}>
                        Open
                    </button>
                </div >,
                document.body
            )
            }
            {isDrawerOpen && createPortal(<Preview />, document.body)}
        </>
    );
};

export default RHFPreview;
