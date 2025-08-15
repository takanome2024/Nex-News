import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/search?q=${encodeURIComponent(query)}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input type="text" placeholder="Search news here ..." value={query} onChange={(e) => setQuery(e.target.value)} className="input input-bordered flex-1" />
            <button className="btn btn-primary capitalize">search</button>
        </form>
    )
}