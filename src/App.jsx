import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Applayout from "./ui/Applayout";
import About from "./pages/about";
import Homepage from "./pages/home/homepage";
import Listings from "./pages/Listings/Listing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MapClickProvider } from "./context/mapContext";
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MapClickProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="listing" element={<Listings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MapClickProvider>
    </QueryClientProvider>
  );
}

export default App;
