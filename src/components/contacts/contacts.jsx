import './contacts.scss'
import phone from '../../img/phone.png'
import address from '../../img/address.png'
import email from '../../img/email.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Contacts=()=>{
    const formref = useRef();
    const [done , setDone] = useState(false)
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode


    const handleSubmit= (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_pku6two', 'template_1zc0ihi', formref.current, 'bPm3ENwtO3UJjEPiB')
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return(
        <div className="c">
            <div style={{backgroundColor: darkMode && 'rgb(160, 0, 0)' , color: darkMode && "white" }} className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets get in touch !</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +91-8535072606
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Dehradun, Uttarakhand, India
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon"/>
                            ayushlingwal.ace@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Open to work full-time.</b> Freelancing if the right project comes along.
                    </p>
                    <form ref={formref} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_name"  placeholder='Name' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_subject"  placeholder='Subject' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_email"  placeholder='Your Email' />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="message" placeholder='Message' rows="5"></textarea>
                        <button style={{backgroundColor: darkMode && "red" , color: darkMode && "white" }} >Submit</button>
                        {done && "Thankyou for contacting me."}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacts