import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.header};
  align-items: center;
  justify-content: space-between;
  padding: 69px 16px 32px 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`
