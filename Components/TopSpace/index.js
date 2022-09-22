import React from "react";
import { Text, View, Image } from "react-native";

const TopSpace = () => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				width: "100%",
				height: "15%",
				backgroundColor: "black",
			}}
		></View>
	);
};
export default TopSpace;
