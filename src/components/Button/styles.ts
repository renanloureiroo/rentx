import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface Props extends RectButtonProps {
  color?: string
  loading: boolean
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: 16px;
  background: ${({ theme, color }) => (color ? color : theme.colors.main)};
  opacity: ${({ enabled, loading }) =>
    enabled === false || loading == true ? 0.5 : 1};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`
