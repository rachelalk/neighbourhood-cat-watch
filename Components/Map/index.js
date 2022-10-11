import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";


const ViewMap = ({ lat, long, markerLat, markerLong }) => {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={{
					latitude: lat,
					longitude: long,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
			>
				<Marker coordinate={{ latitude: markerLat, longitude: markerLong }}>
					<Callout>
						<View>
							<Text>This is a cat test</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		display: "flex",
		marginTop: "30%",
		marginLeft: "5%",
		height: "65%",
		width: "90%",
		justifyContent: "flex-end",
		alignItems: "center",
		border: "solid",
		borderColor: "#993955",
		borderWidth: "2%",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default ViewMap;
