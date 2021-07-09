import React from 'react'

export default function AsyncComponent({ get }) {
    const [display, setDisplay] = React.useState(null);

    const getData = async () => {
        try {
            const data = await get();
            setDisplay(data);
        } catch (err) {
            setDisplay("ERROR");
        }
    }

    return (
        <div>
            <button onClick={getData}>Get Data</button>
            {
                display && (
                    <div className='display'>
                        {display}
                    </div>
                )
            }
        </div>
    )
}
