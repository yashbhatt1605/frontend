import PageHeader from "../../components/admin/ui/PageHeader";
import SettingsForm from "../../components/admin/forms/SettingsForm";

const Settings = () => {
    return (
        <div className="space-y-6">

            <PageHeader
                title="Settings"
                subtitle="Manage application settings"
            />

            <SettingsForm />

        </div>
    );
};

export default Settings;