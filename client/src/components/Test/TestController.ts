const TestController = () => {
  const toggleVidSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log("Clicked!");
  };

  return { toggleVidSearch };
};

export const Controller = TestController();
