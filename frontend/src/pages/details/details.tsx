import React from "react";
import { FullHeroForm } from "../../libs/components/components";
import { FormType } from "../../libs/enums/enums";

const Details: React.FC = () => {
  return (
    <div>
      <h2>Details</h2>
      <FullHeroForm type={FormType.DETAILS} />
    </div>
  );
};

export { Details };
