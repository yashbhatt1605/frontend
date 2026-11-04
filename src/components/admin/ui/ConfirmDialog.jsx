import { FaExclamationTriangle } from "react-icons/fa";

const ConfirmDialog = ({
    open,
    title = "Delete Item",
    message = "Are you sure you want to delete this item?",
    onConfirm,
    onCancel,
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[420px]">

                <div className="flex justify-center">

                    <div className="bg-red-100 p-5 rounded-full">

                        <FaExclamationTriangle className="text-red-600 text-4xl" />

                    </div>

                </div>

                <h2 className="text-2xl font-bold text-center mt-5">
                    {title}
                </h2>

                <p className="text-gray-500 text-center mt-3">
                    {message}
                </p>

                <div className="flex gap-4 mt-8">

                    <button
                        onClick={onCancel}
                        className="flex-1 border rounded-xl py-3 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ConfirmDialog;