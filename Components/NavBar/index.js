import React from "react";
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

const NavBar = () => {
      <style>
				@import
				url('https://fonts.googleapis.com/css2?family=Caveat&family=Mukta:wght@200&display=swap');
				@import
				url('https://fonts.googleapis.com/css2?family=Caveat&family=Mukta:wght@200&display=swap');
			</style>;
	return (

		<View
			style={{
				display: 'flex',
                flexDirection: 'row',
				justifyContent: "center",
				alignItems: "center",
                marginTop: '15%',
                // fontFamily: 'Caveat',
                position: 'absolute',
                width: '100%',
                height: '6%',
                backgroundColor: '#993955'
			}}
		>
         <Image source={ require('./catIcon.png')}></Image>
			<Text>Neighbourhood Cat Watch</Text>
		</View>
	);
};
export default NavBar;
