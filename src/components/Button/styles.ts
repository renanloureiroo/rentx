import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled(RectButton)`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.main};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`
