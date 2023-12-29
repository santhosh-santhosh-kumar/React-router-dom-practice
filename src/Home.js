import React from 'react'

function Home() {
    const array=["santhosh","guvi","tamil","b.tech"]
  return (
    <>
    {
        array.map((value)=>{
            if(value=="santhosh"){
               return <p className='color' onClick={()=>alert("hello santhosh")}>{value}</p>
            }else{
                return (
                    <p className='color'>{value}</p>
                )
    
            }
        })
    }
    </>
  )
}

export default Home

