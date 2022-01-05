import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { FlatList } from "react-native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`

export const ContentHeader = styled.View`
  width: 100%;
  padding: 32px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`

export const CarList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 24 },
})``
