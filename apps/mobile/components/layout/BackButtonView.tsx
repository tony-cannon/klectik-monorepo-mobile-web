import React from 'react';
import { ColorTokens, Flex, Icons, Text } from '@klectik/ui';

type Props = {
  size?: number
  color?: ColorTokens
  showButtonLabel?: boolean
}

export function BackButtonView({ size, color, showButtonLabel }: Props): JSX.Element {

  return (
    <Flex row alignItems="center" gap="$spacing8">
      <Icons.RotatableChevron color={color ?? '$neutral2'} height={size} width={size} />
      {showButtonLabel && (
        <Text color="$neutral2" variant="subheading1">
          Back
        </Text>
      )}
    </Flex>
  )
}