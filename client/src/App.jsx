import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdmissionForm from "./pages/AdmissionForm";
import AdmissionFormPreview from "./pages/AdmissionFormPreview";
import AdmissionFormEdit from "./pages/AdmissionFormEdit";
const router = createBrowserRouter([
    {
        path: "/admission-form",
        element: <AdmissionForm />,
    },
    {
        path: "/admission-form/preview",
        element: <AdmissionFormPreview />,
    },
    {
        path: "/admission-form/edit",
        element: <AdmissionFormEdit />,
    },
]);

function App() {
    const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
