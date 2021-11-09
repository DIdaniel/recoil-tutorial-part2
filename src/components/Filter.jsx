import React from "react";
import { Types } from "../recoil/types";
import { Button, ButtonGroup } from "@material-ui/core";
import { selectedActivityType } from "../recoil/atoms";
import { useRecoilState } from "recoil";

const Filter = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedActivityType);

  return (
    <ButtonGroup color="primary">
      {Types.map((type) => {
        return (
          <Button
            color={selectedType === type ? "primary" : "default"}
            key={type}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Filter;
