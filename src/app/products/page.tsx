import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProdutctPage = () => {
    return ( 
        <div className="flex justify-center items-center h-screen flex-col p-5">
            <h2 className="p-5 text-red-500">products</h2>
            <Button>FSW 7.0</Button>
            <Input placeholder="Bora fechar esse projeto?" />
        </div>
     );
}
 
export default ProdutctPage;