import {Routes, Route, Navigate} from "react-router-dom";

import css from "./App.module.css"
import {MainLayout} from "./layouts";
import {ProductsPage, ProductIdPage, NotFoundPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Navigate to="products"/>}/>
                <Route path="products/:productId" element={<ProductIdPage/>}/>
                <Route path="products" element={<ProductsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;


//
// {
//     "id": 1,
//     "imageUrl": "some url here",
//     "name": "Product name",
//     "count": 4,
//     "size": {
//     "width": 200,
//         "height": 200
// },
//     "weight": "200g",
//     "comments": ["CommentModel", "CommentModel"]
// }

// {
//     "id": 3,
//     "productId": 1,
//     "description": "some text here",
//     "date": "14:00 22.08.2021"
// }