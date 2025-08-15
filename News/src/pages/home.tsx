import { useEffect,useState } from "react"
import { fetchTopStories } from "../library/api"
import NewsList from "../components/newlist"
import SearchBar from "../components/searchbar"

export default function Home(){
    const[articles,setArticles]=useState<any[]>([]);
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchTopStories().then(data=>{
            setArticles(data);
            setLoading(false);
        })
    },[]
);
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold uppercase">
                latest news
            </h1>
            <div className="block lg:hidden">
            <SearchBar />
            </div>
            <NewsList items={Array.isArray(articles) ? articles : []} />

        </div>
    )
}