
import './PortfolioItem.css'


function PortfolioItem(props) {

    return (
        <div className='portfolioitem' >
            <img src={props.src} alt="" />
            <h2 className='portfolioitem__heading'>{props.title}</h2>
            <p className='portfolioitem__subheading' style={{color:props.color}}>{props.subheading}</p>
        </div>
    )
}

export default PortfolioItem
