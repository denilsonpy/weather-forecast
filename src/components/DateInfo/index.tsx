import { Text } from "@chakra-ui/layout";
import React from "react";

export default function DateInfo() {
  const date = new Date();

  return <Text fontSize="2xl">{date.toDateString()}</Text>;
}
