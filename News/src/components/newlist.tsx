import { useState, useEffect } from "react";

interface NewsItem {
  title: string;
  abstract: string;
  url: string;
  multimedia?: { url: string }[];
}

export default function NewsList({ items = [] }: { items?: NewsItem[] }) {
  if (!Array.isArray(items)) items = [];
  const [visibleCount,setVisibleCount]=useState(9);

  useEffect(()=>{
    function handleScroll(){
    if(
        window.innerHeight+window.scrollY>=document.body.offsetHeight-300
  ){
    setVisibleCount((prev)=>Math.min(prev+6,items.length))
  } 
  }
  window.addEventListener("scroll",handleScroll);
  return()=>window.removeEventListener("scroll",handleScroll);
},[items.length]);

  return (
    <div className="grid gap-4 md:grid-cols-3 mt-4">
      {items.slice(0,visibleCount).map((item, idx) => {
        const imageUrl = item.multimedia?.[0]?.url;
        return(
        <a key={idx} target="_blank" rel="noopener noreferrer" href={item.url} className="card bg-base-100 shadow-xl">
          {imageUrl && (
            <figure>
              <img src={imageUrl} alt={item.title} className="h-48 w-full object-cover" />
            </figure>
          )}
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.abstract}</p>
          </div>
        </a>
      )
      })}
    </div>
  );
}
