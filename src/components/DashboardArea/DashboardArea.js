import React, { useEffect, useContext, useState } from 'react'
import ClassBox from '../classBox'
import { AllContext } from "../../Context";
import StudentJoinClass from '../../Pages/StudentJoinClass';


const DashboardArea = () => {
    const [AllClasses, setAllClasses] = useState([]);

    const { GetRepel } = useContext(AllContext);
    

    const loadData = async () => {
        if (localStorage.getItem('token')) {
            const data = await GetRepel()
            if (data.success) {
                console.log(data);
                setAllClasses(data.classData)
            }
        }
    }
    useEffect(() => {
        loadData();
        
    }, [])


    return (
        <div>
            {localStorage.getItem("role").toLowerCase()==="student"?<StudentJoinClass/>:""}
            {
                (AllClasses) ?
                    (AllClasses.map((note) => {
                        return <ClassBox key={note._id} data={note} />
                    }))
                    :
                    (<div>
                        <h1>nothing found</h1>
                    </div>)
            }
        </div>
    )
}

export default DashboardArea