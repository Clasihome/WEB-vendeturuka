import React, { Fragment } from "react";

import Hero from "../components/services/hero";
import Description from "../components/services/description";
/* import Description from "../components/about/description"; */
import Services from "../components/services/services";
import Team from "../components/about/team";
import Ubication from "../components/ubication";
import Contact from "../components/contact";

export default () => {
  return (
    <Fragment>
      <Hero />
      <Description />
      <Services />
    </Fragment>
  );
};
