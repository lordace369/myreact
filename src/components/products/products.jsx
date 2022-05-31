import './product.scss'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Products = ({img,link,project}) => {
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    return(
        <div className="p">
            <div style={{ backgroundColor: darkMode && 'rgb(160, 0, 0)' }} className="p-browser">
                <div className="p-circle "></div>
                <div className="p-circle "></div>
                <div className="p-circle "></div>
                <h4 className="p-name" > 
                {project} 
                    </h4>
            </div>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}
export default Products