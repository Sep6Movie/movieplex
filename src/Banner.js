import { useEffect, useState } from "react"
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner()
{
    const[movie,setMovie] = useState ([]);

    useEffect(()=>
    {
        async function fecthData(){
            const request = await axios.get(requests.fetchTopRated);
        setMovie(
            request.data.results[
                Math.floor(Math.random()*request.data.results.lenght)])
            return request;
        }
        fecthData();
    },[]);

function truncate(str,n)
{
    return str?.lenght > n ? str.substr(0,n - 1) + "..." : str;
}


    return(
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center",
                }}
                >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_discription">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    );
}

export default Banner;