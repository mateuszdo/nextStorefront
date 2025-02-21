"use client";
import {useState} from "react";
import FormContainer from "../form/FormContainer";
import {createReviewAction} from "@/utils/actions";
import {Button} from "../ui/button";
import {Card} from "../ui/card";
import RatingInput from "./RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import {useUser} from "@clerk/nextjs";
import {SubmitButton} from "../form/Buttons";

function SubmitReview({productId}: {productId: string}) {
	const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
	const {user} = useUser();
	return (
		<div className="mb-8">
			<Button
				variant="outline"
				size="default"
				onClick={() => setIsReviewFormVisible((prev) => !prev)}
			>
				Leave Review
			</Button>
			{isReviewFormVisible && (
				<Card className="p-8 mt-8">
					<FormContainer action={createReviewAction}>
						<input type="hidden" name="productId" value={productId} />
						<input
							type="hidden"
							name="authorName"
							value={user?.firstName || "user"}
						/>
						<input
							type="hidden"
							name="authorImageUrl"
							value={user?.imageUrl || ""}
						/>
						<RatingInput name="rating" />
						<TextAreaInput
							name="comment"
							labelText="Feedback"
							defaultValue="Outstanding product!!!"
						/>
						<SubmitButton className="mt-4" />
					</FormContainer>
				</Card>
			)}
		</div>
	);
}

export default SubmitReview;
