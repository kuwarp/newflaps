import About from "../Components/Homepage/About"
import ClientSection from "../Components/Homepage/ClientSection"
import Feedback from "../Components/Homepage/Feedback"
import Hero from "../Components/Homepage/Hero"
import Services from "../Components/Homepage/Services"
import Subscribe from "../Components/Homepage/Subscribe"

const Homepage = () => {
  return (
    <div>
<Hero/>
<About/>
<Services/>
<ClientSection/>
<Feedback/>
<Subscribe/>
    </div>
  )
}

export default Homepage