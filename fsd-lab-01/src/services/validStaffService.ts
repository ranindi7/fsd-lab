import type { FieldsType, ErrorsType } from "../types";

export function validStaffService(fields: FieldsType): ErrorsType {
    const errors: ErrorsType = {};

    if (!fields.newEmployeeName || !fields.newEmployeeName.trim()) {
        errors.newEmployeeName = "Name is required.";
    }

    if (!fields.selectedDept || !fields.selectedDept.trim()) {
        errors.selectedDept = "Department is required.";
    }

    if (fields.newEmployeeName && fields.newEmployeeName.trim().length < 3) {
        errors.newEmployeeName = "Name must have at least 3 characters.";
    }

    return errors
}