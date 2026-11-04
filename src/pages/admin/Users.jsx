import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import UserTable from "../../components/admin/tables/UserTable";

const Users = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Users"
                    subtitle="Manage system users"
                    buttonText="Add User"
                    onClick={() => console.log("Add User")}
                />

                <UserTable />

            </div>
        </AdminLayout>
    );
};

export default Users;