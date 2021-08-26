import React, {useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './scroll.css';
import { Typography } from '@material-ui/core';

const ScrollArrow = () =>{

	const [hover, setHover] = useState(false);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
		<>
			<ArrowUpwardIcon
			onMouseOver={()=>setHover(true)}
			onMouseOut={()=>setHover(false)}
			className="scrollTop" onClick={scrollTop} style={{fontSize: 200, height: 80, display: showScroll ? 'flex' : 'none', right: '10%'}}>
			</ArrowUpwardIcon>
			<Typography variant="h6" color="textSecondary">
			<div className='HoverText' style={{right: 120}}>
				{hover ? "Back to Top" : null}
			</div>
		</Typography>
	</>
  );
}

export default ScrollArrow;