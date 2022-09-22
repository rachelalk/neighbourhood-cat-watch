import React from "react";
import { View, Button } from "react-native";

const AppButton = ({text, onPress}) => {
	return (
		<View
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "30%",
				height: "6%",
				borderRadius: "15%",
				backgroundColor: "#993955",
                marginTop: '140%',
			}}
		>
			<Button
				color="#CCD6EB"
				onPress={onPress}
				title={text}
			></Button>
		</View>
	);
};
export default AppButton;
