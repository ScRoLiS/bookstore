import { useSelector } from "react-redux"

const useAuth = () => {
  const jwt = useSelector(state => state.user.jwt)

  return jwt ? true : false
}

export default useAuth