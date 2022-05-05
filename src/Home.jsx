import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from "./Card";
import movies from "./movies";
import randomElement from "./effect";
import Img1 from "./img/1.jpg";

function Home(){
  useEffect(()=>{
    Aos.init();
  },[])
  return (
  <section className="py-4 py-lg-5 container">
    <div className="row">
    
    {movies.map((movieslist)=>(
      <Card
      key={movieslist.key}
      src={Img1}
      title={movieslist.title}
      content={movieslist.content}
      aos={randomElement}
      aos_offset="200"
      />
    ))}
    
      

    </div>
  </section>
  )
};

export default Home;