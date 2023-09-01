import { useEffect, useState } from 'react'
import style from './Timebar.module.css'
const Timebar = () => {
    const [time,setTime] = useState("")
    const setCurrentTime = () =>{
        setTimeout(()=>{
            let t = new Date()
            let currTime = t.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            if(currTime != time)
             setTime(currTime)
            setCurrentTime()
        },100)
    }
    useEffect(()=>{
        setCurrentTime()
    },[])

    return <div className={style.Timebar}>{time}</div>
}
export default Timebar