import { RouterProvider } from "react-router-dom";
import ProductsProvider from "./contexts/ProductsProvider";
import routes from "./routes/routes";


function App() {
  return (
    <div>
      <ProductsProvider>
        <RouterProvider router={routes} />
      </ProductsProvider>
    </div>
  );
}

export default App;
