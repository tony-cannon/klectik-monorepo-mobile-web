import {
	ColorTokens,
	TouchableArea,
	TouchableAreaProps,
} from '@klectik/ui/src';
import { BackButtonView } from '@native/components/layout/BackButtonView';
import { useNavigation } from '@react-navigation/native';

type Props = {
    size?: number;
    color?: ColorTokens;
    showButtonLabel?: boolean;
    onPressBack?: () => void;
} & TouchableAreaProps;

export function BackButton({
    onPressBack,
    size,
    color,
    showButtonLabel,
    ...rest
}: Props): JSX.Element {
    const navigation = useNavigation();

    const goBack = onPressBack
        ? onPressBack
        : (): void => {
              navigation.goBack();
          };
    return (
        <TouchableArea
            hapticFeedback
            alignItems="center"
            hitSlop={24}
            testID="buttons/back-button"
            onPress={goBack}
            {...rest}
        >
            <BackButtonView
                color={color}
                showButtonLabel={showButtonLabel}
                size={size}
            />
        </TouchableArea>
    );
}
