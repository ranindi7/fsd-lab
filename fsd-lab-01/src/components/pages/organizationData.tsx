import type { Organization } from "../../types/organizationInterface";
import { RoleDescriptionDisplay } from "../roleDescriptionDisplay/roleDescriptionDisplay";

export function OrganizationData({
  rolesList
}: {
  rolesList: Organization[];
}) {
    return(
        <>
        <main>
            <h1>Organization</h1>
            <div>
                <RoleDescriptionDisplay
                    roles={rolesList}
                />
            </div>
        </main>
        </>
    )
}