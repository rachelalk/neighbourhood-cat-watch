import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Pressable,
} from "react-native";
import NavBar from "./Components/NavBar";
import AppButton from "./Components/Button";
import ViewMap from "./Components/Map";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewButton from "./Components/NewButton";
import CatRating from "./Components/Rating";

function HomeScreen({ navigation }) {
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
		console.log("lat", lat);
		console.log("long", long);
	} else {
		console.log("no data");
	}

	return (
		<View style={styles.container}>
			<NavBar style={styles.navBar} i980 />
			<Text style={{ color: "#993955", fontSize: "20%", padding: "5%" }}>
				Find and rate cats in your area!
			</Text>
			<ViewMap lat={lat} long={long}></ViewMap>
			<AppButton
				text={"Add Cat"}
				onPress={() => navigation.navigate("AddCat")}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

function AddCatScreen() {
	const [comment, setComment] = useState("");
	const [friendliness, setFriendliness] = useState(0)
	const [cuteness, setCuteness] = useState(0);


	return (
		<View style={styles.container}>
			<NavBar style={styles.navBar} />
			<Text style={{ color: "#993955", fontSize: "20%", padding: "5%" }}>
				Rate the cat that you have spotted:
			</Text>
			<View style={styles.wrapper}>
				<Text style={styles.options}>Friendliness:</Text>
				<CatRating rating={setFriendliness}></CatRating>
			</View>
			<View style={styles.wrapper}> 
			<Text style={styles.options}>Cuteness:</Text>
			<CatRating rating={setCuteness}></CatRating>
			</View>
			<Text style={styles.comment}>Comments (optional):</Text>
			<TextInput
				style={styles.input}
				placeholder="Type here"
				value={comment}
				onChangeText={setComment}
			></TextInput>
			<NewButton text={"Upload Photo"}></NewButton>
			<NewButton text={"Add Cat"}></NewButton>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AddCat" component={AddCatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
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
	navBar: {
		height: "60%",
		width: "90%",
	},
	options: {
		color: "#993955",
		fontSize: "20%",
		alignSelf: "left",
	},
	input: {
		height: "20%",
		border: "solid",
		borderColor: "#993955",
		borderWidth: "1%",
		width: "90%",
		borderRadius: "15%",
	},
	wrapper: {
		borderColor: "#993955",
		borderWidth: "1%",
		width: "90%",
		borderRadius: "15%",
		marginBottom: "5%",
		padding: "5%",
	},
	comment: {
		color: "#993955",
		fontSize: "20%",
		alignSelf: "left",
		marginLeft: "8%",
		marginBottom: "2%",
	},
});

export default App;
