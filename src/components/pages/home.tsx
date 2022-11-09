import { HomeTemplate } from "../templates/home";

export const HomePage = () => {
  return (
    <HomeTemplate
      title={<div>TITLE</div>}
      counter={<div>COUNTER</div>}
      footer={<div>FOOTER</div>}
    />
  );
};
