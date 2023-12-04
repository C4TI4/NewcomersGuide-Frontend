import React from "react";
import ForumThreadList from "./ForumThreadList";

const CommunityForum = () => {
  return (
    <div className="forum-container">
      <h1 className="text-4xl font-bold mb-6">Community Forum</h1>
      <ForumThreadList />
    </div>
  );
};

export default CommunityForum;
