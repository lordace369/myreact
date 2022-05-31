import './intro.scss'
import me from '../../img/me.png'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Intro = () => {
    const theme =useContext(ThemeContext)
    const darkMode =theme.state.darkMode
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello ! My name is</h2>
                    <h1 className='i-name'> Ayush Lingwal</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div style={{color: darkMode && "red"  }} className="i-title-item">Python Developer</div>
                            <div style={{color: darkMode && "red"  }} className="i-title-item">Web Developer</div>
                            <div style={{color: darkMode && "red"  }} className="i-title-item">Photo Editor</div>
                            <div style={{color: darkMode && "red"  }} className="i-title-item">Video Editor</div>
                        </div>
                    </div>
                    <p className="i-desc">I am bachelor of civil engineering and master of business administration in Marketing, a self taught Python Developer and a Front-end developer .</p>
                </div>
                
            </div>
            <div className="i-right">
                <div style={{backgroundColor: darkMode && 'rgb(160, 0, 0)'}} className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )

}

export default Intro