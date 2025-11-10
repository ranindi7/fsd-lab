import { useState, type JSX } from "react";
import { RoleDescription } from "../organizationRoleDescription/organizationRoleDescription";
import type { Organization } from "../../types/organizationInterface";

export function RoleDescriptionDisplay({
        roles
    }: 
    {
        roles: Organization[]
    }) {

    const[expandedId, setExpandedId] = useState<number|null>(null);

    const roleDescriptions: JSX.Element[] = roles.map((role) => {
        return(
            <RoleDescription
                role={role}
                isExpanded={role.id === expandedId}
                onRoleClick={
                    () => {
                        role.id !== expandedId ?
                        setExpandedId(role.id) :
                        setExpandedId(null);
                    }
                }
                key={role.id}
            />
        )
    });

    return(
        <div className="rolesDescription">
            {roleDescriptions}
        </div>
    )
}