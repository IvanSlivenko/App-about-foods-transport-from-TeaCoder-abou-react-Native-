import { IAuthFormData } from '@/types/auth.interface'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { View, Text } from 'react-native'

interface IAuthFields {
    control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({control}) => {
    return (
        <>
                  </>
    )
}

export default AuthFields