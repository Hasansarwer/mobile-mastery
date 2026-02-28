import React from 'react';
import { Text, TextProps } from 'react-native';
import { colors, fontSizes } from '../theme';

type Props = TextProps & {
  fontSize?: keyof typeof fontSizes;
};

export default function AppText({ fontSize = 'md', style, ...props }: Props) {
    return (
        <Text
            style={[
                {
                    fontSize: fontSizes[fontSize],
                    color: colors.light.text,
                },
                style,
            ]}
            {...props}
        />
    );
}