import { IconProps } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: React.FC<IconProps>;
}

const ButtonIcon = ({ icon: Icon, ...rest }: ButtonIconProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
