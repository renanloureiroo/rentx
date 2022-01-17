import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Container, IconContainer, InputText } from "./styles"
import { useTheme } from "styled-components"
import { TextInputProps } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"]
}

export const PasswordInput = ({ iconName, value, ...rest }: Props) => {
  const [isVisible, setIsVisible] = useState<Boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const theme = useTheme()

  const handleVisiblePassword = () => {
    setIsVisible((v) => !v)
  }
  return (
    <Container>
      <IconContainer isFocus={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={!!value ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>

      <InputText
        isFocus={isFocused}
        value={value}
        {...rest}
        placeholderTextColor={theme.colors.text_detail}
        secureTextEntry={!isVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <BorderlessButton onPress={handleVisiblePassword} borderless={false}>
        <IconContainer isFocus={isFocused}>
          <Feather
            name={isVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}
