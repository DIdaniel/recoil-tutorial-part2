import React from "react";
//import { boringActivities as activitiesAtom } from "../recoil/atoms";
import { filterActivities } from "../recoil/selectors";
import { useRecoilValue } from "recoil";
import { Box } from "@material-ui/core";

const ActivityList = () => {
  const activities = useRecoilValue(filterActivities);

  return (
    <Box display="flex" flexWrap="wrap">
      {activities.length > 0 ? (
        activities.map(({ activity, index }) => (
          <Box key={index} bgcolor="black" color="darkGrey" p={5} m={2}>
            {activity}
          </Box>
        ))
      ) : (
        <Box bgcolor="black" color="darkGrey" p={5} m={2}>
          No Data!!!!
        </Box>
      )}
    </Box>
  );
};

export default ActivityList;
