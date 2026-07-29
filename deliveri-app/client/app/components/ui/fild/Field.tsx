import { View, Text, TextInput } from 'react-native'
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
                <View  style={error ? gStyle.style_12 : gStyle.style_11}> 

                    <TextInput 
                        autoCapitalize='none' onChangeText={onChange} 
                        onBlur={onBlur}
                        value={(value || '').toString()} style={gStyle.style_13}
                        placeholderTextColor='#6A6A6A'
                        {...rest}
                        />
                </View>
                {error && (
                    <Text style={gStyle.style_14}>{error.message}</Text>
                )}


            </>}        
        />
    )
}

export default Field