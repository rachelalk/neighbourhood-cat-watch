import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

const ViewMap = () => {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
			></MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		display: "flex",
		marginTop: "45%",
		marginLeft: "5%",
		height: "60%",
		width: "90%",
		justifyContent: "flex-end",
		alignItems: "center",
		border: "solid",
		borderColor: "#993955",
        borderWidth: '2%',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default ViewMap;
