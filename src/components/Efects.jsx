import { useEffect, useState } from "react";

export default function Efectos() {
  const [time, setTime] = useState(null);

  useEffect(() => {
      const intervalo = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            console.log('termino')
            clearInterval(intervalo)
        }

  },[]);

  

  return <>
        <div className="container">
            <h1>Hora actual</h1>
            {time}
        </div>
  </>;
}
