import react from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Image,
	ScrollView

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
import { CLOUDINARY_PRESET, CLOUDINARY_CLOUD } from "@env";




import * as ImagePicker from "expo-image-picker";



function HomeScreen({ navigation }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [lat, setLat] = useState(37.78825);
	const [long, setLong] = useState(-122.4324);
	// const [marker, setMarker] = useState({
	// 	markerLat: 53.437957,
	// 	markerLong: -2.213814,
	// });
	const [catInfo, setCatInfo] = useState({
		id: 1,
		lat: 53.437957,
		long: -2.213814,
		friendliness: 3,
		cuteness: 5,
		comments: "Great cat!",
		photo: "./cat.jpeg"
	});

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

	// if (location) {
	// 	console.log("lat", lat);
	// 	console.log("long", long);
	// } else {
	// 	console.log("no location data");
	// }



	return (
		<View style={styles.container}>
			<NavBar style={styles.navBar} i980 />
			<Text style={{ color: "#993955", fontSize: "20%", padding: "5%" }}>
				Find and rate cats in your area!
			</Text>
			<ViewMap
				lat={lat}
				long={long}
				markerLat={catInfo.lat}
				markerLong={catInfo.long}
				photo ="./cat.jpeg"
				friendliness={catInfo.friendliness}
				cuteness={catInfo.cuteness}
				comments={catInfo.comments}
			></ViewMap>
			<AppButton
				text={"Add Cat"}
				onPress={() => navigation.navigate("Add Cat")}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

function AddCatScreen() {
	const [comment, setComment] = useState("");
	const [friendliness, setFriendliness] = useState(0)
	const [cuteness, setCuteness] = useState(0);
	const [image, setImage] = useState(null);
	const [photo, setPhoto] = useState(null);
	const [base64, setBase64] = useState(null);
	const [type, setType] = useState(null);

		const pickImage = async () => {
			// No permissions request is necessary for launching the image library
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.2,
				base64: true,
			});

			console.log(result);

			if (!result.cancelled) {
				setImage(result.uri);
				setBase64(result.base64);
				setType(result.type);
			}
		};

		console.log(image)



		const cloudinaryUpload = async () => {
			console.log("submit cat pressed");
			console.log(photo);
			const data = new FormData();
			data.append("file", `data:${type};base64,${base64}`);
			data.append("upload_preset", `${CLOUDINARY_PRESET}`);
			data.append("cloud_name", `${CLOUDINARY_CLOUD}`);
			console.log(data);
			await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("147", data)
					setPhoto(data.secure_url);
					console.log("147, photo", photo);
				})
				.catch((err) => {
					console.log("An Error Occured While Uploading");
				});
		};

			if (photo) {
				console.log("photo", photo);
			} else {
				console.log("no photo data");
			}


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
				<NewButton text={"Upload Photo"} onPress={pickImage}></NewButton>
				{image && (
					<Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: "2%" }} />
				)}
				<NewButton text={"Submit Cat"} onPress={ ()=>cloudinaryUpload(image)}></NewButton>
			</View>

	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Add Cat" component={AddCatScreen} />
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
		height: "10%",
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
