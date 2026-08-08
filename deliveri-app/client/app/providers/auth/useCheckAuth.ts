import { useAuth } from "@/hooks/useAuth"
import { errorCatch } from "@/services/api/error.api"
import { getNewTokens } from "@/services/api/helper.auth"
import { getAccessToken } from "@/services/auth/auth.helper"
import { AuthService } from "@/services/auth/auth.service"
import { EnumSecureStore } from "@/types/auth.interface"
import { getItemAsync } from "expo-secure-store"
import { useEffect } from "react"

export const useCheckAuth = (routeName?: string) => {
    const {user, setUser} = useAuth()

    useEffect(()=>{
        const checkAccesToken = async () => {
            const accessToken = await getAccessToken()

            if(accessToken) {
                try {
                    await getNewTokens()
                } catch (e) {
                    if(errorCatch(error) === 'jwt expired') {
                        await AuthService.logout()
                        setUser(null)
                    }
                }
            }
        }

        let ignore = checkAccesToken()
    },[])

    useEffect(()=>{
        const checkRefreshToken = async () => {
            const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)

            if(!refreshToken && user) {
                await AuthService.logout()
                setUser(null)    
            }
        }

        let ignore = checkRefreshToken()
    },[routeName])
}