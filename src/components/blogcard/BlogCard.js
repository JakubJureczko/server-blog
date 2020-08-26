import React, {useContext, useState, useEffect, useRef} from "react";
import Styles from "./Blogcard.module.css"
import marked from "marked"
import { StateContext } from "../statecontext/stateContext";
import YouTubePlayer from 'youtube-player';

function BlogCard(){
    const [rotpost, setRotPost] = useState([])
    const [tenEntries, setTenentries]=useState([])
    const {filteredEntries, count}=useContext(StateContext);
    const [iFram, setIFram] = useState([])
    const [h2info, setH2info] = useState([])
    const vid = useRef(null);
    
    
    useEffect(()=>{
    const goat = filteredEntries.slice(((count-1)*10), ((count-1)*10+10))
    const newRots = filteredEntries.map(() => 0)
    setRotPost(newRots)
    setTenentries(goat)
    }, [filteredEntries, count])

    
      function Rotatenow(idi){
        const fish=document.getElementById(idi).classList

        const chick=tenEntries[idi].fields.yt.split("</h2>")
        setH2info(chick[0].split("<h2>"))
        const hen=tenEntries[idi].fields.yt.split("src=")
        setIFram(hen[1].split(" frameborder")) 

        const newRotPost = rotpost.map((rot, index) => {
            if (index === idi ) {
                if(rot===0){
                    return 1}
                else if(rot===1){return 2}
                else {
                   
                    YouTubePlayer("vido").stopVideo()      
                    
                    return 0}
            } 
            
            if (index!==idi){
                if(rot!==0){
                const dog=document.getElementById(index).classList
                dog.remove(Styles.rotatright)
                dog.remove(Styles.rotatleft)
                dog.add(Styles.entry)        
                return 0}
            

            return rot}

           

        })

        setRotPost(newRotPost);
        if(rotpost[idi]===0){
            fish.remove(Styles.entry)
            fish.add(Styles.rotatright);
        } else if(rotpost[idi]===1){
            fish.remove(Styles.rotatright);
            fish.add(Styles.rotatleft);
        } else {
            fish.remove(Styles.rotatleft);
            fish.add(Styles.entry);

        }
        
    }
   
return(
    <div >
        {  filteredEntries!==0?(
            tenEntries.map((entry, id) => (         
                <div className={Styles.entrycontainer} key={entry.sys.id}>
                    <div onClick={()=>Rotatenow(id)} className={Styles.entry} id={id} >
                        <div className={Styles.front}>
                            <h1 >{entry.fields.title}</h1>
                            <img src={entry.fields.image.fields.file.url} alt="" /> 
                        </div>  
                        <div className={Styles.right}>
                            <section
                            className={Styles.description}
                            dangerouslySetInnerHTML={{ __html: marked(entry.fields.description)}}  
                        />  
                        </div>  
                        <div className={Styles.left}>
                            <div className={Styles.iframe}>
                            <h2>{h2info}</h2>
                        <iframe id = "vido" ref={vid} width = '100%' height='100%' src={eval(iFram[0])}></iframe></div>  
                        </div>             
                    </div>
                </div>


            ))):console.log("hello")
        }

    </div>
    
)

}

export default BlogCard;