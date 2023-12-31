import { useEffect, useState } from "react";



const useInstructors = () => {

    const [loading,setLoading] = useState(true)
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://sports-server-nafisofficial.vercel.app/instructors')
            .then(res => res.json())
            .then(data =>{
                setInstructors(data);
                setLoading(false);
            });
    }, [])




    return [instructors,loading]
};

export default useInstructors;