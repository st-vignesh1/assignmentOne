import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import Home from "./pages/Home";
import { Provider, } from "react-redux";
import store from "./redux/store/Store";



const router = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [{
    path: "/",
    element: <Home />
  }]
}]);


function App() {

  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}
export default App;
