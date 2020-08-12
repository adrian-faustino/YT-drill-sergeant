import React from "react";
import { default as Controller } from "./VidSearchFieldController";

const VidSearchFieldModel = () => {
  const controller = Controller();
  return (
    <div>
      <form>
        <input
          value={controller.input}
          onChange={controller.handleInputChange}
          placeholder="Enter video URL"
        />
      </form>
    </div>
  );
};

export default VidSearchFieldModel;
