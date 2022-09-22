import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import NavBar from "./Components/NavBar";
import AppButton from "./Components/Button";
import ViewMap from "./Components/Map";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function App() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState("37.78825");
  const [long, setLong] = useState("-122.4324");

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
		})();
	}, []);

	// let text = "Waiting..";
	// if (errorMsg) {
	// 	text = errorMsg;
	// } else if (location) {
	// 	text = JSON.stringify(location);
	// }

	if (location) {
		console.log("lat",lat);
    console.log("long",long);
	} else {
		console.log("no data");
	}

	return (
		<View style={styles.container}>
			<NavBar style={{ height: "60%", width: "90%" }} />
			<Text style={{ color: "#993955", fontSize: "20%", padding: "5%" }}>
				Find and rate cats in your area!
			</Text>
			<ViewMap lat={lat} long={long} ></ViewMap>
			<AppButton text={"Add Cat"} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		backgroundColor: "#E9ECF5",
		alignItems: "center",
	},
});
