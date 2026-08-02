import Field from '@/components/ui/fild/Field'
import { IAuthFormData } from '@/types/auth.interface'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { validEmail } from './email.regex'
import { gStyle } from 'styles/style'

interface IAuthFields {
    control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({control}) => {
    return (
        <>
        <Field<IAuthFormData>
            // style={gStyle.style_16}
            placeholder='Enter email'
            control = {control}
            name='email'
            rules={{
                required: 'Email is required',
                pattern : {
                     value: validEmail,
                     message: 'Please anter a valid email adress '
                }
            }}
            keyboardType='email-address'
            />

            <Field<IAuthFormData>
            // style={gStyle.style_16}
            placeholder='Enter password'
            control = {control}
            name='password'
            secureTextEntry
            rules={{
                required: 'password is required',
                minLength : {
                     value: 6,
                     message: 'Password should be minimum 6 characters'
                }
            }}
            
            />
                  </>
    )
}

export default AuthFields