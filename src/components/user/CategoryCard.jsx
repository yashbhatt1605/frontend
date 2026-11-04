import { motion } from "framer-motion";

const CategoryCard = ({ image, title }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover duration-500 hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h2 className="text-3xl font-bold text-white">
                    {title}
                </h2>

            </div>
        </motion.div>
    );
};

export default CategoryCard;