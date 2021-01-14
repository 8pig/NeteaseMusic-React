import Descover from "@/pages/descover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

const routes = [
    {
        path: '/',
        component: Descover,
        exact: true
    },
    {
        path: '/friend',
        component: Friend
    },
    {
        path: '/mine',
        component: Mine
    }

]
export default routes;