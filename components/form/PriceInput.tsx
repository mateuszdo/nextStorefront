import {Input} from "../ui/input";
import {Label} from "../ui/label";
const name = "price";
type FormInputNumberProps = {
	defaultValue?: number;
};

function PriceInput({defaultValue}: FormInputNumberProps) {
	return (
		<div className="mb-2">
			<Label htmlFor={name} className="capitalize">
				Price (£)
			</Label>
			<Input
				id={name}
				name={name}
				defaultValue={defaultValue || 0}
				type="number"
				min={0}
				required
			/>
		</div>
	);
}

export default PriceInput;
