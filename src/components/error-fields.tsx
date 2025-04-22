import React from 'react'
import { useFormContext } from 'react-hook-form';

function ErrorFields() {
    const { formState } = useFormContext();

    console.log('FormState Error', formState.errors);
    return (
        <div>
            <div>Errors</div>
            {
                Object.keys(formState.errors).map((key) =>
                    <div key={key} style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
                        <span>{key}</span>
                        <span>:</span>
                        <span>{JSON.stringify(formState.errors[key]?.message)}</span>
                    </div>
                )
            }
        </div>
    )
}

export default ErrorFields