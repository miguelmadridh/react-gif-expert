import { useState } from 'react'

export const AddCategory = ({onNewAnime}) => {

    const [anime, setAnime] = useState('')

    const onInputChange = ({ target }) => {
        return setAnime(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const animeValue = anime.trim();
        if (animeValue.length <= 1) return;
        onNewAnime(animeValue);
        setAnime('')
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            
            <input
                type="text"
                placeholder='Buscar Gifts'
                value={anime}
                onChange={(event) => onInputChange(event)} />
        </form>
    )
}
