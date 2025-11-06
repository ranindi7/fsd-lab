import employeeData from "../../jsonData/employees.json";
import type { Employee } from "../../types/employeeInterface";

export default function EmployeeData() {
    return(
        <main>
            <h1>Employee Directory</h1>

            <div>
                {employeeData.map((emps: Employee) => (
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
        </main>
    )
}