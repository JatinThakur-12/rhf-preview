import { useFormContext } from 'react-hook-form';

const EXCLUDED_STATE = ['errors', 'validatingFields', 'touchedFields', 'dirtyFields', 'defaultValues'];
function FormState() {
    const { formState } = useFormContext();
    return (
        <>
            <div>FormState</div>
            {Object.getOwnPropertyNames(formState).sort().map((key) => {
                const typedKey = key as keyof typeof formState;
                if (EXCLUDED_STATE.includes(key)) {
                    return null;
                }
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