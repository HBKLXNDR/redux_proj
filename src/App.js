import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<MainLayout/>}>

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