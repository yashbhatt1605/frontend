import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import ReviewTable from "../../components/admin/tables/ReviewTable";

const Reviews = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="Customer Reviews"
                    subtitle="Manage customer feedback"
                    buttonText="Add Review"
                    onClick={() => console.log("Add Review")}
                />

                <ReviewTable />

            </div>
        </AdminLayout>
    );
};

export default Reviews;