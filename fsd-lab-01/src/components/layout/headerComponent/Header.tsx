import logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <div id="logo">
                    <img src={logo} alt="Pixell River Logo" height="100px"/>
                </div>
                <ul>
                    <li><NavLink to="/employees">Employees</NavLink></li>
                    <li><NavLink to="/organization">Organization</NavLink></li>
                </ul>
            </nav>

            <div id="welcome-message">
                <h1>Pixell River Financial Employee and Organization Data</h1>
                <p>Welcome to Pixell River's employee and organization data page</p>
            </div>
        </header>
    )
}