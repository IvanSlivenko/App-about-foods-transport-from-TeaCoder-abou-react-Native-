import { 
    Control, 
    FieldValues,
    FieldPath,
    RegisterOptions

} from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IFild<T extends FieldValues>
    extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'>{
    control: Control<T>
    name: FieldPath<T>
    rules?: Omit<
        RegisterOptions<T, FieldPath<T>>,
        'valueAsNumber'|'valueAsDate'|'setValueAs'|'disabled'
    >     
}