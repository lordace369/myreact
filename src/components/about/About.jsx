import  './about.scss'
import meee from '../../img/meee.png'
import award from '../../img/award.png'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const About = () => {
    const theme =useContext(ThemeContext)
    const darkMode =theme.state.darkMode
    return (
        <div className="a">
            <div className="a-left">
                <div style={{backgroundColor: darkMode && 'rgb(160, 0, 0)'}} className="a-card bg"></div>
                <div className="a-card">
                    <img src={meee} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title' >About me</h1>
                <p className='a-sub'>Learning as i go .</p>
                <p className='a-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio sunt accusamus expedita rerum amet reprehenderit? Animi laboriosam corrupti veniam nisi eaque! Sit, quo.</p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;