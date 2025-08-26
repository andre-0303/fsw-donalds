
import { notFound } from "next/navigation";

import { db } from "@/lib/lib";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
    params: { slug: string };
    searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethod = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}  

const RestaurantMenuPage = async ({params, searchParams}: RestaurantMenuPageProps) => {
    const {slug} = params;
    const {consumptionMethod} = await searchParams;
    if(!isConsumptionMethod(consumptionMethod)) {
        return notFound()
    } 
    const restaurant = await db.restaurant.findUnique({where: {slug}, include: {menuCategories: {include: {products: true}}}});

    if(!restaurant) {
        return notFound();
    };

    return ( 
        <>
            <RestaurantHeader restaurant={restaurant} />
            <RestaurantCategories restaurant={restaurant} />
        </>
     );
}
 
export default RestaurantMenuPage;