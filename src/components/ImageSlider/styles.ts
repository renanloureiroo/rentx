import { Dimensions } from "react-native"
import styled from "styled-components/native"

interface ImageIndexProps {
  active: boolean
}

export const Container = styled.View`
  width: 100%;
`

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`
export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  background: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  border-radius: 3px;

  margin-left: 8px;
`
export const CardWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  align-items: center;
  justify-content: center;
`
export const CardImage = styled.Image`
  width: 280px;
  height: 132px;
`
