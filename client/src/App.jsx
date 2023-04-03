import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdmissionForm from "./pages/AdmissionForm";
import AdmissionFormPreview from "./pages/AdmissionFormPreview";
import AdmissionFormView from "./pages/AdmissionFormView";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/admission-form",
        element: <AdmissionForm />,
    },
    {
        path: "/admission-form/preview",
        element: <AdmissionFormPreview />,
    },

    {
        path: "/admission-form/view",
        element: <AdmissionFormView />,
    },
]);

function App() {
    const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
