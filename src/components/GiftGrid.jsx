import { GiftCard } from './GiftCard'
import "../styles/styles.css";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ categorie }) => {
    const { images, isLoading } = useFetchGifs(categorie)

    return (
        <>
            <h3>{categorie}</h3>
            {
                isLoading && <h2>Cargando ...</h2>
            }
            <div className='card-grid'>
                {images.map((image) => {
                    return <GiftCard
                        key={image.id}
                        {...image} />
                })}
            </div>
        </>
    )
}
