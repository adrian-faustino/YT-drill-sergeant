import { useState } from "react";

const VidSearchFieldController = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { handleInputChange, input };
};

export default VidSearchFieldController;
