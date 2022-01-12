import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface Props extends RectButtonProps {
  color?: string
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: 16px;
  background: ${({ theme, color }) => (color ? color : theme.colors.main)};
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`
