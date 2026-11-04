import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import BrandTable from "../../components/admin/tables/BrandTable";

const Brands = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Brands"
                    subtitle="Manage vehicle brands"
                    buttonText="Add Brand"
                    onClick={() => console.log("Add Brand")}
                />

                <BrandTable />

            </div>
        </AdminLayout>
    );
};

export default Brands;