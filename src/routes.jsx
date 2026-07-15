import App from "./App"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"

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
                path: "Cart",
                Component: Cart,
            }
        ]
    }
];

export default routes