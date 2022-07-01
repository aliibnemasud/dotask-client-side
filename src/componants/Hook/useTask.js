import React, { useEffect, useState } from 'react';

const useTask = () => {

    const [alltask, setAllTask] = useState([]);

    useEffect(()=> {
        fetch("https://radiant-lowlands-88709.herokuapp.com/alltask")
        .then(res => res.json())
        .then(data => setAllTask(data))

    }, [])
    return [alltask]
}

export default useTask;