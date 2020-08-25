import React, {useState} from 'react';
import './Blogs.css';


const Blogs = () =>{

  const [showText, setShowText] = useState(false)

  const checkScroll = () => {
    if (!showText && window.pageYOffset > 400){
      setShowText(true)
    } else if (showText && window.pageYOffset <= 400){
      setShowText(false)
    }
  };

  

  window.addEventListener('scroll', checkScroll)

  return (
        <div className="blogsInner"  style={{transition: "2s"},{display: showText ? 'flex' : 'none'}}>
          <h2>Other music blogs:</h2>
          <ul>
            <a href="https://rappamelo.com/" target="_blank"><li>RAPPAMELO</li></a>
            <a href="http://solidboymusicblog.blogspot.com/" target="_blank"><li>SOLIDBOY</li></a>
            <a href="http://productoilicito2.blogspot.com/" target="_blank"><li>RAP BLOG</li></a>
            <a href="http://stuckinthepast08.blogspot.com/" target="_blank"><li>STUCK IN THE PAST</li></a>
          </ul>
        </div>
  );
}

export default Blogs;