import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import CategoryTable from "../../components/admin/tables/CategoryTable";

const Categories = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Categories"
                    subtitle="Manage vehicle categories"
                    buttonText="Add Category"
                    onClick={() => console.log("Add Category")}
                />

                <CategoryTable />

            </div>
        </AdminLayout>
    );
};

export default Categories;