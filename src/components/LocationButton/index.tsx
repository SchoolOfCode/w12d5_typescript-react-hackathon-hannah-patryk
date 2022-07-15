import "./locationButton.css";
import { Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

type ButtonProps = {
	locationName: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	key: number;
};

export default function LocationButton({
	locationName,
	handleClick,
}: ButtonProps) {
	return (
		<Button
			name={locationName}
			leftIcon={<ViewIcon />}
			onClick={handleClick}
			colorScheme="teal"
			size="md">
			{locationName}
		</Button>
	);
}
