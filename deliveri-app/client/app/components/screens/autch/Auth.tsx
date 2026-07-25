
import Button from '@/components/ui/button/Button';
import Loader from '@/components/ui/Loader';
import { IAuthFormData } from '@/types/auth.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View, Text, Pressable } from 'react-native'

import { gStyle } from 'styles/style';

const Auth: FC = () => {
    
    const [isReg, setIsReg] = useState(false)

    const {handleSubmit, reset, control} = useForm<IAuthFormData>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        console.log("data from onSubmit", data);
        
    }

    const isLoading=false

    return (
       

        <View 
            // className='mx-2 items-center justify-center h-full' 
            style={gStyle.style_3}
        >
            <View 
                //className='w-9/12'
                style={gStyle.style_4}>
                    <Text 
                            //className='text-center text-black text-3xl font-mediummb-8'
                            style={gStyle.style_5}
                        >
                        {isReg ? 'Sign Up' : 'Login'}
                    </Text>

                    {isLoading ? <Loader/> : <> 
                            {/* Auth FieldS */}


                    <Button onPress={handleSubmit(onSubmit)}>{isReg ? 'Sign Up' : 'Login'}</Button>

                    <Pressable onPress={()=> setIsReg(!isReg)}>
                        <Text style={gStyle.style_9}>
                            {isReg 
                                ? 'Already have an account ? ' 
                                : "Don't have an account. "}
                            <Text style={gStyle.style_10}>
                                  {isReg ? 'Sign Up' : 'Login'}  
                            </Text>

                        </Text>
                    </Pressable>
                    
                    </>}

            </View>
        </View>
    )
}

export default Auth

