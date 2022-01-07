import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
  background: ${({ theme }) => theme.colors.header};

  padding: ${getStatusBarHeight() + 19}px 34px 32px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-top: 24px;
`
