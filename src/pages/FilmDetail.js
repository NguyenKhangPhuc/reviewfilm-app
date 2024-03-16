import React from 'react'
import { useParams } from 'react-router-dom'
import { imgs } from './Film'
import Header2 from '../small element/Header2'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { video } from './Film'
import { genres } from './Film'
import Header1 from '../small element/Header1'
function FilmDetail() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [movie, setMovie] = useState([])
    useEffect(() => {
        handleGetapi()
    }, [])
    const handleGetapi = async () => {
        const listmovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=98d1cc2dbbcb700149874215cb35d6b1')
        setData(listmovies.data.results)
        console.log(data)
        const filterMovie = listmovies.data.results.filter((movie, index) => {
            return movie.id == id
        })
        setMovie(filterMovie)
        console.log(filterMovie)
    }
    return (
        <div className='layout3' style={{ backgroundImage: `url(https://wallpapers.com/images/hd/black-blur-background-7h6g5qc93be6u3d0.jpg)` }}>
            <Header2 />
            <div className='center_film_details'>
                <div className='title_statistic_place'>{data.map((detailsObj, index) => {
                    if (detailsObj.id == id) {
                        return (

                            <div className='name_and_statistic'>
                                <div className='title'>{detailsObj.original_title}</div>
                                <div className='film_statistic'>
                                    <div className='release_date'> ★ Release date : {detailsObj.release_date} </div>
                                    <div className='popularity'> ★ Popularity : {detailsObj.popularity}</div>
                                    <div className='vote_average'> ★ Vote average : {detailsObj.vote_average}/10</div>
                                    <div className='vote_count'> ★ Vote count : {detailsObj.vote_count}</div>
                                </div>
                            </div>
                        )
                    }
                })}
                </div>
                <div className='poster_video_place'>
                    {data.map((filmsObj, index) => {
                        if (filmsObj.id == id) {
                            return (
                                <div className='poster_video'>
                                    <div className='poster' style={{ backgroundImage: `url(${imgs[index]?.src})` }} ></div>
                                    <div className='video_place'>
                                        <ReactPlayer url={video[index].src} width='100%' height='100%' controls />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='genres_place'>
                    {movie && genres.map((genres) => {
                        if (movie[0]?.genre_ids.includes(genres.id)) {
                            return (
                                <div className='genre'>{genres?.name}</div>
                            )
                        }
                    })}
                </div>
                <div className='overview_place'>
                    <div className='upper_overview'>OVERVIEW</div>
                    {data.map((detailsObj, index) => {
                        if (detailsObj.id == id) {
                            return (

                                <div className='overview'>{detailsObj.overview}</div>
                            )
                        }
                    })}

                </div>
            </div>
        </div>
    )
}
export default FilmDetail