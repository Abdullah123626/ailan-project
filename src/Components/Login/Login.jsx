    import React, { useState } from 'react'





const Login = () => {
  const [num, setNum] = useState(10)
  const [num2, setNum2] = useState(0)







  return (
    <div>
      <h3>Number is {num} </h3>
      <button onClick={()=>setNum(num+10)}>Increase</button>
            <button onClick={()=>setNum(num-10)}>Decrease</button>

<h4>Number is {num2}</h4>
            <button onClick={()=>setNum2(num2-10)}>Decrease</button>

    </div>














  )
}

export default Login








