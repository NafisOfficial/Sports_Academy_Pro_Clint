import { useEffect, useState } from "react";


const useClasses = () => {

    const [loading,setLoading] = useState(true)
    const [allClass, setClasses] = useState([])

    useEffect(() => {
        fetch('https://sports-server-nafisofficial.vercel.app/classes')
            .then(res => res.json())
            .then(data =>{
                setClasses(data);
                setLoading(false);
            });
    }, [])




    return [allClass,loading]
    
}

export default useClasses;