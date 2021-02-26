import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home () {

    const [data, setData] = useState({
        loading: true,
        error: null,
        data: []
      })

      useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          setData({ loading: false, data: data })
        })
        .catch(error => {
          setData({ error: "Xatolik yuz berdi" })
        })

      }, [])

      return(
          <>
            <div>
              { data.loading && <>Loading...</>}
              { data.error && <>{data.error}</>}
              { !data.loading && <>
                <div className="container">
                  {
                    data.data.map(post => {

                      // return <li key={post.id}>
                      //   <a href={'/post/' + post.id}>{post.title}</a>
                      // </li>
                      return(
                        <Link className="post-link" to={'/post/' + post.id}> {post.title}</Link>
                      )
                    })
                  }
                </div>

              </>
              }
            </div>
            <h3 className="post-choose">Choose any of this posts</h3>
          </>
        )
}

export default Home