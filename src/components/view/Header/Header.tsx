export type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};
