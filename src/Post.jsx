import { useState, useEffect } from 'react'


import { useParams, Link } from 'react-router-dom'

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
      <div className="container">
      <div className="post-wrapper">
      <h3 className="post-number">Post # {postnumber}</h3>
      <Link to="/" className="back-btn">Back</Link>
      </div>
            { data.loading && <>Loading...</>}
            { data.error && <>{data.error}</>}
            { !data.loading && <>
               <h4 className="post-title">
                {data.data.title}
               </h4>
               <p className="post-text">
                {data.data.body}
               </p>
            </>}
      </div>
      </>
    )
}

export default Post