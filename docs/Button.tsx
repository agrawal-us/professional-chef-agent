import React from "react";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";

import { tokens } from "@/theme";

import { buttonStyles } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  testID?: string;
  accessibilityLabel?: string;
};

const getVariantStyles = (
  variant: ButtonVariant,
): {
  base: ViewStyle;
  pressed: ViewStyle;
  disabled: ViewStyle;
  labelColor: string;
  spinnerColor: string;
} => {
  if (variant === "secondary") {
    return {
      base: { backgroundColor: tokens.colors.secondary },
      pressed: { backgroundColor: tokens.colors.secondaryPressed },
      disabled: { backgroundColor: tokens.colors.border },
      labelColor: tokens.colors.background,
      spinnerColor: tokens.colors.background,
    };
  }

  if (variant === "ghost") {
    return {
      base: {
        backgroundColor: tokens.colors.transparent,
        borderColor: tokens.colors.border,
        borderWidth: 1,
      },
      pressed: { backgroundColor: tokens.colors.surfaceElevated },
      disabled: { borderColor: tokens.colors.border },
      labelColor: tokens.colors.text,
      spinnerColor: tokens.colors.text,
    };
  }

  return {
    base: { backgroundColor: tokens.colors.primary },
    pressed: { backgroundColor: tokens.colors.primaryPressed },
    disabled: { backgroundColor: tokens.colors.border },
    labelColor: tokens.colors.background,
    spinnerColor: tokens.colors.background,
  };
};

export function Button({
  label,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  testID,
  accessibilityLabel,
}: ButtonProps) {
  const isDisabled = disabled || isLoading;
  const variantStyles = getVariantStyles(variant);

  const labelSizeStyle =
    size === "sm"
      ? buttonStyles.labelSm
      : size === "lg"
        ? buttonStyles.labelLg
        : undefined;

  const baseStyle = [
    buttonStyles.base,
    buttonStyles[size],
    variantStyles.base,
    isDisabled ? variantStyles.disabled : null,
  ];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      disabled={isDisabled}
      onPress={onPress}
      testID={testID}
      style={baseStyle}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variantStyles.spinnerColor}
          style={buttonStyles.spinner}
          testID={testID ? `${testID}-spinner` : undefined}
        />
      ) : null}
      <Text
        style={[
          buttonStyles.labelBase,
          labelSizeStyle,
          { color: variantStyles.labelColor },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
