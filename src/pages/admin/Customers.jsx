import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import CustomerTable from "../../components/admin/tables/CustomerTable";

const Customers = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Customers"
                    subtitle="Manage all registered customers"
                    buttonText="Add Customer"
                    onClick={() => console.log("Add Customer")}
                />

                <CustomerTable />

            </div>
        </AdminLayout>
    );
};

export default Customers;