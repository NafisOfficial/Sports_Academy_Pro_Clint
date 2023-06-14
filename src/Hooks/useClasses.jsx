import { useEffect, useState } from "react";


const useClasses = () => {

    const [loading,setLoading] = useState(true)
    const [allClass, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data =>{
                setClasses(data);
                setLoading(false);
            });
    }, [])




    return [allClass,loading]
    
}

export default useClasses;