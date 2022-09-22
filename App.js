import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Components/NavBar';

export default function App() {
  <style>
		@import
		url('https://fonts.googleapis.com/css2?family=Caveat&family=Mukta:wght@200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Mukta:wght@200&display=swap');
	</style>;

  return (
		<View style={styles.container}>
			<NavBar />
			<Text>Map will go here</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: '#E9ECF5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
