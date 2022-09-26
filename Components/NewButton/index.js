import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function NewButton({text, onPress}) {
	
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "30%",
		height: "6%",
		borderRadius: "15%",
		backgroundColor: "#993955",
		marginTop: "5%",
	},
	text: {
		color: "#CCD6EB",
	},
});
