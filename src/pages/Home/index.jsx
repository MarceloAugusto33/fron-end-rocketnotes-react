import { FiPlus } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { api } from '../../services/api';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagSelected(tagName) {
        if(tagName === 'all'){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)
        if(alreadySelected){
            return setTagsSelected(prevState => prevState.filter(tag => tag !== tagName));
        }

        setTagsSelected(prevState => [...prevState, tagName]);
    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data)
        }

        fetchTags();
    }, [])

    useEffect(() => {
         async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data);
         }

         fetchNotes()
    }, [tagsSelected, search]);

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        isActive={tagsSelected.length === 0}
                        onClick={() => handleTagSelected("all")}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo"
                    onChange={e => setSearch(e.target.value)}
                 />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note 
                                data={note}
                                key={String(note.id)}   
                                onClick={() => handleDetails(note.id)} 
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>


        </Container>
    );
}