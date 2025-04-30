import { useFormContext } from 'react-hook-form';
import Title from './title';
import { useState } from 'react';

function TouchedFields() {
    const { formState } = useFormContext();
    const touchedFields = Object.keys(formState.touchedFields);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    return (
        <div className='typeContainer' >
            <Title
                title="Touched Fields"
                clickHandler={() => {
                    setIsDrawerOpen((prev) => !prev);
                }}
                open={isDrawerOpen}
            />
            <div className="typeContainer__row typeContainer__value">
                {touchedFields.length > 0 ? `[ ${touchedFields.join(", ")} ]` : "No Touched Fields"}
            </div>
        </div>
    )
}

export default TouchedFields