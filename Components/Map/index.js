import MapView from "react-native-maps";
import { StyleSheet, View, Text, Image, Webview } from "react-native";
import { Marker, Callout } from "react-native-maps";



const ViewMap = ({ lat, long, markerLat, markerLong, photo, friendliness, cuteness, comments }) => {
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
						<View
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
								width: 300,
								height: 300,
								alignItems: "center",
								backgroundColor: "#E9ECF5",
							}}
						>
							<Text
								style={{
									display: "flex",
								}}
							>
								<Image
									source={require("./cat.jpeg")}
									style={{
										backgroundColor: "#E9ECF5",
										display: "flex",
										height: 200,
										width: 200,
										resizeMode: "contain",
									}}
								></Image>
							</Text>

							<Text
								style={{
									display: "flex",
								}}
							>
								Friendliness: {friendliness}
							</Text>
							<Text
								style={{
									display: "flex",
								}}
							>
								Cuteness: {cuteness}
							</Text>
							<Text
								style={{
									display: "flex",
								}}
							>
								Comments: {comments}
							</Text>
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
