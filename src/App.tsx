import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        index: true,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
