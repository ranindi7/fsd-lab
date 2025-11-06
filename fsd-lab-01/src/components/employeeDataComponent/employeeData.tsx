import employeeData from "../../employeeData/employees.json";
import type { Employee } from "../../types/employeeInterface";

export default function EmployeeData() {
    return(
        <main>
            <h1>Employee Directory</h1>

            <div>
                {employeeData.map((emp: Employee) => (
                <div className="employeesDisplay">
                    <h2>{emp.department}</h2>
                    <ul>
                        {emp.employees.map((emp) => (
                            <li>{emp}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </main>
    )
}