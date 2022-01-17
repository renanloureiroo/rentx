import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Container, IconContainer, InputText } from "./styles"
import { useTheme } from "styled-components"
import { TextInputProps } from "react-native"

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"]
}

export const Input = ({ iconName, value, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const theme = useTheme()
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  )
}
