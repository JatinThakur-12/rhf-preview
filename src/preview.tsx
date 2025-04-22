import Heading from './components/heading';
import FormState from './components/form-state';
import FormValues from './components/form-values';
import ErrorFields from './components/error-fields';

const Preview = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '290px',
            height: 'calc(100dvh - 2px)',
            border: '1px solid black',
            padding: '6px 8px',
            zIndex: '4000',
            boxSizing: 'border-box',
            overflowY: 'scroll',
        }}>
            <Heading />
            <FormState />
            <FormValues />
            <ErrorFields />
        </div>
    )
}

export default Preview