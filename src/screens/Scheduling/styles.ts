import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

interface DateValueProps {
  selected: boolean
}

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background: ${({ theme }) => theme.colors.header};

  padding: ${getStatusBarHeight() + 19}px 24px 32px;
  justify-content: flex-end;
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
  margin-top: 32px;
`

export const RentPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 32px 0px;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;

  ${({ selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.text};
    `}
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``

export const Footer = styled.View`
  padding: ${getBottomSpace() + 24}px 24px;
`
