import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="topLeft">
                <h1>STUDYPOND</h1>
                <h5>Learn. Create. Grow. <br/> Cultivate your pond as <br/>you set goals to succeed.</h5>
                
            </div>
            <div className="topRight">
                <h1>Get Started!</h1>
                <div className="authentication">
                      <a href="/sign-up">Sign Up</a>
                      <a href="/login">Login</a>  
                </div>
                <br />
                <br />
                <br />
                <div className="emailList">
                    <form>
                        <input type="text" placeholder="  E-mail Address" key="email" name="email" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" required/>
                        <input type="submit" value=">"/>
                        <br />
                        <label for="email">Sign up for our mailing list!</label>
                    </form>
                </div>
            </div>
            <div className="middleRight">
                <h1>Started by students for students,</h1>
                <h1>STUDYPOND etc.</h1>
            </div>
            <div className="contactForm">
                <h1>Contact Us</h1>
                <form>
                    <input type="text" name="firstName" key="firstName" placeholder="First Name" required pattern="[a-zA-Z]+" />
                    <input type="text" name="lastName" key="lastName" placeholder="Last Name" pattern="[a-zA-Z]+" />
                    <br />
                    <br />
                    <input type="email" name="email" key="email2" placeholder="Email" required/>
                    <br />
                    <br />
                    <textarea key="message" name="message" rows="4" cols="50" placeholder="Message" />
                    <br />
                    <br />
                    <input type="submit" name="Submit" value="Submit" key="submit2" />
                </form>
            </div>
        </div>

    )
}

export default Home;
