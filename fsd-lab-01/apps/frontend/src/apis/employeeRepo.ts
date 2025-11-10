import type { Employee } from "../types";
import { employeeData } from "./employeeMockRepo";

export function fetchEmployees(): Employee[] {
  return employeeData;
}

export function addEmployee(department: string, name: string): void {
    const dept = employeeData.find((d) => d.department === department);
    if (dept) {
        dept.employees.push(name);
  }
}



