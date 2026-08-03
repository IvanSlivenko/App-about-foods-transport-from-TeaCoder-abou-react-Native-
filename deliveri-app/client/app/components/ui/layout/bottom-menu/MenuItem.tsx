import { FC } from 'react'
import { IMenuItem, TypeNavigate } from './menu.interface'
import { gStyle } from 'styles/style'
import { Feather } from'@expo/vector-icons'
import { Pressable } from 'react-native'

interface IMenuItemProps {
    item: IMenuItem
    nav: TypeNavigate
    currentRout?: string 
}

const MenuItem: FC<IMenuItemProps> = ({item, nav, currentRout}) => {

    const isActive = currentRout === item.path

    return (
        <Pressable 
        style={gStyle.style_17}    
        onPress={ () =>nav(item.path)}
            >
                <Feather
                    name={item.icon}
                    size={26}
                    color={isActive ? '#47AA52' : '#374151'}
                />
            
        </Pressable>
    )
}

export default MenuItem