import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Applayout from "./ui/Applayout";
import Homepage from "./pages/home/homepage";
import Singup from "./pages/Auth/singup";
import Listings from "./pages/Listings/Listing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapClickProvider } from "./context/mapContext";
import Login from "./pages/Auth/login";
import ProtectedPage from "./ui/ProtectedPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Profileoage from "./pages/profile/profileoage";
import { AnimatePresence } from "framer-motion";
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
                </Route>
              </Route>

              <Route path="/signup" element={<Singup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </MapClickProvider>
    </QueryClientProvider>
  );
}

export default App;
