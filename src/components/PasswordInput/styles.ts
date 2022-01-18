import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

interface Props {
  isFocus: boolean
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
`

export const IconContainer = styled.View<Props>`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  ${({ isFocus, theme }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 0px 23px;
  margin-left: 2px;

  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  ${({ isFocus, theme }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`
