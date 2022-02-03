import { createContext, useState } from 'react';

export const NavContext = createContext({
  isNavOpened: false,
  toggleNavOpened: () => {},
});

interface NavProviderProps {
  children: React.ReactNode;
}

export function NavProvider({ children }: NavProviderProps) {
  const toggleNavOpened = (): void => {
    setIsNavOpened(!isNavOpened);
  };
  const [isNavOpened, setIsNavOpened] = useState(false);

  return <NavContext.Provider value={{ isNavOpened, toggleNavOpened }}>{children}</NavContext.Provider>;
}
