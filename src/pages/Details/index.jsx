import { Container, Links, Content } from "./styles";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />


      <main>
        <Content>



          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et fugit ea saepe. Aliquam adipisci reprehenderit, alias dolorum atque sapiente vitae mollitia officiis unde molestiae impedit illum culpa doloremque aut?</p>

          <Section title="Links uteis">
            <Links>
              <li><a href="#">www.rocketseat.com.br</a></li>
              <li><a href="#">www.rocketseat.com.br</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>

  )
}