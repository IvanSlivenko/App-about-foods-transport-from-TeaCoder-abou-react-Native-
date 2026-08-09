import  { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Toast from 'react-native-toast-message'
import { errorCatch } from './error.api'
import instance from './interceptors.api'

export const request = async<T> (config: AxiosRequestConfig) => {
    const onSuccess =(response: AxiosResponse<T>) => response.data
    
    
    const onError =(error: AxiosError<T>)=>{
        // console.log("-------------------------------- onError in request.api.ts");

        // console.log('================ AXIOS ERROR ================')
        // console.log('message:', error.message)
        // console.log('code:', error.code)
        // console.log('name:', error.name)
        // console.log('response:', error.response)
        // console.log('request:', error.request)
        // console.log('config:', error.config)
        // console.log('==============================================')
        
        Toast.show({
            type: 'error',
            text1: 'RequestEror',
            text2: errorCatch(error)
        })
        return Promise.reject(error)
    }

    return instance(config).then(onSuccess).catch(onError) 
}

