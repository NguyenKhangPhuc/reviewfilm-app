import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Select } from '@mui/material';
import SelectAutoWidth from '../small element/Select';
import Header2 from '../small element/Header2';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Category } from '@mui/icons-material';
function Film() {
  const [opacity2, setOpacity2] = useState(0)
  const basearr = []
  const [result, setResult] = useState([])
  const [inputvalue, setInputvalue] = useState('')
  const [checkarr, setCheckarr] = useState([])
  const [printgenres, setPrintgenres] = useState(basearr)
  const [film, setFilm] = useState([])
  const [opacity, setOpacity] = useState(0)
  const [data1, setData1] = useState([])
  const [checkimg, setCheckimg] = useState(imgs)
  const [hovering, setHovering] = useState(null)
  const [btnopacity, setBtnopacity] = useState(0)
  const [testarr, setTestarr] = useState([])
  const [checkNumber, setCheckNumber] = useState(0)
  const [checkNumber2, setCheckNumber2] = useState(3)
  const [checkClick, setCheckClick] = useState(false)
  const [listTitle, setListTitle] = useState('Most Rated')
  const [open, setOpen] = useState(false)
  let newPages = []

  const genres = [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 16, name: "Animation" }, { id: 35, name: "Comedy" }, { id: 80, name: "Crime" }, { id: 99, name: "Documentary" }, { id: 18, name: "Drama" }, { id: 10751, name: "Family" }, { id: 14, name: "Fantasy" }, { id: 36, name: "History" }, { id: 27, name: "Horror" }, { id: 10402, name: "Music" }, { id: 9648, name: "Mystery" }, { id: 10749, name: "Romance" }, { id: 878, name: 'Science Fiction' }, { id: 10770, name: 'TV Movie' }, { id: 53, name: 'Thriller' }, { id: 10752, name: "War" }, { id: 37, name: 'Western' }]
  const filterFilm = [{ name: 'Most Popular', data: 'popular' },
  { name: 'Most Rated', data: 'top_rated' },
  { name: 'Now Playing', data: 'now_playing' },
  { name: 'Upcoming', data: 'upcoming' }]
  let listmovies
  let choosegenres
  let deletegenres
  let filmPages
  const [baseimg, setBaseimg] = useState('')

  useEffect(() => {
    handleGetapi()
  }, [])


  const handleGetapi = async () => {
    listmovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=98d1cc2dbbcb700149874215cb35d6b1')
    setData1(listmovies.data.results)
    setOpacity(1)
    setFilm(listmovies.data.results)
    film.slice(checkNumber, checkNumber2)
  }
  const handleChoosegenres = (genresid, genresname) => {
    if (printgenres.some(print => print.name === genresname)) {
      alert('Genre has already appeared')
    } else if (printgenres.length > 2) {
      alert('aasdawdawd')
    }
    else {
      setPrintgenres(printgenres => [...printgenres, { name: genresname, id: genresid }])
      setCheckarr(checkarr => [...checkarr, genresid])
    }
    choosegenres = data1.filter((film, index) => {
      return [...checkarr, genresid].every(i => film.genre_ids.includes(i))
    })
    setFilm(choosegenres)
    if (choosegenres.length > 4) {
      setOpen(false)
    } else {
      setOpen(true)
    }

  }
  const handleDeletegenres = (name, id, number) => {
    deletegenres = printgenres.filter((printname) => {
      return name != printname.name
    })
    const findindex = checkarr.indexOf(id)
    setPrintgenres(deletegenres)
    if (findindex > -1) {
      checkarr.splice(findindex, 1)
    }
    choosegenres = data1.filter((film, index) => {
      return checkarr.every(i => film.genre_ids.includes(i))
    })
    setFilm(choosegenres)
    console.log(checkarr)
    if (number == 0) {
      setOpen(false)
    } else if (choosegenres.length <= 4) {
      setOpen(true)
    } else if (choosegenres.length > 4) {
      setOpen(false)
    }
  }
  const handleOnchange = (value) => {
    setInputvalue(value)
    const resultlist = data1.filter((list, index) => {
      return list.original_title.toLowerCase().includes(value.toLowerCase())
    })
    setResult(resultlist)
    setFilm(resultlist)
    setOpacity2(1)
  }
  const handleChoosefilm = (title) => {
    const choosefilm = data1.filter((film) => {
      return film.original_title == title
    })
    setFilm(choosefilm)
  }
  const handleFilter = async (filmData, index, title) => {
    const newList = await axios.get(`https://api.themoviedb.org/3/movie/${filmData}?api_key=98d1cc2dbbcb700149874215cb35d6b1`)
    console.log(newList.data.results)
    setFilm(newList.data.results)
    setData1(newList.data.results)
    if (index == 0) {
      setCheckimg(imgsPopular)
    } else if (index == 1) {
      setCheckimg(imgs)
    } else if (index == 2) {
      setCheckimg(imgsNowplaying)
    } else if (index == 3) {
      setCheckimg(imgsUpcoming)
    }
    setListTitle(title)
    setOpen(false)
    setPrintgenres([])
  }
  const handleCheckchange = (id) => {
    setBtnopacity(1)
    setHovering(id)
  }
  const handleCheckout = (id) => {
    setBtnopacity(0)
    setHovering(id)
  }

  const handleOnclickPages = () => {
    const roundNumber = Math.ceil(data1.length / 3)
    if(checkClick == false){
      for (let i = 1; i <= roundNumber; i++) {
        setTestarr(testarr => [...testarr, { pages: i }])
  
      }
    }
    setCheckClick(true)
  }
  const handleChoosepages = (pagesNumber) => {
    if (pagesNumber == 1) {
      filmPages = data1.slice(checkNumber, checkNumber2)
    } else {
      filmPages = data1.slice(checkNumber2 * pagesNumber - 3, checkNumber2 * pagesNumber)
    }
    setFilm(filmPages)
    setOpen(true)
  }
  return (
    <div className='layout2' onClick={() => handleOnclickPages()}>
      <div className='filmplace' >
        <div className='genresplace'>
          <div className='genresplacea'>
            <SelectAutoWidth genres={genres} handleChoosegenres={handleChoosegenres} setFilm={setFilm} data1={data1} setPrintgenres={setPrintgenres} setOpen={setOpen}></SelectAutoWidth>
            <div className='printplace'>
              {printgenres.map((print, index) => {
                return (
                  <div className='printgenres' onClick={() => handleDeletegenres(print.name, print.id, index)}>{print.name} ↻</div>
                )
              })}
            </div>
          </div>
          <div className='filter_film'>
            {filterFilm.map((category, index) => {
              return (
                <div className='filter_text' onClick={() => handleFilter(category.data, index, category.name)}>{category.name}</div>
              )
            })}
          </div>
          <div className='searchingbar' style={{ marginRight: '30px' }}>
            <SearchIcon className='searchicon' />
            <input value={inputvalue} onChange={(e) => handleOnchange(e.target.value)} className='searchinginput'></input>
            <div className='resultlist' style={{ opacity: opacity2 }}>
              {result.map((list, index) => {
                return (
                  <div className='list' onClick={() => handleChoosefilm(list.original_title)}>{list.original_title}</div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='listfilm' >
          <div className='mostpopular'>
            <div className='mostpopulartext' style={{ opacity: opacity }}>{listTitle} Film </div>
          </div>
          <div className={`filmplace1 ${open ? `active` : `inactive`}`} style={{ opacity: opacity }}>
            {film?.map((filmObj, filmindex) => {
              return (
                <div className='filmplaceposition'>
                  <Link to={`/Film/${filmObj.id}`}>
                    <div className={`listfilm1 ${open ? `active` : `inactive`}`} style={{ backgroundImage: `url(${checkimg[data1.indexOf(filmObj)]?.src})` }} onMouseOver={() => handleCheckchange(filmObj.id)} onMouseLeave={() => handleCheckout(filmObj.id)}>
                      {hovering == filmObj.id &&
                        <div className='film_details'><button class="button_place" style={{ opacity: btnopacity }}>
                          <span class="text-container">
                            <span class="text">More</span>
                          </span>
                        </button>
                        </div>}
                    </div>
                  </Link>


                  <Link to={`/Film/${filmObj.id}`}><div className='listfilmdetail'>{filmObj.original_title}</div></Link>
                </div>
              )
            })}
          </div>
          <div className='pages_place' >
            {testarr.map((testObj, index) => {
              return (
                <div className='pages' onClick={() => handleChoosepages(testObj.pages)}>{testObj.pages}</div>
              )
            })}
          </div>
        </div>

      </div>
    </div >
  )
}
export const genres = [
  { id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 16, name: "Animation" }, { id: 35, name: "Comedy" }, { id: 80, name: "Crime" }, { id: 99, name: "Documentary" }, { id: 18, name: "Drama" }, { id: 10751, name: "Family" }, { id: 14, name: "Fantasy" }, { id: 36, name: "History" }, { id: 27, name: "Horror" }, { id: 10402, name: "Music" }, { id: 9648, name: "Mystery" }, { id: 10749, name: "Romance" }, { id: 878, name: 'Science Fiction' }, { id: 10770, name: 'TV Movie' }, { id: 53, name: 'Thriller' }, { id: 10752, name: "War" }, { id: 37, name: 'Western' }
]

export const video = [
  { src: `https://www.youtube.com/watch?v=PLl99DlL6b4` },
  { src: `https://www.youtube.com/watch?v=UaVTIH8mujA` },
  { src: `https://www.youtube.com/watch?v=OA1ij0alE0w` },
  { src: `https://www.youtube.com/watch?v=gG22XNhtnoY` },
  { src: `https://www.youtube.com/watch?v=TEN-2uTi2c0` },
  { src: `https://www.youtube.com/watch?v=cmax1C1p660` },
  { src: `https://www.youtube.com/watch?v=ByXuk9QqQkk` },
  { src: `https://www.youtube.com/watch?v=EXeTwQWrcwY` },
  { src: `https://www.youtube.com/watch?v=SEUXfv87Wpk` },
  { src: `https://www.youtube.com/watch?v=Bg7epsq0OIQ` },
  { src: `https://www.youtube.com/watch?v=3KR8_igDs1Y` },
  { src: `https://www.youtube.com/watch?v=tGpTpVyI_OQ` },
  { src: `https://www.youtube.com/watch?v=zckJCxYxn1g` },
  { src: `https://www.youtube.com/watch?v=Mj9IA9tTfio` },
  { src: `https://www.youtube.com/watch?v=WBXWxuOc2dE` },
  { src: `https://www.youtube.com/watch?v=2ilzidi_J8Q&t=1s` },
  { src: `https://www.youtube.com/watch?v=5dZioLIejeo` },
  { src: `https://www.youtube.com/watch?v=4vPeTSRd580&t=18s` },
  { src: `https://www.youtube.com/watch?v=8CTjcVr9Iao` },
  { src: `https://www.youtube.com/watch?v=JMyVSD6OvO8` },

]
export const imgs = [
  { src: `https://i.pinimg.com/564x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg` },
  { src: `https://i.pinimg.com/564x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg` },
  { src: `https://i.pinimg.com/564x/b3/1f/52/b31f52ec1c0858b1ed3d9e0370ef73f9.jpg` },
  { src: `https://i.pinimg.com/564x/8b/64/83/8b648309a99984686519314731b56ea1.jpg` },
  { src: `https://i.pinimg.com/564x/b1/39/8b/b1398b8fe6f9c85214a73d7ba36279c5.jpg` },
  { src: `https://i.pinimg.com/564x/14/0f/bd/140fbde71faef7aa80c0767472111d8e.jpg` },
  { src: `https://i.pinimg.com/564x/77/38/43/7738439ca9d70b35bd32ad72457c067d.jpg` },
  { src: `https://i.pinimg.com/564x/88/c8/20/88c8204e1017437290af9db9a02d83f6.jpg` },
  { src: `https://i.pinimg.com/564x/bc/e3/c2/bce3c2cbd502d88d137200ee7d928f09.jpg` },
  { src: `https://i.pinimg.com/564x/95/85/85/958585c929bc9607dc340f8f4a65c814.jpg` },
  { src: `https://i.pinimg.com/564x/29/9a/a9/299aa9b3b93ffb5250aa9034041a4c0e.jpg` },
  { src: `https://i.pinimg.com/564x/f0/01/3c/f0013ca4a05245afde43e0eaa7d1a2ce.jpg` },
  { src: `https://i.pinimg.com/564x/16/45/9b/16459b5858edf81a707da0161d8eaea1.jpg` },
  { src: `https://i.pinimg.com/564x/02/6b/0d/026b0d4dab1abe1c5f4460d6a45ae2ab.jpg` },
  { src: `https://i.pinimg.com/564x/39/be/11/39be111489438865fe12608796d6862e.jpg` },
  { src: `https://i.pinimg.com/564x/0a/92/53/0a925312c9b1cdb25e210cb463a86406.jpg` },
  { src: `https://i.pinimg.com/564x/e5/11/5b/e5115b04b8b5f86a5757d99057a2a881.jpg` },
  { src: `https://i.pinimg.com/736x/dd/d9/cd/ddd9cd712b445987a809e2753fe4d48b.jpg` },
  { src: `https://i.pinimg.com/564x/80/ca/9a/80ca9ac4c14e340bf06f7f1a05194a76.jpg` },
  { src: `https://i.pinimg.com/564x/a9/59/04/a959047e0d41922c800c1c72d04132b1.jpg` },]
export const imgsPopular = [
  { src: `https://i.pinimg.com/564x/09/d2/dd/09d2dd7efeca1771f53f45b0b24bcd48.jpg` },
  { src: `https://i.pinimg.com/564x/00/f5/93/00f59396bf63604ab4b10a83818d2b79.jpg` },
  { src: `https://i.pinimg.com/736x/62/f1/a9/62f1a9a0b09674e882c5f25c4895185d.jpg` },
  { src: `https://i.pinimg.com/564x/48/9e/80/489e805553f1d7fcb1fecb639aaae763.jpg` },
  { src: `https://i.pinimg.com/564x/9b/27/e0/9b27e019455b51c7f64422b9884c15ad.jpg` },
  { src: `https://i.pinimg.com/736x/36/3d/6c/363d6c1f00323a52b0a07692fcf52c1c.jpg` },
  { src: `https://i.pinimg.com/736x/20/24/03/2024039cd5141b2353747c73e5b3a36a.jpg` },
  { src: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxTHLsT2fFEy-uIRO1WvxWeUdskBXqjUcW5yKlKiKs-Rv5ztAA` },
  { src: `https://i.pinimg.com/564x/f8/ec/3a/f8ec3a0141596be0ae3e083573e1b023.jpg` },
  { src: `https://i.ebayimg.com/images/g/yIYAAOSw5uBjzd6m/s-l1600.jpg` },
  { src: `https://i.pinimg.com/736x/62/33/94/623394530b435b8bf2f0962bd9bbb36c.jpg` },
  { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScUwXu7wznX70mqPhL4ZJx93F-YkMZyUaEllCS2kICBqUmHpzM` },
  { src: `https://i.pinimg.com/474x/a8/5a/ce/a85acef3a807b1fb8a95dfaef1f087a4.jpg` },
  { src: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8wgxjdDUtCk6pKLHgsVCPJy2fYDA7wNZSYYCRy5eYKo4yic9f` },
  { src: `https://i.pinimg.com/474x/fc/29/8c/fc298c66cedbe54d3a9436382cdfe9a5.jpg` },
  { src: `https://i.pinimg.com/564x/1a/46/a1/1a46a116f641d7d5669bb6d0ce1e9a7d.jpg` },
  { src: `https://m.media-amazon.com/images/M/MV5BOWVhMjMzM2QtNjI0Ny00NTM2LWI3YjMtNTgzZjg3ZTdhNjI5XkEyXkFqcGdeQXVyMTMzNzczNTcx._V1_.jpg` },
  { src: `https://i.pinimg.com/736x/ab/05/24/ab0524f8b122546f062be61c02745647.jpg` },
  { src: `https://i.pinimg.com/736x/a9/b4/52/a9b452a54319fd41e18116a68c4bf66f.jpg` },
  { src: `https://i.pinimg.com/736x/95/c4/56/95c456ceab1a5e9353e43865964239ea.jpg` },]
export const imgsNowplaying = [
  { src: `https://i.pinimg.com/564x/09/d2/dd/09d2dd7efeca1771f53f45b0b24bcd48.jpg` },
  { src: `https://i.pinimg.com/564x/00/f5/93/00f59396bf63604ab4b10a83818d2b79.jpg` },
  { src: `https://i.pinimg.com/736x/62/f1/a9/62f1a9a0b09674e882c5f25c4895185d.jpg` },
  { src: `https://i.pinimg.com/564x/48/9e/80/489e805553f1d7fcb1fecb639aaae763.jpg` },
  { src: `https://i.pinimg.com/564x/9b/27/e0/9b27e019455b51c7f64422b9884c15ad.jpg` },
  { src: `https://i.pinimg.com/564x/9b/9b/f8/9b9bf8a998169535e5e18cbea9ce780f.jpg` },
  { src: `https://i.pinimg.com/736x/36/3d/6c/363d6c1f00323a52b0a07692fcf52c1c.jpg` },
  { src: `https://i.pinimg.com/736x/62/33/94/623394530b435b8bf2f0962bd9bbb36c.jpg` },
  { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScUwXu7wznX70mqPhL4ZJx93F-YkMZyUaEllCS2kICBqUmHpzM` },
  { src: `https://i.pinimg.com/474x/fc/29/8c/fc298c66cedbe54d3a9436382cdfe9a5.jpg` },
  { src: `https://i.pinimg.com/736x/ab/05/24/ab0524f8b122546f062be61c02745647.jpg` },
  { src: `https://i.pinimg.com/736x/95/c4/56/95c456ceab1a5e9353e43865964239ea.jpg` },
  { src: `https://i.pinimg.com/564x/28/ab/62/28ab62860a09fdd2c2bb4b0e7b40e85e.jpg` },
  { src: `https://i.pinimg.com/736x/31/09/e8/3109e8827d3f2cbe9d0acf4121b6a3c2.jpg` },
  { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTHGziHCzsbKe7JVwcKuoRH8EtxbcxlBcVOpL0Y_VaBtVFGpwS` },
  { src: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZ6kekqJ5XBclVzLOJMpKbybXxgXukyfQsggrjC36u0gnfrftR` },
  { src: `https://movies.universalpictures.com/media/argylle-poster-6579152b14166-1.jpg` },
  { src: `https://i.pinimg.com/564x/6f/41/40/6f4140448297a9ad0ccc524124cd312a.jpg` },
  { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8Xgq6egtDV_2FMXDQkO_M1Ro1c0IlC0xhSBk067lKqiGwaN9` },
  { src: `https://i.pinimg.com/564x/15/01/e6/1501e666e172d28c346ec2e30b00af06.jpg` },]
export const imgsUpcoming = [
  { src: `https://i.pinimg.com/564x/48/54/33/485433268d545893e844149537aecf91.jpg` },
  { src: `https://i.pinimg.com/236x/36/4e/e4/364ee4d06fed57e4404ac6e9bd47e11d.jpg` },
  { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScUwXu7wznX70mqPhL4ZJx93F-YkMZyUaEllCS2kICBqUmHpzM` },
  { src: `https://i.pinimg.com/736x/ab/05/24/ab0524f8b122546f062be61c02745647.jpg` },
  { src: `https://i.pinimg.com/736x/a9/b4/52/a9b452a54319fd41e18116a68c4bf66f.jpg` },
  { src: `https://i.pinimg.com/736x/31/09/e8/3109e8827d3f2cbe9d0acf4121b6a3c2.jpg` },
  { src: `https://i.pinimg.com/564x/55/d9/f6/55d9f61019e980e62beac728c6f932c8.jpg` },
  { src: `https://movies.universalpictures.com/media/argylle-poster-6579152b14166-1.jpg` },
  { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0D9bp9yKV4mHzXYIEAZZoO5YanCJkBJp34lCHHFKD9nSNFUO` },
  { src: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCMMYmGN8K0IcQP1a7imm2ducsfmDTsJJyj_ZLCYvZTBULLrZA` },
  { src: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfKKSEavaiiXs5fy8DPEn-esqqAkTy0PkMGoE3i7wNIjBbvvfP` },
  { src: `https://movies.universalpictures.com/media/fnf-poster-64643a920d591-1.jpg` },
  { src: `https://dx35vtwkllhj9.cloudfront.net/universalstudios/night-swim/images/regions/us/updates/onesheet.jpg` },
  { src: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsAHAFTOiAy7e0FN0hofyRrcnmlU1iD-OvHrF3QHY2MvpyNMCN` },
  { src: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRH7A-oNLGupKV90AQx8Yr9igpwVkXiWUIB20TXKaDxbvzJVR3r` },
  { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90wCqAVzJhQOA-YHXQ1Lln1oyt28jv8oSBFPACKFJa-0Q7ns9` },
  { src: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmI6Cm2APcZoMR320MLAJ7nUFGSNEByX4QBpR64bLoiCfmxhqh` },
  { src: `https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQ3YC90GgryUh37tAkYoUWvuf6xlmf_trmSdRmsDPmMLnymCCg` },
  { src: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWzvOP2W8WnpaqmkJ6r6-tz7u3i9bZaAuoG5Y2awbtr4XX8ncW` },
  { src: `https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQY-wfyF3Dms86Q1c_4WgDjR3ch9NG19SMDA0XJzY6FUCWSU5e0` },]

export default Film