import { HomeTemplate } from "../templates/home";
import { AppTitle, Footer } from "../atoms"

export const HomePage = () => {
  return (
    <HomeTemplate
      title={<AppTitle />}
      counter={<div>COUNTER</div>}
      footer={<Footer />}
    />
  );
};
