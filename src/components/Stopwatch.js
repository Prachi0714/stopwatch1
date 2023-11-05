import React, { useState ,useEffect} from 'react';
import './Stopwatch.css'

const Stopwatch = () => {
   
        const [currentDate , setCurrentDate] = useState(new Date());
        useEffect(() =>{
            const interval = setInterval(() =>{
                setCurrentDate(new Date());
            },1000);
            return() =>{
                clearInterval(interval);
            }
        },[]);
        const daysOfWeek = ['Sunday', 'Monday' ,'Tuesday' , 'wednesday' , 'Thursday' , 'Friday','Saturday'];
    
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();
    const [hour , setHour] = useState(0);
    const [min , setMin] = useState(0);
    const [sec , setSec] = useState(0);
    const [running , setRunning] = useState(false);
 
    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                if(sec<59){
                    setSec(sec+1);
                }
                else if(min<59){
                    setSec(0);
                    setMin(min+1);
                }
                else{
                    setSec(0);
                    setMin(0);
                    setHour(hour+1);
                }
            },1000);
             }
        else{
            clearInterval(interval);
        }
        return()=>{
            clearInterval(interval);
        }
    },[hour,min,sec,running]);

    const startTimer = () =>{
        setRunning(true)
    }
    const stopTimer = ()=>{
        setRunning(false)
    }
    const resetTimer = () =>{
        setHour(0);
        setMin(0);
        setSec(0);
        setRunning(false);
    }

  return (
   <>
   <h1 className='main-heading'>Stopwatch</h1>
   <h2 className='main-headings'>{dayOfWeek} , {date} , {time}</h2>

    <div className='main-stopwatch'>

        <h1 className='head-stopwatch'>{hour.toString().padStart(2,'0')} : {min.toString().padStart(2,'0')} : {sec.toString().padStart(2 ,'0')}</h1>
        <button className='btn btn-primary' onClick={startTimer}>Start</button>
        <button className = 'btn btn-sec' onClick={stopTimer}>Stop</button>
        <button className='btn btn-third' onClick={resetTimer}>Reset</button>

    </div>
    </>
  )
}

export default Stopwatch
