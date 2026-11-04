import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL =
        "https://6a6199ceda10c59c1809a1eb.mockapi.io/cardetaild/cardetails";

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch cars");
            }

            const data = await response.json();

            setCars(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        } finally {
            setLoading(false);
        }
    };

    const addCar = async (car) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(car),
            });

            const newCar = await response.json();

            setCars((prev) => [...prev, newCar]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateCar = async (id, updatedCar) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedCar),
            });

            const data = await response.json();

            setCars((prev) =>
                prev.map((car) => (car.id === id ? data : car))
            );
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <CarContext.Provider
            value={{
                cars,
                loading,
                fetchCars,
                addCar,
                updateCar,
            }}
        >
            {children}
        </CarContext.Provider>
    );
};

export const useCar = () => useContext(CarContext);

export default CarContext;