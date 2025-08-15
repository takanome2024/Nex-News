import axios from "axios";

const apiKey = import.meta.env.VITE_NYT_API_KEY;


// export async function fetchTopStories(section: string = "home") {
//     try{
//         const res = await axios.get(
//             `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
//         );
//         return res.data.results;
//     } catch (err) {
//         console.error("Failed", err);
//         return [];
//     }
//     }

export async function fetchTopStories(section: string="home") {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
    const data = await res.json();
    return Array.isArray(data?.results)?data.results:[];
}

export async function searchArticles(query: string) {
    const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    );
    return res.data.response.docs;
}