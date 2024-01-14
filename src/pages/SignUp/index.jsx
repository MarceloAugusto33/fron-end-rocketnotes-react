import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
    return (
        <Container>

            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicaçao para salver e gerenciar seus links uteis</p>

                <h2>Crie sua Conta!</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="E-mail"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <Link to="/">
                    Votar para o login
                </Link>
            </Form>

        </Container>
    );
}