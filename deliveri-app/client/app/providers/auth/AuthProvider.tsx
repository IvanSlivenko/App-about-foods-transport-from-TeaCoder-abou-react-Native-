import { PropsWithChildren } from 'react'
import { View } from 'react-native'

interface Props extends PropsWithChildren {}

const AuthProvider = ({ children }: Props) => {
    return (
        <View>
            {children}
        </View>
    )
}

export default AuthProvider