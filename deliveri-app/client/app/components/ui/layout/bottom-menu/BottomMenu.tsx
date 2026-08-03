import { FC } from 'react'
import { View} from 'react-native'
import { TypeNavigate } from './menu.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { gStyle } from 'styles/style'
import { menuItems } from './menu.data'
import MenuItem from './MenuItem'

interface IBottomMenu {
    nav: TypeNavigate
    currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
    
    const { bottom } = useSafeAreaInsets()
    
    return (
        <View style={[gStyle.style_18, {paddingBottom: bottom +20}]}>
            {menuItems.map(item => (
                <MenuItem key={item.path} item={item} {...props}/>
            ))}
        </View>
    )
}

export default BottomMenu