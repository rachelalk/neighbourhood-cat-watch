import React from "react";
import { Text, View, Image } from "react-native";

const NavBar = () => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				// marginTop: "15%",
				position: "fixed",
				width: "100%",
				height: "6%",
				backgroundColor: "#993955",
				top: "0%",
			}}
		>
			<Image source={require("./catIcon.png")} style={{height: 40, resizeMode: "contain"}}></Image>
			<Text
				style={{
					fontFamily: "American Typewriter",
					fontSize: "20%",
					color: "#CCD6EB",
				}}
			>
				Neighbourhood Cat Watch
			</Text>
		</View>
	);
};
export default NavBar;
