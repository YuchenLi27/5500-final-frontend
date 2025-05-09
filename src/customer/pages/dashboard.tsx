import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Restaurants from "../components/Restaurants";
import AccountPage from "../components/AccountPage";
import RestaurantMenu from "../components/RestaurantMenu";
import { Navigate } from "react-router-dom";
import CartConflictModal from "../components/CartConflictModal";
import Checkout from "../components/Checkout";
import Orders from "../components/Orders";
import OrderDetail from "../components/OrderDetail";


const Dashboard = () => {

    return (
        <div>
            <Sidebar />
            <CartConflictModal />

            <div style={{ marginLeft: "60px" }}>
                <Container>
                    <Routes>
                        <Route index element={<Restaurants />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="orders/:orderId" element={<OrderDetail />} />
                        <Route path="account" element={<AccountPage />} />
                        <Route path="restaurant/:restaurantId" element={<RestaurantMenu />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </Container>
            </div>
        </div >
    );
};
export default Dashboard;