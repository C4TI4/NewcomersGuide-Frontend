import React, { useState } from "react";
import { Input } from "@nextui-org/react";

function FaqsSearchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-lg mb-4 font-semibold">
        Are you looking for something else?
      </h2>
      <div className="w-full max-w-md">
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Type here..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default FaqsSearchbar;
