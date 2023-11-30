import { useState, useEffect } from "react"
import { getSearchedContent } from '../lib/bdClient'
import {Link} from '@nextui-org/react'

const SearchResults = () => {
  const getQuery = location.search.split('?query=').join('')
  const [searchedData, setSearchedData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSearchedData = async () => {
        try {
            const searchedContent = await getSearchedContent(getQuery)
            setSearchedData(searchedContent)
            setLoading(false) 
        } catch (error) {
            setLoading(false) 
            console.error(error)
        }
    }

    loadSearchedData();
  }, [])

  return (
    <div>{!loading ? searchedData.map(article => <div key={article._id}><Link href={`/article/${article.categoryId}`} >{article.headline}</Link></div>): <p>Loading...</p>}</div>
  )
}

export default SearchResults