import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 109px;
  height: 92px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin-bottom: 8px;
`

export const Name = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-top: 12px;
`
