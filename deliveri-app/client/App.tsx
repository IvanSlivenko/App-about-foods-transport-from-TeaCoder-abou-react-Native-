import { StatusBar } from 'expo-status-bar'
import Navigation from '@/navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/providers/auth/AuthProvider';

export default function App() {
	// console.log('App');
	return (
	<>
	<AuthProvider>
		<SafeAreaProvider>
			<Navigation/>
		</SafeAreaProvider>
		<StatusBar style="light"/>
	</AuthProvider>
	</>
	)
}


