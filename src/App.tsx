import {
  ExperienceSection,
  HeroSection,
  LogosSection,
} from "./components/sections";
import {Layout} from "./layout/layout";

function App() {
  return <Layout hero={Hero()}>
    <ExperienceSection/>
  </Layout>
}

function Hero() {
 return <>
   <HeroSection/>
   <LogosSection className="print:hidden"/>
 </>
}

export default App
