import { createRef } from "react"
import AboutMe from "../AboutMe/AboutMe"
import AboutProject from "../AboutProject/AboutProject"
import Portfolio from "../Portfolio/Portfolio"
import Promo from "../Promo/Promo"
import Techs from "../Techs/Techs"

function Main() {
  const aboutProjectRef = createRef()

  function handleFindMore() {
    aboutProjectRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <main className="content">
      <Promo OnFindMore={handleFindMore}/>
      <AboutProject forwardedRef={aboutProjectRef}/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  )
}

export default Main