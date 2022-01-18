import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};

  padding: 0px 24px;

  padding-top: ${getStatusBarHeight() + 18}px;
`

export const Header = styled.View`
  width: 100%;
  margin-top: 64px;
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

  margin-top: 16px;
`

export const Form = styled.View`
  margin: 64px 0px 16px 0px;
`

export const FormTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title_200};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-bottom: 24px;
`
