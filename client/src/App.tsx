import * as React from "react";
import { DatePicker } from 'antd';
import "antd/dist/antd.css";

// interface IProps {
//  name: string
//  text: string
//  log: () => void
// }

export const App: React.FC= () => {


    return (
        <div>
            <h1>PUPPY CHORES</h1>
            <DatePicker />
        </div>
    )
};

