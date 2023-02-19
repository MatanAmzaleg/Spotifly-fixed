import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";

export const Searchbar = () => {


  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

const handleSearch = () => {
  if(!searchTerm) return
  navigate(`/search/${searchTerm}`)
}

  return (
    <section className="searchbar-sec flex align-center">
        <div className="search flex">
          <input
          placeholder="search"
            type="search"
            name="search-field"
            autoComplete="off"
            onChange={() => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </div>
        <button onClick={() => {handleSearch()}} className="search-btn grid-center"><FiSearch className="search-icon"></FiSearch></button>
    </section>
  );
};
