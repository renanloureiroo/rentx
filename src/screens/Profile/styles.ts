import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

interface TitleSwitchProps {
  active?: boolean
}

export const Container = styled.View``

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  height: ${RFPercentage(30)}px;
  padding: 0px 24px;

  align-items: center;
`
export const HeaderTop = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(25)}px;
`
export const LogoutButton = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

export const AvatarWrapper = styled.View`
  border-radius: 90px;
  position: absolute;
  bottom: -90px;
  width: 180px;
  height: 180px;

  background: ${({ theme }) => theme.colors.shape};
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`

export const ChangeAvatarWrapper = styled(RectButton)`
  background: ${({ theme }) => theme.colors.main};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  position: absolute;

  bottom: 10px;
  right: 10px;
`

export const Content = styled.View`
  margin-top: 120px;
  padding: 0px 24px;
`

export const SwitchForm = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  margin-bottom: 24px;
`

export const TitleWrapper = styled.View<TitleSwitchProps>`
  ${({ theme, active }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}

  margin-left: 24px;
`

export const TitleSwitch = styled.Text<TitleSwitchProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.text_detail};

  padding-bottom: 14px;
`

export const Form = styled.View`
  margin-bottom: 16px;
`
