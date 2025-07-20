import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./styles";

export function Header() {
  return (
   <Container>
    <Navigation>
        <div>
            <HeaderLink>
                Home
            </HeaderLink>
             <HeaderLink>
                Cardápio
            </HeaderLink>
        </div>
    </Navigation>
    <Options>
        <Profile>
            <div>
                <p>Olá, <span>Samuel</span></p>
                <Logout>Sair</Logout>
            </div>
        </Profile>
    </Options>
    <LinkContainer>
    <HeaderLink>
        Carrinho
    </HeaderLink>
    </LinkContainer>
   </Container>
  );
}
