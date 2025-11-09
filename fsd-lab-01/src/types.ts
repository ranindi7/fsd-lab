export interface Employee {
    department: string;
    employees: string[];
}

export interface Organization {
    id: number;
    role: string;
    name: string;
    roleDescription: string;
}

export interface FieldsType {
    [key: string]: string;
}

export interface ErrorsType {
    [key: string]: string;
}