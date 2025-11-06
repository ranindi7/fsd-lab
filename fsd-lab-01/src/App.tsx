import { Routes, Route } from "react-router-dom";

import './App.css'
import EmployeeData from './components/pages/employeeData'
import { Layout } from "./components/layout/Layout";
import { OrganizationData } from "./components/pages/organizationData";
import organizationJsonData from "./jsonData/organization.json";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmployeeData />} />
        <Route path="employees" element={<EmployeeData />} />
        <Route path="organization" element={<OrganizationData rolesList={organizationJsonData} />} />
      </Route>
    </Routes>
  )
}

export default App
