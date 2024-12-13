import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./RootLayout";
import './App.css'

//pages 
import Home from "./src/pages/Home";
import PlantDetect from "./src/pages/PlantDetect";
import PlantInfo from "./src/pages/PlantInfo";
import Contact from "./src/pages/Contact";
import About from "./src/pages/About"
import Explore from "./src/pages/Explore";
import Quiz from "./src/pages/Quiz";


//components
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import PrivateRoute from "./src/components/PrivateRoute";

//context
import { AuthProvider } from "./src/context/AuthContext";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plantdetect" element={<PlantDetect />} />
        <Route path="/plantinfo" element={<PlantInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />


      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;