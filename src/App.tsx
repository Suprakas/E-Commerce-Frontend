// import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Loader from "./components/loader";
// import ProtectedRoute from "./components/protected-route";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const ProductDetails = lazy(() => import("./pages/product-details"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
const OrderDetails = lazy(() => import("./pages/order-details"));
const NotFound = lazy(() => import("./pages/not-found"));
const Checkout = lazy(() => import("./pages/checkout"));

// Admin Routes Importing
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transactions"));
const Discount = lazy(() => import("./pages/admin/discount"));
const Barcharts = lazy(() => import("./pages/admin/charts/barCharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/pieCharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/lineCharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newProduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionManagement")
);
const DiscountManagement = lazy(
  () => import("./pages/admin/management/discountManagement")
);

const NewDiscount = lazy(() => import("./pages/admin/management/newDiscount"));

const App = () => {
  
  return (
    
    <Router>
      {/* Header */}
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* Not logged In Route */}
          <Route path="/login"element={<Login />}/> 
          {/* Logged In User Routes */}
          <Route
            // element={<ProtectedRoute isAuthenticated={user ? true : false} />}
          >
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/pay" element={<Checkout />} />
          </Route>
          {/* Admin Routes */}
          <Route
            // element={
            //   <ProtectedRoute
            //     isAuthenticated={true}
            //     adminOnly={true}
            //     admin={user?.role === "admin" ? true : false}
            //   />
            // }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/discount" element={<Discount />} />

            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />

            <Route path="/admin/discount/new" element={<NewDiscount />} />

            <Route
              path="/admin/discount/:id"
              element={<DiscountManagement />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toaster position="bottom-center" />
    </Router>
  );
};

export default App;