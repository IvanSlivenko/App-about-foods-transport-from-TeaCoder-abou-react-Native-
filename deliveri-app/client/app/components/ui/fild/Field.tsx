import { View, Text } from 'react-native'
import { IFild } from './fild.interface'
import { Controller } from 'react-hook-form'
import { gStyle } from 'styles/style'


const Field = <T extends Record<string, any>>({
    control,
    rules,
    name,
    ...rest
}: IFild<T>): JSX.Element => {
    return (
        <Controller 
            control={control}
            name={name}
            rules={rules}
            render={({
                field: {value, onChange, onBlur}, 
                fieldState: {error}
                }) => <>
                <View style={gStyle.style_11}> </View>
                {/* bg-white w-full, rounded-lg, pd-4 pt-2.5 px-4 my-1.5*/}
            </>}        
        />
    )
}

export default Field