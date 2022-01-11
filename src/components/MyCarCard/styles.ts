import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(170)}px;
  background: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 16px;
`
export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  text-transform: uppercase;
`

export const Footer = styled.View`
  width: 100%;

  padding: 12px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -16px;

  border-top-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.line};
`
export const PeriodSchedule = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
  padding: 0px 10px;
`
