import { useFormContext } from "react-hook-form";

const RHFPreview = () => {
    const { watch, formState } = useFormContext();

    const values = watch();
    return <div>Running RHF Success</div>;
};

export default RHFPreview;
