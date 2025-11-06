import type { Organization } from "../../types/organizationInterface";

export function RoleDescription(
    {
        role,
        isExpanded,
        onRoleClick,
    } 
    : {
        role: Organization,
        isExpanded: boolean,
        onRoleClick: () => void,
    }
) { 
    return (
        <div className="roleDescription">
            <div>
                <h3 onClick={onRoleClick}>
                    {role.role}
                </h3>
                <p>{role.name}</p>
            </div>

            { isExpanded 
                ? <p>{role.roleDescription}</p>
                : null
            }
        </div>
    )
}