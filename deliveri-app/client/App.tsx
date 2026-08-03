import { StatusBar } from 'expo-status-bar'
import Navigation from '@/navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/providers/auth/AuthProvider';
import Toast from '@/components/ui/Toast';

export default function App() {
	// console.log('App');
	return (
	<>
		<AuthProvider>
			<SafeAreaProvider>
				<Navigation/>
			</SafeAreaProvider>
		</AuthProvider>
		<StatusBar style="light"/>
		<Toast/>	
	</>
	)
}


