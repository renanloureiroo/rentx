import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Container, IconContainer, InputText } from "./styles"
import { useTheme } from "styled-components"
import { TextInputProps } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"]
}

export const PasswordInput = ({ iconName, ...rest }: Props) => {
  const [isVisible, setIsVisible] = useState<Boolean>(false)

  const theme = useTheme()

  const handleVisiblePassword = () => {
    setIsVisible((v) => !v)
  }
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText
        {...rest}
        placeholderTextColor={theme.colors.text_detail}
        secureTextEntry={!isVisible}
      />

      <BorderlessButton onPress={handleVisiblePassword} borderless={false}>
        <IconContainer>
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
