export type ViewProps = {
  /**
   * Child components to render within the View. Must be
   * layout-based components from the Surface UI framework.
   */
  children: React.ReactNode;
};

export const View = ({ children }: ViewProps) => {
  return <div>{children}</div>;
};
