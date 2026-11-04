import AdminLayout from "../../components/admin/layout/AdminLayout";
import PageHeader from "../../components/admin/ui/PageHeader";
import AdminProfileForm from "../../components/admin/forms/AdminProfileForm";

const Profile = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">

                <PageHeader
                    title="My Profile"
                    subtitle="Update your profile information"
                />

                <AdminProfileForm />

            </div>
        </AdminLayout>
    );
};

export default Profile;