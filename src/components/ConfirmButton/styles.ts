import { BorderlessButton } from "react-native-gesture-handler"
import styled from "styled-components/native"

export const Container = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  padding: 19px 25px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`
