import { useEffect,useState } from "react"
import { fetchTopStories } from "../library/api"
import NewsList from "../components/newlist"
import SearchBar from "../components/searchbar"
import Swal from "sweetalert2";

export default function Home(){
    const[articles,setArticles]=useState<any[]>([]);
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        Swal.fire({
            title: "Loading latest news...",
            text: "Please wait while we fetch the articles",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
         fetchTopStories()
            .then(data => {
                setArticles(Array.isArray(data) ? data : []);
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Error", "Failed to fetch news data", "error");
            })
            .finally(() => {
                setLoading(false);
                Swal.close();
            });
    },[]
);
if (loading) return null;
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