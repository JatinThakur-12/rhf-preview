import { useFormContext } from 'react-hook-form';

function ErrorFields() {
    const { formState } = useFormContext();
    const errorKeys = Object.keys(formState?.errors);
    return (
        <div className='typeContainer'>
            <div className='typeContainer__title'>Errors</div>
            {
                errorKeys?.length > 0 ? errorKeys?.map((key) =>
                    <div key={key} className='typeContainer__row' >
                        <div className='typeContainer__label'>
                            <span>{key}</span>
                            <span>:</span>
                        </div>
                        <div className='typeContainer__value'>
                            <span>{JSON.stringify(formState.errors[key]?.message)}</span>
                        </div>
                    </div>
                ) : <div className="typeContainer__row">No errors</div>

            }
        </div>
    )
}

export default ErrorFields