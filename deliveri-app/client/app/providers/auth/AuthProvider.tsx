import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'
import { View } from 'react-native'
import { IContext, TypeUserState } from './auth-provider.interface'

export const AuthContext = createContext({} as IContext)

let ignor = Splash

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    
    const [user, setUser] = useState<TypeUserState>(null)
    
    useEffect(()=>{
        let mounted = true

        const checkAccesToken = async ()=>{
            try {
                
            } catch {
                
            } finally {

            }
        }

        return ()=>{
            mounted=false
        }
    },[])

    return (
        <View>
            {children}
        </View>
    )
}

export default AuthProvider