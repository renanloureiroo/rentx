import styled from "styled-components/native"

import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 27}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  showVerticalScrollIndicator: false,
})``

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`

export const Description = styled.View``

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`
export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
`
