import { BorderlessButton } from "react-native-gesture-handler"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.header};
  height: ${RFValue(227)}px;

  padding: ${getStatusBarHeight() + 30}px 18px 0px;

  align-items: center;
`
export const HeaderTop = styled.View`
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
export const LogOutButton = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

export const AvatarWrapper = styled.View`
  border-radius: 90px;
  position: absolute;
  bottom: -90px;
`

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
`
