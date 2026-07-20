import App from "./App"
import Home from "./components/Home/Home.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Cart from "./components/Cart/Cart.jsx"
import ItemPage from "./components/ItemPage/ItemPage.jsx"

const routes = [
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "Shop",
                Component: Shop,
            },
            {
                path: "Shop/products/:id",
                Component: ItemPage,
            },
            {
                path: "Cart",
                Component: Cart,
            }
        ]
    }
];

export default routes