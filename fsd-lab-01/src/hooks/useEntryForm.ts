import { useState } from "react";
import type { ChangeEvent } from "react";
import type { ErrorsType, FieldsType } from "../types";
import { validStaffService } from "../services/validStaffService";

export function useEntryForm(initialState: FieldsType) {
    const [fields, setFields] = useState<FieldsType>(initialState);
    const [errors, setErrors]= useState<ErrorsType>({})

    const handleChange = (
        e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value}))
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const validate = (): boolean => {
        const newErrors = validStaffService(fields);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    return { fields, setFields, handleChange, errors, validate }
}
