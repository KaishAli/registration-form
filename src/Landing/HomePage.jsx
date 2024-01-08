import { wait } from '@testing-library/user-event/dist/utils'
import '../../src/Landing/homepage.css'
import { SimpleFetch } from '../component/SimpleFetch'
import { useEffect, useState } from 'react'
function HomePage() {
    const [getData, setgetData] = useState([])

    async function datGeta(params) {
        try {
            const fetechDataaa = await SimpleFetch()
            setgetData(fetechDataaa)
        } catch (error) {

        }
    }
    // useEffect(() => {
    //     datGeta()
    // }, [])
    console.log(getData)
    return (
        <>
            <button onClick={datGeta} className="abc"> Fetch Data</button>
            {
                getData.map((dataItem, index) => {
                    return <>
                        <div className="img">
                            <img key={index} src={dataItem.thumbnailUrl} />
                        </div>
                    </>
                })
            }
        </>
    )
}
export default HomePage