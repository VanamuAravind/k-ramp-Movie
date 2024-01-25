import React, { useEffect, useState ,useRef} from 'react'
import avatar from '../images/avatar.jpg'
import dp from '../images/dp.jpg'
import endgame from '../images/endgame.png'
import infinitywar from '../images/infinitywar.jpg'
import titanic from '../images/titanic.jpg'
import DisplayCard1 from '../components/DisplayCard1'
import nolan from '../images/nolan.jpg'
import sm from '../images/spiderman.jpg'
import sm1 from '../images/spiderman1.png'
import smt from '../images/smtitle.png'
import bb from '../images/bossbaby.jpg'
import bb1 from '../images/bb.png'
import cars from '../images/cars.jpg'
import cars1 from '../images/cars1.png'
import es from '../images/es.jpg'
import ck from '../images/ck.png'
import CatagoryCard from '../components/CatagoryCard';
import ContinueWatching from '../components/ContinueWatching'
import './home.css'
import AllMovieContainer from '../components/AllMovieContainer'
import Newcard from '../components/Newcard'
import NewCard1 from '../components/NewCard1'
import Footer from '../components/Footer'
const Home = () => {
    const [leftWidth,setLeftWidth]=useState("")
    const [isMinimized,setIsMinimized]=useState(Boolean)
    const [rotate,setRotate]=useState("")
    const [movieList,setMovieList]=useState([])
    const [index,setIndex]=useState()
    const [conwatTranslate,setConwatTranslate]=useState("")
    const [count,setCount]=useState()
    const [loadmoremovieList,setloadmoremovieList]=useState([])
    const trending=document.getElementById("trending");
    const top_airing=document.getElementById("top-airing");
    const continueWatching=document.getElementById("continue-watching");
    const home=document.getElementById("home");
    const catagory=document.getElementById("catagory")
    const moveToHome=()=>{
        home.scrollIntoView({behavior:"smooth"})
    }
    const moveToTrending=()=>{
        trending.scrollIntoView({behavior:"auto"})
        
    }
    const moveToTopAiring=()=>{
        top_airing.scrollIntoView({behavior:"smooth"});
        
    }
    const moveToContinueWatching=()=>{
        continueWatching.scrollIntoView({behavior:"smooth"});
    }
    const moveToCatogory=()=>{
        catagory.scrollIntoView({behavior:"instant"})
    }
  const loadMoreMovies=()=>{
    for(let i=0;i<list.length;i++){
        setloadmoremovieList(prev=>[...prev,list[i]]);
    }
  }
    const list=[
        {
            image:avatar,
            name:"Avatar",
            top:"1"
        },
        {
            image:endgame,
            name:"Avenger : End Game",
            top:"2"
        },
        {
            image:infinitywar,
            name:"Avenger : Infinity War",
            top:"3"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"4"
        },
        {
            image:es,
            name:"The Eminence in Shadow",
            top:"5"
        },
        {
            image:cars,
            name:"Cars",
            top:"6"
        },
        {
            image:bb,
            name:"Boss Baby",
            top:"7"
        },
        {
            image:sm,
            name:"Amazing Spider Man",
            top:"8"
        },
        {
            image:avatar,
            name:"Avatar",
            top:"9"
        },
        {
            image:endgame,
            name:"Avengers : End Game",
            top:"10"
        },
        {
            image:infinitywar,
            name:"Avengers : Infinity War",
            top:"11"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"12"
        },
        {
            image:avatar,
            name:"Avatar",
            top:"1"
        },
        {
            image:endgame,
            name:"Avenger : End Game",
            top:"2"
        },
        {
            image:infinitywar,
            name:"Avenger : Infinity War",
            top:"3"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"4"
        },
        {
            image:es,
            name:"The Eminence in Shadow",
            top:"5"
        },
        {
            image:cars,
            name:"Cars",
            top:"6"
        }
        
    ]
    useEffect(()=>{
        loadMoreMovies();
        setConwatTranslate("translateX(0px)")
        setIndex(4)
        setCount(0)
        setLeftWidth("4%")
        setIsMinimized(true)
        setRotate("rotateY(180deg)")
        setMovieList([])
        for(let i=0;i<4;i++){
            // l.push(list[i])
            setMovieList(prev=>[...prev,list[i]])
        }
        // setMovieList(l)
        console.log(movieList)
    },[])
    
    
  return (
    <div className='home-page-main-container'>
      <div className='left' style={{width:leftWidth}}>
        <div className='logo'></div>
        <div className='menu-arrow' style={{transform:rotate}} onClick={()=>{
            (isMinimized)?setLeftWidth("12%"):setLeftWidth("4%");
            (isMinimized)?setRotate("rotateY(0deg)"):setRotate("rotateY(180deg)");
            setIsMinimized(!isMinimized)
        }}>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className='menu'>
            <label className='menuhead'>Menu</label>
            <div>
                <i class="fa-brands fa-edge" style={{color:'rgb(201, 60, 0)'}}></i>
                {(!isMinimized)? <label style={{color:'white'}}>browse</label> : null}
            </div>
            <div>
                <i class="fa-regular fa-heart"></i>
                {(!isMinimized)? <label>wishlist</label> : null }
            </div>
            <div>
                <i class="fa-regular fa-calendar-days"></i>
                {(!isMinimized)? <label>coming soon</label> : null }
            </div>
        </div>

        <div className='divider'></div>

        <div className='following'>
            <label>following</label>

            <div style={{justifyContent:(isMinimized)?"start":"center"}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            <div style={{justifyContent:(isMinimized)?"start":"center"}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            <div style={{justifyContent:(isMinimized)?"start":"center"}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            
        </div>
        <div className='addmore-following'>
            <div className='following-arrow'>
                <i class="fa-solid fa-angle-down"></i>
            </div>
                {(!isMinimized)? <label>load more</label> : null }
        </div>

        <div className='divider'></div>

        <div className='sign-out'>
            <i class="fa-solid fa-right-from-bracket"></i>
                {(!isMinimized)? <label>Sign out</label> : null }
        </div>
      </div>

      <div className='vertical-divider'></div>

      <div className='right'>
            <div className='header'>
                <div className='header-left'>
                    
                    <div className='search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='search everything'/>
                        <i class="fa-solid fa-filter"></i>
                    </div>
                </div>
                <div className='header-center'>
                    <label onClick={moveToHome}> Home</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToContinueWatching}> Continue Watching</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToTopAiring}>Top Airing</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToTrending}>Trending</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToCatogory}>catagory</label>
                </div>
                <div className='header-right'>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-regular fa-bell"></i>
                    <div className='userdp'>
                        <img src={dp}></img>
                    </div>
                </div>
            </div>
            <div className='items-container'>
                <div  id='home'></div>
                <div className='main-center-body'>
                    <div className='allmoviecontainer-container' style={{position:"relative"}}>
                        <div id='continue-watching' style={{position:"absolute",left:"50%",top:"80%"}}></div>
                        <AllMovieContainer/>
                    </div>

                    <div className='catogories' style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"start",margin:"10px 10px"}}>
                        <label>Continue Watching</label>
                        <div className='pill'></div>
                    </div>
                    <div className='continue-watching-in-home-with-controllers'>
                        <div className='arrow-back' onClick={()=>{
                            setCount(count+(100/8)+0.1)
                            setConwatTranslate("translateX("+count+"%)")
                            
                        }}>                           
                            <i class="fa-solid fa-arrow-left"></i>
                        </div> 
                        <div className='continue-watching-container-in-home'>  
                            <div id="top-airing"></div>
                            <div className='continue-watching-slider' style={{transform:conwatTranslate}}>
                                <ContinueWatching name="Avengers:Infinity War" image={infinitywar} progress="70%"/>
                                <ContinueWatching name="Avatar" image={avatar} progress="30%"/>
                                <ContinueWatching name="Avengers:End Game" image={endgame} progress="50%"/>
                                <ContinueWatching name="Amazing Spider Man" image={sm} progress="20%"/>

                                <ContinueWatching name="Boss Baby 2" image={bb} progress="90%"/>
                                <ContinueWatching name="The Eminence in Shadow" image={es} progress="40%"/>
                                <ContinueWatching name="Cars" image={cars} progress="95%"/>
                                <ContinueWatching name="Titanic" image={titanic} progress="34%"/>
                            </div>
                        </div>
                        <div className='arrow-back' onClick={()=>{
                            setCount(count-(100/8)-0.1)
                            setConwatTranslate("translateX("+count+"%)")
                        }}>                           
                            <i class="fa-solid fa-arrow-right"></i>
                        </div> 

                    </div>
                    <div className='header-1' style={{justifyContent:"start",transform:"translateY(-50%)"}}>
                        <div className='catogories'>
                            <label>Top Airing</label>
                            <div className='pill'></div>
                        </div>
                    </div>
                    <div className='slider'>
                        {
                            movieList.map((movie,i)=>{
                                return <DisplayCard1 image={movie.image} movie_name={movie.name} top={movie.top}/>
                            })
                        }
                    <div  id="trending"></div>
                    </div>
                    
                    
                    <div className='header-1'>
                        <div className='catogories'>
                            <label>Trending</label>
                            <div className='pill'></div>
                        </div>
                        <div className='top-alide-options'>
                            <div onClick={()=>{
                                if(index>0){
                                    setMovieList([])
                                    for(let i=index-4;i<index;i++){
                                        setMovieList(prev=>[...prev,list[i]])
                                    }
                                    setIndex(index-4)
                                }
                            }}>
                            <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div onClick={()=>{

                                if(index<list.length)
                                {    
                                    setMovieList([])
                                    for(let i=index;i<index+4;i++){
                                        setMovieList(prev=>[...prev,list[i]])
                                    }
                                    setIndex(index+4)}
                            }}>
                            <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className='home-trending-card-container'>
                        {
                            loadmoremovieList.map(data=>{
                                return <Newcard image={data.image} name={data.name}/>
                            })
                        }
                        <div className='home-load-more-container'>
                        <div className='home-load-more-container-circle'></div>
                        <div className='addmore-following' onClick={loadMoreMovies}>
                            <div className='following-arrow'>
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                                <label>load more</label>
                        </div>
                    </div>
                    <div id='catagory'></div>
                    </div>
                    
                   
                    <div className='header-1' style={{justifyContent:"start"}}>
                        <div className='catogories'>
                            <label>catagory</label>
                            <div className='pill'></div>
                        </div>
                    </div>

                    
                    <div className='catagory-container'>
                        <NewCard1 image={es} name="The Eminance in Shadow" genre="Anime Fantasy"/>
                        <NewCard1 image={avatar} name="Avatar" genre="Scifi Fantacy"/>
                        <NewCard1 image={infinitywar} name="Avengers : Infinity War" genre="Aciton SuperHero"/>
                        <NewCard1 image={sm} name="Amazing Spider Man" genre="Action SuperHero"/>
                        <NewCard1 image={cars} name="Cars" genre="Sports Animated"/>
                    </div>
                    <div className='horizontal-line-divider'></div>
                    <div className='home-main-footer'>
                        <Footer/>
                    </div>
                    
                    
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
