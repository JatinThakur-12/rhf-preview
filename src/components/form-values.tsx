import { useFormContext } from 'react-hook-form';

function FormValues() {
    const { watch } = useFormContext();
    const values = watch();
    return (
        <div>
            <div>Values</div>
            {Object.keys(values).map((key) => {
                return (
                    <div key={key} style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
                        <span>{JSON.stringify(key)}</span>
                        <span>:</span>
                        <span>{JSON.stringify(values[key])}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default FormValues