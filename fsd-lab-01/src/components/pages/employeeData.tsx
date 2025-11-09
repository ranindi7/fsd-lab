import { useState } from "react";
import employeeData from "../../jsonData/employees.json";
import type { Employee } from "../../types/employeeInterface";

export default function EmployeeData() {
    const[employeeInfo, setEmployeeInfo] = useState<Employee[]>(employeeData)

    const[newEmployeeName, setNewEmployeeName] = useState("");
    const[selectedDept, setSelectedDept] = useState("");
    const[nameError, setNameError] = useState("");
    const[deptError, setDeptError] = useState("");

    const handleAddEmployee = (e: React.FormEvent) => {
        e.preventDefault();

        if (newEmployeeName.trim().length < 3) {
            setNameError("Name must have at least 3 characters.");
            return;
        } else {
            setNameError("")
        }


        if (!selectedDept) {
            setDeptError("Please select a department.");
            return;
        } else {
            setDeptError("")
        }

        const updatedData = employeeInfo.map((dept) => {
            if (dept.department === selectedDept) {
                return {
                    ...dept,
                    employees: [...dept.employees, newEmployeeName.trim()]
                }
            } 
            return dept;
        });

        setEmployeeInfo(updatedData);
        setNewEmployeeName("");
        setSelectedDept("");
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
                            value={newEmployeeName}
                            onChange={(e) => {
                                setNewEmployeeName(e.target.value);
                                if (e.target.value.trim().length >= 3) setNameError("")
                            }}
                        />   
                        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                    </div>


                    <div>
                    <label>Department: </label>
                        <select
                            value={selectedDept}
                            onChange={(e) => {
                                setSelectedDept(e.target.value);
                                if (e.target.value) {
                                    setDeptError("")
                                }
                            }}
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