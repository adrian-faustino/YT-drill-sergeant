import React from "react";
import { controller } from "./VidSearchFieldController";
import { useSelector, RootStateOrAny } from "react-redux";

const VidSearchField = () => {
  const store = useSelector((state: RootStateOrAny) => state);

  return (
    <div>
      <form onSubmit={controller.handleSubmitVidURL}>
        <input
          value={store.vidSettings.current_url_input}
          onChange={controller.handleInputChange}
          placeholder="Enter video URL"
        />
      </form>
    </div>
  );
};

export default VidSearchField;
