import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface Props extends RectButtonProps {
  color?: string
  loading: boolean
}

interface TextProps {
  light: boolean
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: 16px;
  background: ${({ theme, color }) => (color ? color : theme.colors.main)};
  opacity: ${({ enabled, loading }) =>
    enabled === false || loading == true ? 0.5 : 1};
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;
`

export const Title = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme, light }) =>
    light ? theme.colors.title : theme.colors.shape};
  font-size: ${RFValue(15)}px;
`
