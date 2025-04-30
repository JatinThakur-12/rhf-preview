import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Title from './title';

function FormValues() {
    const { watch } = useFormContext();
    const values = watch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    return (
        <div className={"typeContainer"}>
            <Title
                title="Values"
                clickHandler={() => {
                    setIsDrawerOpen((prev) => !prev);
                }}
                open={isDrawerOpen}
            />
            {isDrawerOpen && Object.keys(values).map((key) => {
                return (
                    <div key={key} className='typeContainer__row' >
                        <div className='typeContainer__label'>
                            <span>{key}</span>
                            <span>:</span>
                        </div>
                        <div className='typeContainer__value'>
                            <span>{JSON.stringify(values[key])}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FormValues