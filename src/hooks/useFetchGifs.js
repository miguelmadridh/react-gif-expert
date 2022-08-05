import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (categorie) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(categorie)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        {
            images,
            isLoading
        }
    )
}
