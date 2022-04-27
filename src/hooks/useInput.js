import { useState } from "react"

const useInput = (value, maxLength) => {
  const [state, setState] = useState(value)

  const onChange = (e) => {
    let { value } = e.target

    if (maxLength && value > maxLength) {
      value = value.substring(0, maxLength)
    }

    setState(value)
  }

  return [state, onChange]
}

export default useInput