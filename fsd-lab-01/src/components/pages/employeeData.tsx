import { useState } from "react";
import employeeData from "../../jsonData/employees.json";
import type { Employee } from "../../types";
import { useEntryForm } from "../../hooks/useEntryForm";

export default function EmployeeData() {
    const[employeeInfo, setEmployeeInfo] = useState<Employee[]>(employeeData)

    const { fields, setFields, handleChange } = useEntryForm({
        newEmployeeName: "",
        selectedDept: "",
    });
    const[nameError, setNameError] = useState("");
    const[deptError, setDeptError] = useState("");

    const handleAddEmployee = (e: React.FormEvent) => {
        e.preventDefault();

        if (fields.newEmployeeName.trim().length < 3) {
            setNameError("Name must have at least 3 characters.");
            return;
        } else {
            setNameError("")
        }


        if (!fields.selectedDept) {
            setDeptError("Please select a department.");
            return;
        } else {
            setDeptError("")
        }

        const updatedData = employeeInfo.map((dept) => {
            if (dept.department === fields.selectedDept) {
                return {
                    ...dept,
                    employees: [...dept.employees, fields.newEmployeeName .trim()]
                }
            } 
            return dept;
        });

        setEmployeeInfo(updatedData);
        setFields({ newEmployeeName: "", selectedDept: "" });
    }

    return(
        <main>
            <h1>Employee Directory</h1>

            <div>
                {employeeInfo.map((emps: Employee) => (
                <div className="employeesDisplay">
                    <h2>{emps.department}</h2>
                    <ul>
                        {emps.employees.map((emp) => (
                            <li>{emp}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>

            <div>
                <form onSubmit={handleAddEmployee}>
                    <h3>Add New Employee</h3>

                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="newEmployeeName"
                            value={fields.newEmployeeName}
                            onChange={handleChange}
                        />   
                        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                    </div>


                    <div>
                    <label>Department: </label>
                        <select
                            value={fields.selectedDept}
                            name="selectedDept"
                            onChange={handleChange}
                        >
                            <option value="">Select Department</option>
                            {employeeData.map((dept) => (
                            <option key={dept.department} value={dept.department}>
                                {dept.department}
                            </option>
                            ))}
                        </select>
                        {deptError && <p style={{ color: "red" }}>{deptError}</p>}
                    </div>

                    <button type="submit">Add Employee</button>
                </form>
            </div>
        </main>
    )
}