import { useFormContext } from 'react-hook-form';

function FormValues() {
    const { watch } = useFormContext();
    const values = watch();
    return (
        <div className={"typeContainer"}>
            <div className={"typeContainer__title"}>Values</div>
            {Object.keys(values).map((key) => {
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