import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;
  background: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 16px;
`

export const Details = styled.View``

export const About = styled.View`
  margin-top: 16px;
`

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  text-transform: uppercase;
`
export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  text-transform: uppercase;
`

export const Model = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  margin-right: 24px;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Type = styled.View`
  justify-content: center;
  align-items: center;
`

export const CardImage = styled.Image`
  width: 160px;
  height: 92px;
`
