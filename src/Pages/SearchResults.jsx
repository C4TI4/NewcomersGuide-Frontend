import { useState, useEffect } from "react"
import { getSearchedContent } from '../lib/dbClient'
import {Link} from '@nextui-org/react'
import { useOutletContext } from "react-router-dom"

const SearchResults = () => {
  const searchQuery = useOutletContext()
  const [searchedData, setSearchedData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSearchedData = async () => {
        try {
            const { data, status } = await getSearchedContent(searchQuery)
            if (status === 400) {
              setLoading(false) 
            }
            setSearchedData(data)
            setLoading(false) 
        } catch (error) {
            setLoading(false) 
            console.error(error)
        }
    }

    loadSearchedData();
  }, [searchQuery])

  return (
    <div>{!loading ? !searchedData || !searchedData.length ? <p>Your search has no matching results :(</p> : searchedData.map(article => <div key={article._id}><Link href={`/article/${article.categoryId}`} >{article.headline}</Link></div>) : <p>Loading...</p>}</div>
  )
}

export default SearchResults