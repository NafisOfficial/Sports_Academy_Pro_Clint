import { useEffect, useState } from "react";


const useClasses = () => {

    const [loading,setLoading] = useState(true)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data =>{
                setClasses(data);
                setLoading(false);
            });
    }, [])




    return [classes,loading]
    
}

export default useClasses;