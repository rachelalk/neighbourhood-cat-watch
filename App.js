import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Components/NavBar';
import AppButton from './Components/Button';
import TopSpace from './Components/TopSpace';

export default function App() {
  return (
		<View style={styles.container}>
			<NavBar />
      <AppButton text={'Add Cat'}/>
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
