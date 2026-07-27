import { View, Text } from 'react-native'
import { IFild } from './fild.interface'

const Field = <T extends Record<string, any>>({
    control,
    rules,
    name,
    ...rest
}: IFild<T>): JSX.Element => {
    return (
        <View>
            <Text>Field</Text>
        </View>
    )
}

export default Field