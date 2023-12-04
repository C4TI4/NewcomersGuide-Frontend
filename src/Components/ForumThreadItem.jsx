import React from "react";
import { Card, Text } from "@nextui-org/react";

const ForumThreadItem = ({ thread }) => {
  return (
    <Card hoverable clickable className="my-2">
      <Card.Body className="flex flex-col">
        <Text h3 className="mb-2">
          {thread.title}
        </Text>
        <Text className="mb-2">{thread.preview}</Text>
        <Text small color="primary">{`Posted by ${thread.author}`}</Text>
      </Card.Body>
    </Card>
  );
};

export default ForumThreadItem;
