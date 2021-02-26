import { useState, useEffect } from 'react'


import { useParams } from 'react-router-dom'

function Post () {
 const [data, setData]= useState({
     loading: true,
     error: null,
     data: {},
 })

 const { postnumber } = useParams()

 useEffect(() => {
        const link = `https://jsonplaceholder.typicode.com/posts/${postnumber}`
        fetch(link)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData({ loading: false, data: data })
        })

    }, [])

    return (
      <>
      <h3>Post # {postnumber}</h3>
      <div>
            { data.loading && <>Loading...</>}
            { data.error && <>{data.error}</>}
            { !data.loading && <>
               <div>
                {data.data.title}
               </div>
               <div>
                {data.data.body}
               </div>
            </>}
      </div>
      </>
    )
}

export default Post