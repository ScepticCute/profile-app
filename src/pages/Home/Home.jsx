import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { MiddleSection } from '../../components/MiddleSection/MiddleSection';
import { SitesSection } from '../../components/SitesSection/SitesSection';
import {SkillsSection} from '../../components/SkillsSection/SkillsSection'



export const Home = ({ arrowIsActive }) => {
  return (
    <>
      <WelcomeSection arrowIsActive={arrowIsActive} />
      {/* <MiddleSection /> */} 
      <SitesSection />
      <SkillsSection />
    </>
  )
}
