import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useEffect } from "react";


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

    const [data, setData] = useState(null);

    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data);
        }

        fetchNote();
    }, [])

    function handleBack() {
        navigate(-1)
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja remover a nota?")

        if (confirm) {
            await api.delete(`/notes/${params.id}`);
            navigate(-1)
        }
    }

    return (
        <Container>
            <Header />

            {
                data &&
                <main>
                    <Content>

                        <ButtonText
                            title="Excluir nota"
                            onClick={handleRemove}
                        />

                        <h1>{data.title}</h1>

                        <p>{data.description}</p>

                        {data.links &&
                            <Section title="Links uteis">
                                <Links>
                                    {
                                        data.links.map(link => (
                                            <li key={String(link.id)}>
                                                <a href={link.url} target="_blank">{link.url}</a>
                                            </li>
                                        ))
                                    }

                                </Links>
                            </Section>
                        }
                        {
                            data.tags &&
                            <Section title="Marcadores">
                                {
                                    data.tags.map(tag => (
                                        <Tag
                                            title={tag.name}
                                            key={String(tag.id)}
                                        />
                                    ))
                                }
                            </Section>
                        }
                        <Button 
                            title="Voltar" 
                            onClick={handleBack} 
                        />
                    </Content>
                </main>
            }
        </Container>

    )
}