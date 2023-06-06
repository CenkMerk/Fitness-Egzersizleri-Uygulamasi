import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {data.map((item) => (
          <Tab
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
            label={
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
              />
            }
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default HorizontalScrollbar;
