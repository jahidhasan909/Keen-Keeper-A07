import React, { useState } from 'react';
import { TimeLineContect } from './ContectContect';



const ContextProvider = ({ children }) => {


    const [timeLineContect, setTimeLineContect] = useState([])

    const data = {
        timeLineContect,
        setTimeLineContect
    }

    return <TimeLineContect.Provider value={data}>
        {children}
    </TimeLineContect.Provider>

};

export default ContextProvider;