import { HomeTemplate } from "../templates/home";
import { AppTitle } from "../atoms/app-title";

export const HomePage = () => {
  return (
    <HomeTemplate
      title={<AppTitle />}
      counter={<div>COUNTER</div>}
      footer={<div>FOOTER</div>}
    />
  );
};
