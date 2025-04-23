import Heading from './components/heading';
import FormState from './components/form-state';
import FormValues from './components/form-values';
import ErrorFields from './components/error-fields';
import DirtyFields from './components/dirty-fields';
import TouchedFields from './components/touched-fields';
import './global.css';


const Preview = () => {
    return (
        <div className='mainContainerStyles'>
            <Heading />
            <FormState />
            <FormValues />
            <ErrorFields />
            <DirtyFields />
            <TouchedFields />
        </div>
    )
}

export default Preview