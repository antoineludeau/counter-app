import { HomeTemplate } from "../templates/home";
import { AppTitle, Footer } from "../atoms"
import { Counter } from "../molecules/counter";

export const HomePage = () => {
  return (
    <HomeTemplate
      title={<AppTitle />}
      counter={<Counter/>}
      footer={<Footer />}
    />
  );
};
