import { JSX } from "react";
import Products from "../views/products/products";
import ViewProduct from "../views/products/view-products";
import AddProduct from "../views/products/add-product";
import EditProduct from "../views/products/edit-product";
import DeleteProduct from "../views/products/delete-product";

export const RouteExample = (): JSX.Element => {
    return (
        <>
            <h1>Router Example</h1>

            {/* This does not work at the nextjs, you should check app/(views)/products */}
            {/* <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="/products" element={<ProductsWrong />} />
                        <Route path="/products/:id" element={<ViewProduct />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route path="/edit-product/:id" element={<EditProduct />} />
                        <Route path="/delete-product/:id" element={<DeleteProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter> */}
        </>

    );
};
