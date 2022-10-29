import * as React from "react";
import { Button, Icon } from "react-native-magnus";

function IconButton({ onPressFct }) {
  return (
    <Button
      bg="#e2b497"
      borderless
      rounded="circle"
      alignSelf="center"
      onPress={onPressFct}
    >
      <Icon name="heart" color="#351401" />
    </Button>
  );
}
export default IconButton;
