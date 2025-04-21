import { useFormContext } from 'react-hook-form';

function FormState() {
    const { formState } = useFormContext();
    return (
        <>
            <div>FormState</div>
            {Object.getOwnPropertyNames(formState).map((key) => {
                const typedKey = key as keyof typeof formState;
                return (<div key={key} style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
                    <span>{JSON.stringify(key)}</span>
                    <span>:</span>
                    <span>{JSON.stringify(formState[`${typedKey}`])}</span>
                </div>)
            })
            }
        </>
    )
}

export default FormState