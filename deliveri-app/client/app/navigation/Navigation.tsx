import { NavigationContainer } from '@react-navigation/native'
import { FC } from 'react'

import PrivateNavigator from './PrivateNavigator'

// const Stack  = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    // console.log('Navigation');
    return (
        <NavigationContainer>
                <PrivateNavigator/>
        </NavigationContainer>
    )
}

export default Navigation