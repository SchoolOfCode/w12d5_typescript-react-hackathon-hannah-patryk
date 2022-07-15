import "./button.css";
import { Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function LocationButton(locationName: string) {
	return (
		<Button leftIcon={<ViewIcon />} colorScheme="teal" size="xs">
			{locationName}
		</Button>
	);
}
