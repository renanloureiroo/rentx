import { BorderlessButton } from "react-native-gesture-handler"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.header};

  align-items: center;
  justify-content: center;

  padding-top: ${getStatusBarHeight() + 24}px;
`

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  line-height: ${RFValue(25)}px;

  margin-top: 16px;
`

export const Footer = styled.View`
  margin: ${getBottomSpace() + 46}px;
  justify-content: center;
  align-items: center;
`
