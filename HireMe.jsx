import './HireMe.css'

const HireMe = () => {
  return (
    <div className="items">
                <div className="con1">
                    <i className="fa-brands fa-linkedin"></i>
                    <h2>LinkedIn</h2>
                    <div className="btn">
                        <a href="https://www.linkedin.com/in/sammy-sallo">Connect</a>
                    </div>
                </div>
                <div className="con2">
                    <i className="fa-brands fa-github"></i>
                    <h2>GitHub</h2>
                    <div className="btn">
                        <a href="https://github.com/jxtsammy">View</a>
                    </div>
                </div>
                <div className="con3">
                    <i className="fa-brands fa-whatsapp"></i>
                    <h2>WhatsApp</h2>
                    <div className="btn">
                        <a href="https://wa.link/qnrly3">Chat</a>
                    </div>
                </div>
                <div className="con4">
                    <i className="fa-solid fa-envelope"></i>
                    <h2>Gmail</h2>
                    <div className="btn">
                        <a href="mailto:robertflames001@gmail.com">Send Mail</a>
                    </div>
                </div>
            </div>
  )
}

export default HireMe
