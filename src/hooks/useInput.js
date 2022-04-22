import { useState } from "react"

const useInput = (value) => {
  const [state, setState] = useState(value)

  const onChange = (e) => {
    setState(e.target.value)
  }

  return [state, onChange]
}

export default useInput