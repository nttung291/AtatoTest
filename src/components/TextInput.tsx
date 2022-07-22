import React, { ComponentProps } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput as DefaultTextInput } from 'react-native-paper';
import { Colors } from '@atatotest-theme';

type InputMode = 'outlined' | 'flat';
export type TextInputProps = {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  mode?: InputMode;
} & Omit<
  ComponentProps<typeof DefaultTextInput>,
  'style' | 'mode'
>;

export const TextInput = ({
  style,
  mode,
  placeholder,
  ...props
}: TextInputProps): JSX.Element => {

  return (
    <DefaultTextInput
      mode={mode}
      placeholder={placeholder}
      style={style}
      activeOutlineColor={Colors.tint}
      {...props}>
    </DefaultTextInput>
  );
};
