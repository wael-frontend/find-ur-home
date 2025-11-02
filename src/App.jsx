import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//ui
import AppLayout from "./ui/AppLayout";
import ProtectedPage from "./ui/ProtectedPage";
//pages
import Homepage from "./pages/home/Homepage";
import Singup from "./pages/Auth/Singup";
import Login from "./pages/Auth/login";
import Listings from "./pages/Listings/Listings";
import ProfilePage from "./pages/profile/ProfilePage";
import Dashboard from "./pages/DashboardPage/Dashboard";
import DeatalsListingPage from "./pages/Listings/DeatalsListingPage";
//tols and context
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapClickProvider } from "./context/mapContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <MapClickProvider>
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route
                element={
                  <ProtectedPage>
                    <AppLayout />
                  </ProtectedPage>
                }
              >
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Homepage />} />
                  <Route path="listing" element={<Listings />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route
                    path="listing/:ListingID"
                    element={<DeatalsListingPage />}
                  />
                </Route>
              </Route>

              <Route path="/signup" element={<Singup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "2px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </MapClickProvider>
    </QueryClientProvider>
  );
}

export default App;
