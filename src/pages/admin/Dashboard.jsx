import React, { useEffect, useState } from "react";

import StatCard from "../../components/admin/dashboard/StatCard";
import SalesChart from "../../components/admin/dashboard/SalesChart";
import RecentOrders from "../../components/admin/dashboard/RecentOrders";
import ActivityCard from "../../components/admin/dashboard/ActivityCard";

import {
    FaMotorcycle,
    FaCar,
    FaUsers,
    FaShoppingCart
} from "react-icons/fa";


const Dashboard = () => {

    const [stats, setStats] = useState({
        bikes: 0,
        cars: 0,
        customers: 0,
        orders: 0
    });


    useEffect(() => {

        // Fetch dashboard data
        const fetchStats = async () => {

            try {

                const bikeRes = await fetch(
                    "http://localhost:5000/api/bikes"
                );

                const carRes = await fetch(
                    "http://localhost:5000/api/cars"
                );

                const customerRes = await fetch(
                    "http://localhost:5000/api/customers"
                );


                const bikes = await bikeRes.json();
                const cars = await carRes.json();
                const customers = await customerRes.json();


                setStats({
                    bikes: bikes.length || 0,
                    cars: cars.length || 0,
                    customers: customers.length || 0,
                    orders: 0
                });


            } catch (error) {

                console.log(
                    "Dashboard Fetch Error:",
                    error
                );

            }

        };


        fetchStats();

    }, []);



    return (

        <div className="dashboard-page">


            {/* Page Title */}
            <div className="dashboard-header">

                <h1>
                    Admin Dashboard
                </h1>

                <p>
                    Welcome back, manage your showroom easily.
                </p>

            </div>



            {/* Statistics Cards */}
            <div className="stats-grid">


                <StatCard
                    title="Total Bikes"
                    value={stats.bikes}
                    icon={<FaMotorcycle />}
                />


                <StatCard
                    title="Total Cars"
                    value={stats.cars}
                    icon={<FaCar />}
                />


                <StatCard
                    title="Customers"
                    value={stats.customers}
                    icon={<FaUsers />}
                />


                <StatCard
                    title="Orders"
                    value={stats.orders}
                    icon={<FaShoppingCart />}
                />


            </div>



            {/* Chart */}
            <div className="dashboard-section">

                <SalesChart />

            </div>



            {/* Bottom Section */}
            <div className="dashboard-bottom">


                <div className="dashboard-box">

                    <RecentOrders />

                </div>


                <div className="dashboard-box">

                    <ActivityCard />

                </div>


            </div>



        </div>

    );

};


export default Dashboard;