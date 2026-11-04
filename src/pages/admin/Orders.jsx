import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import OrderTable from "../../components/admin/tables/OrderTable";

const Orders = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Orders"
                    subtitle="Manage all customer orders"
                    buttonText="Add Order"
                    onClick={() => console.log("Add Order")}
                />

                <OrderTable />

            </div>
        </AdminLayout>
    );
};

export default Orders;