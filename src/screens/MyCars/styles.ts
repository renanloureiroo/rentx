import { FlatList, FlatListProps } from "react-native"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { CarDTO } from "../../dtos/CarDTO"

interface Props {
  user_id: number
  car: CarDTO
  id: number
  period: {
    start: number
    startFormatted: string
    end: number
    endFormatted: string
  }
}

export const Container = styled.View`
  flex: 1;
`
export const Header = styled.View`
  height: ${RFValue(273)}px;
  background: ${({ theme }) => theme.colors.header};
  padding: 0px 24px;
  padding-top: ${getStatusBarHeight() + 30}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-top: 30px;
`
export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  margin-top: 18px;
`

export const Content = styled.View`
  flex: 1;
`

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ListTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 5px;
`

export const ListTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`
export const Contador = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
`

export const MyCarsList = styled(
  FlatList as new (props: FlatListProps<Props>) => FlatList<Props>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
  },
})``
