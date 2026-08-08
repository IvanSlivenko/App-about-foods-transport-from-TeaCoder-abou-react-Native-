import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

import PrivateNavigator from './PrivateNavigator'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'
import { useAuth } from '@/hooks/useAuth'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'

// const Stack  = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    // console.log('Navigation');

    const {user} = useAuth()

    const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

    // console.log(currentRoute);
    

    const navRef = useNavigationContainerRef()

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name)
        const listener = navRef.addListener('state', () => 
            setCurrentRoute(navRef.getCurrentRoute()?.name))

        return () => {
            navRef.removeListener('state', listener)
        }
    }, [])

    useCheckAuth(currentRoute)

    return (
        <>
            <NavigationContainer ref={navRef}>
                    <PrivateNavigator/>
            </NavigationContainer>
            {user && currentRoute && (
                <BottomMenu nav={navRef.navigate} currentRoute={currentRoute}/>
            )}
        </>

    )
}

export default Navigation