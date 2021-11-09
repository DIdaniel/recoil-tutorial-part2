import React, { useEffect } from "react";
import { Types } from "../recoil/types";
import {
  boringActivities as activitiesAtom,
  selectedActivityType as selectedAtom,
} from "../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { Button, Box } from "@material-ui/core";

const ActionCTA = () => {
  const [activiy, setActivity] = useRecoilState(activitiesAtom);
  const selectedType = useRecoilValue(selectedAtom);

  const generateRandomActivities = () => {
    const type = selectedType === Types[0] ? "" : selectedType;
    axios
      .get(`http://www.boredapi.com/api/activity/?type=${type}`)
      .then((res) => res.data)
      .then((data) => setActivity((activiy) => [...activiy, data]));
  };

  useEffect(() => {
    generateRandomActivities();
  }, []);

  console.log(activiy);

  return (
    <Box display="flex" m={12}>
      <Button color="primary" onClick={generateRandomActivities}>
        Gernerate Random Activities
      </Button>
      <Button
        color="danger"
        onClick={() => {
          setActivity([]);
        }}
      >
        Reset Data
      </Button>
    </Box>
  );
};

export default ActionCTA;
