import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLineContect } from '../../Context/ContectContect';


const Stats = () => {


    const { timeLineContect } = useContext(TimeLineContect)

    const fillterContectByText = timeLineContect.filter(contect => contect.status === 'text').length
    const fillterContectByCall = timeLineContect.filter(contect => contect.status === 'call').length
    const fillterContectByVideo = timeLineContect.filter(contect => contect.status === 'video').length


    const data = [
        { name: "Video", value: fillterContectByVideo, fill: "#244d3f" },
        { name: "Call", value: fillterContectByCall, fill: "#37a163" },
        { name: "Text", value: fillterContectByText, fill: "#7f37f5" }
    ];
    return (
        <div className='container mx-auto mt-40 mb-24'>
            <h1 className='mb-5 text-xl md:text-4xl font-bold'>Friendship Analytics</h1>
            <div className='bg-base-100 shadow-sm rounded-sm pb-7'>
                <h4 className='pt-8 pb-5 px-8 text-xl text-[#244D3F]'>By Interaction Type</h4>




                <PieChart
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        maxHeight: "80vh",
                        margin: "auto",
                        aspectRatio: 1,
                    }}
                    responsive
                >
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />

                    <Legend />
                    <Tooltip />
                </PieChart>



            </div>
        </div>
    );
};

export default Stats;