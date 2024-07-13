// let Chai = () => {
//     return(
//         <h1>Chai is ready !!</h1>
//     )
// }

// export default Chai

import React, { useEffect } from 'react';

let isLoading = true;
const Stories = () => {
    let API = 'https://hn.algolia.com/api/v1/search?query=html';
    const fetchApiData = async(url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        isLoading = false;
    }catch (error) {
        console.log(error);
    }
};

    useEffect (() => {
        fetchApiData(API);
    },[]);

    if(isLoading){
        return (
            <>
                <h2>Loading...</h2>
            </>
        )
    }
    return (
        <>
        <h2>My Tech News Post</h2> 
        </>
    )
}

export default Stories;