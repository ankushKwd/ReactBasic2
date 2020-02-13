import React, { useRef } from "react";
import View from "./view";

import useDrop from "../../Hooks/useDrop";
 

export default ({ children, heading, onDrop }) => {
  const dropRef = useRef();
  const { dropState, droppedItem } = useDrop({
    ref: dropRef,
    onDrop
  });
  return (
    <View ref={dropRef} heading={heading} droppedItem={droppedItem}>
      {children}
    </View>
  );
};
