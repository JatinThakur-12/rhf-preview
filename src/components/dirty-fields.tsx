import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Title from "./title";

function DirtyFields() {
    const { formState } = useFormContext();
    const dirtyFields = Object.keys(formState.dirtyFields)
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    return (
        <div className='typeContainer' >
            <Title
                title="Dirty Fields"
                clickHandler={() => {
                    setIsDrawerOpen((prev: boolean) => !prev);
                }}
                open={isDrawerOpen}
            />
            <div className="typeContainer__row typeContainer__value">
                {dirtyFields.length > 0 ? `[ ${dirtyFields.join(", ")} ]` : "No Dirty Fields"}
            </div>
        </div>
    );
}

export default DirtyFields;
