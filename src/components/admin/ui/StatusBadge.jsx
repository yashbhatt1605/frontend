const StatusBadge = ({ status }) => {
    let style = "";

    switch (status) {
        case "Active":
        case "Delivered":
        case "Paid":
        case "Published":
            style = "bg-green-100 text-green-700";
            break;

        case "Pending":
        case "Processing":
            style = "bg-yellow-100 text-yellow-700";
            break;

        case "Inactive":
        case "Cancelled":
        case "Failed":
        case "Hidden":
            style = "bg-red-100 text-red-700";
            break;

        case "Shipped":
            style = "bg-purple-100 text-purple-700";
            break;

        default:
            style = "bg-gray-100 text-gray-700";
    }

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${style}`}>
            {status}
        </span>
    );
};

export default StatusBadge;