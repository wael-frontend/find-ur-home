import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Applayout from "./ui/Applayout";
import Homepage from "./pages/home/Homepage";
import Singup from "./pages/Auth/singup";
import Listings from "./pages/Listings/Listing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapClickProvider } from "./context/mapContext";
import Login from "./pages/Auth/login";
import ProtectedPage from "./ui/ProtectedPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Profileoage from "./pages/profile/profileoage";
import Dashboard from "./pages/dashboard/Dashboard";
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
                    <Applayout />
                  </ProtectedPage>
                }
              >
                <Route path="/" element={<Applayout />}>
                  <Route index element={<Homepage />} />
                  <Route path="listing" element={<Listings />} />
                  <Route path="profile" element={<Profileoage />} />
                  <Route path="dashboard" element={<Dashboard />} />
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
