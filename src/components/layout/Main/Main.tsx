export type MainProps = {
  /**
   * Child components to render within the Main container.
   */
  children?: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
