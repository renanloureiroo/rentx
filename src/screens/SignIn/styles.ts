import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};

  align-items: center;
  justify-content: center;
  padding: 0px 24px;

  padding-top: ${getStatusBarHeight() + RFPercentage(10)}px;
`

export const Header = styled.View`
  width: 100%;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title_200};
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  line-height: ${RFValue(25)}px;

  margin-top: 26px;
`

export const Form = styled.View`
  width: 100%;
  margin: 64px 0px;
`

export const Footer = styled.View`
  width: 100%;
`
