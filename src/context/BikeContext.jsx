import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";


const BikeContext = createContext();



export const BikeProvider = ({ children }) => {


    const [bikes, setBikes] = useState(() => {

        const savedBikes =
            localStorage.getItem("bikes");


        return savedBikes
            ? JSON.parse(savedBikes)
            : [
                {
                    id: 1,
                    name: "Yamaha R15 V4",
                    brand: "Yamaha",
                    price: 180000,
                    engine: "155cc",
                    year: 2025,
                    image: "/images/r15.jpg"
                },
                {
                    id: 2,
                    name: "Royal Enfield Classic 350",
                    brand: "Royal Enfield",
                    price: 195000,
                    engine: "349cc",
                    year: 2024,
                    image: "/images/classic350.jpg"
                },
                {
                    id: 3,
                    name: "KTM Duke 390",
                    brand: "KTM",
                    price: 320000,
                    engine: "399cc",
                    year: 2025,
                    image: "/images/duke390.jpg"
                }
            ];

    });



    useEffect(() => {

        localStorage.setItem(
            "bikes",
            JSON.stringify(bikes)
        );

    }, [bikes]);




    const addBike = (bike) => {

        const newBike = {
            ...bike,
            id: Date.now()
        };


        setBikes((prev) => [
            ...prev,
            newBike
        ]);

    };




    const updateBike = (id, updatedBike) => {

        setBikes((prev) =>
            prev.map((bike) =>
                bike.id === id
                    ? {
                        ...bike,
                        ...updatedBike
                    }
                    : bike
            )
        );

    };






    return (

        <BikeContext.Provider
            value={{
                bikes,
                setBikes,
                addBike,
                updateBike
            }}
        >

            {children}

        </BikeContext.Provider>

    );

};




export const useBike = () =>
    useContext(BikeContext);



export default BikeContext;