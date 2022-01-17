import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
`

export const IconContainer = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`

export const InputText = styled.TextInput`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 0px 23px;
  margin-left: 2px;

  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`
