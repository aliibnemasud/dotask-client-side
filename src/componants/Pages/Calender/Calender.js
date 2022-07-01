import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="mx-auto">
                <DayPicker
                    className='my-10'
                    selected={selected}
                    setSelected={setSelected}
                ></DayPicker>
            </div>
        </div>
    );
};

export default Calender;