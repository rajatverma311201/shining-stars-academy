import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdmissionForm from "./pages/AdmissionForm";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AdmissionForm />,
    },
]);

function App() {
    const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
