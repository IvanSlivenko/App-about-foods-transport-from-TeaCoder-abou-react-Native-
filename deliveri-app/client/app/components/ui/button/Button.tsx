import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interface'
import { gStyle } from 'styles/style'
// import cn from 'clsx'

const Button: FC<PropsWithChildren<IButton>> = ({
    children , 
    //className, 
    ...rest
}) => {
    return (
        //self-center, mt-3.5, bg-[#47AA52], w-full, py-3, font-light, rounded-lg
        <Pressable 
        
            
            style={[gStyle.style_6, gStyle.style_7]}
            {...rest}
        >
            <Text
                style={gStyle.style_8}
                //text-white, text-center font-mediumtext-lg,

            >
                {children}</Text>
        </Pressable>
    )
}

export default Button
