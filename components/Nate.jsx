import React, {useState} from 'react'

const Nate = () => {
    const [showNate, setShowNate] = useState(false)
    const handleNate = () => {
        setShowNate(!showNate)
    }
  return (
    
    <div>
        <button onClick={handleNate}>nate</button>
        {showNate ? "nate" : "burugu"}
    </div>
  )
}

export default Nate