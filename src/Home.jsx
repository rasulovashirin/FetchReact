import { useState, useEffect } from 'react'

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
            <div className="container">
              { data.loading && <>Loading...</>}
              { data.error && <>{data.error}</>}
              { !data.loading && <>
                <ol>
                  {
                    data.data.map(post => {

                      return <li key={post.id}>
                        <a href={'/post/' + post.id}>{post.title}</a>
                      </li>
                    })
                  }
                </ol>

              </>
              }
            </div>
          </>
        )
}

export default Home