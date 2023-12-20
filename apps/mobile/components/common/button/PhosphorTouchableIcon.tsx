import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Icon as PhosphorIcon } from 'phosphor-react-native';

interface PhosphorIconProps extends TouchableOpacityProps {
    icon: PhosphorIcon;
    size?: number;
    color?: string;
    IconWeight?;
}

const PhosphorTouchableIcon = ({
    icon: Icon,
    size,
    color = '#000',
    IconWeight = 'regular',
    ...rest
}: PhosphorIconProps) => {
    return (
        <TouchableOpacity {...rest} hitSlop={{ top: 20, bottom: 20 }}>
            <Icon size={size} color={color} weight={IconWeight} />
        </TouchableOpacity>
    );
};

export default PhosphorTouchableIcon;
