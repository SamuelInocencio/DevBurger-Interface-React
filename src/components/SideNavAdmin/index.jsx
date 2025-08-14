import { SignOut } from '@phosphor-icons/react';

import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext.jsx';
import { navLinks } from './NavLinks.jsx';
import { NavLink, Container, Footer, NavLinkContainer } from './styles.js';

export function SideNavAdmin() {
  const { logout } = useUser();
  return (
    <Container>
      <img src={Logo} alt="DevBurger-Logo" />

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.icon}
            <p>{link.label}</p>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut /> 
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
