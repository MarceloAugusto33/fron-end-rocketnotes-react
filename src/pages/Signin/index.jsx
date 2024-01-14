import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
    return (
        <Container>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicaçao para salver e gerenciar seus links uteis</p>

                <h2>Faça seu login</h2>

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

                <Button title="Entrar" />

                <a href="#">
                    Criar Conta
                </a>
            </Form>

            <Background/>
        </Container>
    );
}