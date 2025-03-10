import {FiShoppingCart} from "react-icons/fi";
import {Button} from "../ui/button";
import Link from "next/link";
import { fetchCartItems } from "@/utils/actions";

async function CartButton() {
   //temp
   const numItemsInCart = await fetchCartItems();

	return (
		<Button asChild variant="outline" size='icon' className="flex justify-center items-center relative">
			<Link href="/cart">
         <span className="absolute bottom-6 left-5 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">{numItemsInCart}</span>
				<FiShoppingCart />
			</Link>
		</Button>
	);
}

export default CartButton;
 