import { Link } from "react-router-dom";
import { Footer, Header, LayoutComponent, Main, MainLink, Nav, StyledNavLink, WelcomeText } from "./styles";
import { useState } from "react";
import axios from "axios";
import { navLinksData } from "./data";
import { NavLinkObj, UserTextInterface, LayoutProps } from "./types";
import { v4 } from "uuid";

import React from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = React.createContext<UserTextInterface>({
  user: undefined,
  name: undefined,
  email: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => { },
});

function Layout({ children }: LayoutProps) {
  const [user, setUser] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  const USER_URL: string = 'https://randomuser.me/api/';

  const getUser = async () => {
    setError(undefined);
    try {
      setLoading(true);
      const response = await axios.get(USER_URL);
      const data = response.data.results[0];
      setUser(`${data.name.first} ${data.name.last}`);
      setName(data.name.first);
      setEmail(data.email);
      setCity(data.location.city);
      setCountry(data.location.country);
      setPhone(data.phone);
      setAvatar(data.picture.large);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const navLinks = navLinksData.map((navLink: NavLinkObj) => (
    <StyledNavLink
      key={v4()}
      to={navLink.to}
      style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
    >
      {navLink.linkName}
    </StyledNavLink>
  ));

  return (
    <UserDataContext.Provider value={{
      user, name, email, error, isLoading, getUser,
      city, country, phone, avatar
    }}>
      <LayoutComponent>
        <Header>
          <Link to="/"></Link>
          <Nav>{navLinks}</Nav>
        </Header>
        <Main><WelcomeText>Welcome to Our Website!</WelcomeText>{children}</Main>
        <Footer>
        <MainLink to="/layout">Go to Page</MainLink>
        </Footer>
      </LayoutComponent>
    </UserDataContext.Provider>
  );
}

export default Layout;