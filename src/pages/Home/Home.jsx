import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { SitesSection } from '../../components/SitesSection/SitesSection';
import {SkillsSection} from '../../components/SkillsSection/SkillsSection'



export const Home = ({ arrowIsActive }) => {
  return (
    <>
      <WelcomeSection arrowIsActive={arrowIsActive} />
      <SitesSection />
      <SkillsSection />
    </>
  )
}
