import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import SalesChart from "../../components/admin/dashboard/SalesChart";
import RevenueCard from "../../components/admin/dashboard/RevenueCard";
import ActivityCard from "../../components/admin/dashboard/ActivityCard";

const Analytics = () => {
    return (
        <AdminLayout>

            <div className="space-y-6">

                <PageHeader
                    title="Analytics"
                    subtitle="Sales and business performance overview"
                />

                <RevenueCard />

                <SalesChart />

                <ActivityCard />

            </div>

        </AdminLayout>
    );
};

export default Analytics;