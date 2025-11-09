import { useState } from "react";
import type { ChangeEvent } from "react";
import type { FieldsType } from "../types";

export function useEntryForm(initialState: FieldsType) {
  const [fields, setFields] = useState<FieldsType>(initialState);

  const handleChange = (
    e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value}))
  };

  return { fields, setFields, handleChange }
}
