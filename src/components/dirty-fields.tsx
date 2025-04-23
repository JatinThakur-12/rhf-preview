import React from "react";
import { useFormContext } from "react-hook-form";

function DirtyFields() {
    const { formState } = useFormContext();
    const dirtyFields = Object.keys(formState.dirtyFields)

    return (
        <div className='typeContainer' >
            <div className='typeContainer__title'>Dirty Fields</div>
            <div className="typeContainer__row typeContainer__value">
                {dirtyFields.length > 0 ? `[ ${dirtyFields.join(", ")} ]` : "No Dirty Fields"}
            </div>
        </div>
    );
}

export default DirtyFields;
