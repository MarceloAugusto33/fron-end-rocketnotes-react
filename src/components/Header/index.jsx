import { Container, Profile, Logout } from "../Header/styles"
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/marceloaugusto33.png" 
                    alt="Foto do Usuario"
                />

                <div>
                    <span>Bem vindo!</span>
                    <strong>Marcelo Augusto Tavares</strong>
                </div>
            </Profile>


            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}