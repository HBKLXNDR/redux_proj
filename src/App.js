import {Routes, Route} from "react-router-dom";

import css from "./App.module.css"
import {MainLayout} from "./layouts";
import {ProductsPage, ProductIdPage, NotFoundPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<ProductsPage/>}/>
                <Route path="/products/:productId" element={<ProductIdPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;