import { useState } from "react";
import { createPortal } from "react-dom";
import { useFormContext } from "react-hook-form";
import Preview from "./preview";

const RHFPreview = () => {
    const { watch, formState } = useFormContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const values = watch();
    return (
        <>
            <div>Running RHF check</div>
            {createPortal(
                <div style={{ position: 'absolute', bottom: '0', left: '0' }}><button onClick={() => { setIsDrawerOpen(prev => !prev) }}>
                    Open Drawer
                </button>
                </div >,
                document.body
            )
            }
            {/* {createPortal("Hi Jatin", document.body)} */}
            {isDrawerOpen && createPortal(<Preview />, document.body)}
        </>
    );
};

export default RHFPreview;
