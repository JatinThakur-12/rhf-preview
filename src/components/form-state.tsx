import { useFormContext } from "react-hook-form";
import { ArrowDown, ArrowUp } from "../assets/icons/arrow";
import { useState } from "react";
import Title from "./title";

const EXCLUDED_STATE = [
    "errors",
    "validatingFields",
    "touchedFields",
    "dirtyFields",
    "defaultValues",
    "values",
];
function FormState() {
    const { formState } = useFormContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    return (
        <div className="typeContainer">
            <Title
                title="Form State"
                clickHandler={() => {
                    setIsDrawerOpen((prev) => !prev);
                }}
                open={isDrawerOpen}
            />
            {isDrawerOpen &&
                Object.getOwnPropertyNames(formState)
                    .sort()
                    .map((key) => {
                        let typedKey = key as keyof typeof formState;
                        typedKey === ("name" as keyof typeof formState)
                            ? "lastModified"
                            : typedKey;

                        if (EXCLUDED_STATE.includes(key)) {
                            return null;
                        }

                        return (
                            <div key={typedKey} className="typeContainer__row">
                                <div className="typeContainer__label">
                                    <span>{typedKey}</span>
                                    <span>:</span>
                                </div>
                                <div className="typeContainer__value">
                                    <span>
                                        {JSON.stringify(
                                            formState[`${typedKey}`]
                                        )}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
        </div>
    );
}

export default FormState;
