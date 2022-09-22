import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Components/NavBar';
import AppButton from './Components/Button';
import TopSpace from './Components/TopSpace';

export default function App() {
  return (
		<View style={styles.container}>
			<NavBar />
			<Text style={{ color: "#993955", fontSize: '20%', padding: '5%'}}>Find and rate cats in your area!</Text>
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
