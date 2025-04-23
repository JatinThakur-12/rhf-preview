import React from 'react'
import { useFormContext } from 'react-hook-form';

function TouchedFields() {
    const { formState } = useFormContext();
    const touchedFields = Object.keys(formState.touchedFields);

    return (
        <div className='typeContainer' >
            <div className='typeContainer__title'>Touched Fields</div>
            <div className="typeContainer__row typeContainer__value">
                {touchedFields.length > 0 ? `[ ${touchedFields.join(", ")} ]` : "No Touched Fields"}
            </div>
        </div>
    )
}

export default TouchedFields