import React,{useRef,useEffect} from 'react';
import gallery1 from'../../image/gallery-1.jpg';
import gallery2 from '../../image/gallery-2.jpg';
import gallery3 from '../../image/gallery-3.jpg';
import gallery4 from '../../image/gallery-4.jpg';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './Gallery.css';


function Gallery() {
    const imgref=useRef();
    const nameref=useRef();
    const titleref=useRef();
    const imgarray=[gallery2,gallery3,gallery4];
    const namearray=['Robinson','Aishwarya','Abhishek'];
    const Title=['Sales and Marketing','H R Department','Digital Marketing'];
    let count=0;
    let mytimer;
    

    useEffect(() => {
        mytimer= setInterval(()=>{
            count=count+1;
            imgref.current.src=imgarray[count%3];
            titleref.current.innerHTML=Title[count%3];
            nameref.current.innerHTML=namearray[count%3];
        },5000)
    }, [])

    const beforefun=()=>{
        clearInterval(mytimer);
        count=count+2;
        imgref.current.src=imgarray[count%3];
        titleref.current.innerHTML=Title[count%3];
        nameref.current.innerHTML=namearray[count%3];
        mytimer= setInterval(()=>{
            count=count+1;
            imgref.current.src=imgarray[count%3];
            titleref.current.innerHTML=Title[count%3];
            nameref.current.innerHTML=namearray[count%3];
        },5000)
    }

    const afterfun=()=>{
        clearInterval(mytimer);
        count=count+1;
        imgref.current.src=imgarray[count%3];
        titleref.current.innerHTML=Title[count%3];
        nameref.current.innerHTML=namearray[count%3];
        mytimer= setInterval(()=>{
            count=count+1;
            imgref.current.src=imgarray[count%3];
            titleref.current.innerHTML=Title[count%3];
            nameref.current.innerHTML=namearray[count%3];
        },5000)
    }

    return (
        <div className="gallery">
            <div className="gallery__main">
                <img src={gallery1}></img>
                <div className='flex'>
                    <h3 className='fade-up' >We are idealistic and strategic thinkers</h3>
                    <p className='fade-up'>Over six years in video buisness</p>
                    <div className='fade-up'>
                    <h5 className='fade=up'>Read News and Events</h5>
                    <h5 className='fade-up'>Work with us</h5>
                    </div>
                </div>
            </div>
            <div className="gallery__aside" >
                <img src={gallery2} ref={imgref}/>
                <div className="gallery__sidetag">
                    <div className="">
                    <h2 ref={nameref} >Robinson H.</h2>
                    <p ref={titleref} >Sales and marketing</p>
                    </div>
                    <div className="gallery__icons">
                        <NavigateBeforeIcon onClick={()=>{beforefun()}}/>                        
                        <NavigateNextIcon onClick={()=>{afterfun()}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
