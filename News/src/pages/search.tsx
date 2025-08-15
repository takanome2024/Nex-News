import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchArticles } from "../library/api";
import NewsList from "../components/newlist";
import Swal from "sweetalert2";
import SearchBar from "../components/searchbar"

export default function Search(){
    const {search}=useLocation();
    const query=new URLSearchParams(search).get("q")||"";
    const[articles,setArticles]=useState<any[]>([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        if(query){
             Swal.fire({
                            title:"Loading News ...",
                            text:"Please Wait",
                            allowOutsideClick:false,
                            didOpen:()=>{
                                Swal.showLoading();
                            }
                        });
            searchArticles(query).then(data=>{
                const mapped=data.map((item:any)=>({
                    title:item.headline.main,
                    abstract:item.abstract||item.snippet,
                    url:item.web_url,
                    multimedia:item.multimedia?.length
                    ?[{url:"https://nytimes.com/"+item.multimedia[0].url}]
                    :[]
                }));
                setArticles(mapped);
                setLoading(false);
                Swal.close();
            })
        }
    },[query])

    if(loading)return null

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold">Search result for: {query}</h1>
            <div className="block lg:hidden">
                        <SearchBar />
                        </div>
            <NewsList items={articles} />
        </div>
    )
}