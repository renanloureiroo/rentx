import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};

  padding: 0px 24px;
`

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 18}px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colors.background_primary};
  z-index: 1;
  padding-bottom: ${RFPercentage(10)}px;
`
export const Steps = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  margin: 20px 0px 16px 0px;
`

export const FormTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title_200};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-bottom: 24px;
`
