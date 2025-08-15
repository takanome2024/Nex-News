import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopStories } from "../library/api";
import NewsList from "../components/newlist";
import Swal from "sweetalert2";

export default function Category() {
    const { slug } = useParams();
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (slug) {
    //         fetchTopStories(slug).then(data => {
    //             setArticles(data);
    //             setLoading(false);
    //         })
    //     }
    // }, [slug]);

    useEffect(()=>{
        if (slug){
            Swal.fire({
                title:"Loading News ...",
                text:"Please Wait",
                allowOutsideClick:false,
                didOpen:()=>{
                    Swal.showLoading();
                }
            });
            fetchTopStories(slug.toLowerCase())
            .then(data=>{
                setArticles(Array.isArray(data)?data:[]);
            })
            .catch(err=>{
                console.error(err);
                setArticles([]);
            })
            .finally(()=>{
                setLoading(false);
            Swal.close();
        })
        }
    },[slug]);

    if (loading) return null;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold capitalize">{slug} news</h1>
            <NewsList items={articles} />
        </div>
    )
}