import {Label} from "../ui/label";
import {Textarea} from "../ui/textarea";

type TextAreaInputProps = {
	name: string;
	labelText?: string;
	defaultValue?: string;
};

function TextAreaInput({name, defaultValue, labelText}: TextAreaInputProps) {
	return (
		<div className="mb-2">
			<Label htmlFor={name}>{labelText || name}</Label>
			<Textarea
				id={name}
				name={name}
				defaultValue={defaultValue || "Type product description here..."}
				rows={5}
				required
				className="leading-loose"
			></Textarea>
		</div>
	);
}

export default TextAreaInput;
