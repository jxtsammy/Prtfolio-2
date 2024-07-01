import './Home.css'
import wave from '../../assets/wave.png'
import pint from '../../assets/pint.png'
import insta from '../../assets/insta.png'
import logo from '../../assets/logo.png'


const Home = () => {
    return (
        <div className="interface">
            <div className="content">
                <h1>Hello<span>!</span></h1>
                <div className="pave">
                    <p>
                        This is my official portfolio website to showcase <br />
                        all my works as related to <span>Web Design</span>.
                    </p> 
                    <button>Download CV</button>
                </div>
            </div>
            <div className="card">
                <div className="inner">
                    <div className="front">
                        <img src={logo} alt="" />
                        <h2><span>Mr.</span><br /> Sallo</h2>
                        <p>Web Designer, Ghana</p>
                        <button >Hover Me</button>
                    </div>
                    <div className="back">
                        <img src={wave} alt="" />
                        <div className="ye">
                            <h1>Sallo <br /> <span>Samuel</span></h1>
                            <p>I'm a <span>BSc. Computer Science</span> student who is currently learning skills as a <br /> 
                             <span>Web Designer</span>.</p>
                            <div className="row">
                                <button>Hire</button>
                                <a href="#"><img src={insta} alt="" /></a>
                                <a href="#"><img src={pint} alt="" /></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Home
