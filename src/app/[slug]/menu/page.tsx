import { ChevronLeftIcon, ScrollTextIcon} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/lib";

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
    const restaurant = await db.restaurant.findUnique({where: {slug} });

    if(!restaurant) {
        return notFound();
    };

    return ( 
        <RestaurantHeader restaurant={restaurant} />
     );
}
 
export default RestaurantMenuPage;