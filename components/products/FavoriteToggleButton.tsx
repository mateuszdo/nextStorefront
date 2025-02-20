import {Button} from "../ui/button";
import {FaHeart} from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fetchFavoriteId } from "@/utils/actions";

async function FavoriteToggleButton({productId}: {productId: string}) {
	const {userId} = auth();
	
	if(!userId) return <CardSignInButton />;
	const favoriteId = await fetchFavoriteId({productId});
	return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}

export default FavoriteToggleButton;
