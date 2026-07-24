import { StatusBar } from 'expo-status-bar'
import Navigation from '@/navigation/Navigation'



import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'

import { gStyle } from 'styles/style';

export default function App() {
	return (
	<>
	<SafeAreaProvider>
		<Navigation/>
		{/* <View style={gStyle.test}>
      <Text style={gStyle.test_2}>test</Text>
    </View> */}
	</SafeAreaProvider>
	<StatusBar style="light"/>
	</>
	)
}
