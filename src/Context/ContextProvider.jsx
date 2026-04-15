import React, { Suspense, useState } from 'react';
import { TimeLineContect } from './ContectContect';



const ContextProvider = ({ children }) => {


    const [timeLineContect, setTimeLineContect] = useState([])
    const [loading,setLoading]=useState(false)

    const data = {
        timeLineContect,
        setTimeLineContect,
        loading,
        setLoading
    }

    return <TimeLineContect.Provider value={data}>
        {children}
    </TimeLineContect.Provider>

};

export default ContextProvider;