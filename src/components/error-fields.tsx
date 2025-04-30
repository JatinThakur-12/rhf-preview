import { useFormContext } from 'react-hook-form';
import Title from './title';
import { useState } from 'react';

function ErrorFields() {
    const { formState } = useFormContext();
    const errorKeys = Object.keys(formState?.errors);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    return (
        <div className='typeContainer'>
            <Title
                title="Errors"
                clickHandler={() => {
                    setIsDrawerOpen((prev) => !prev);
                }}
                open={isDrawerOpen}
            />
            {
                isDrawerOpen && (errorKeys?.length > 0 ? errorKeys?.map((key) =>
                    <div key={key} className='typeContainer__row' >
                        <div className='typeContainer__label'>
                            <span>{key}</span>
                            <span>:</span>
                        </div>
                        <div className='typeContainer__value'>
                            <span>{JSON.stringify(formState.errors[key]?.message)}</span>
                        </div>
                    </div>
                ) : <div className="typeContainer__row">No errors</div>)
            }
        </div>
    )
}

export default ErrorFields