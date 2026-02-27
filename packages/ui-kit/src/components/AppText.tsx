import React from 'react';
import { Text, TextProps } from 'react-native';
import { colors, typography } from '../theme';

type Props = TextProps & {
  size?: keyof typeof typography;
};

export default function AppText({ size = 'md', style, ...props }: Props) {
    return (
        <Text
            style={[
                {
                    fontSize: typography[size],
                    color: colors.light.text,
                },
                style,
            ]}
            {...props}
        />
    );
}