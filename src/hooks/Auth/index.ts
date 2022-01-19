import { useContext } from "react"
import { AuthContext, AuthContextData } from "../../contexts/Auth"

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  return context
}
