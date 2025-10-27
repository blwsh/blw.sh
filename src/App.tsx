import {
  ExperienceSection,
  HeroSection,
  LogosSection,
} from "./components/sections";
import {Layout} from "./layout/layout";

function App() {
  return <Layout hero={<>
    <HeroSection/>
    <LogosSection className="print:hidden"/>
  </>}>
    <ExperienceSection/>
  </Layout>
}

export default App
