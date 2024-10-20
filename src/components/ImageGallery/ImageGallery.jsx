import ImageCard from "../ImageCard/ImageCard"
import styles from './ImageGallery.module.css'
import Masonry from "react-responsive-masonry"

const ImageGallery = ({ images, openModal }) => {
    return (
        <Masonry className={styles.masonryContainer} columnsCount={3} gutter="25px">
            {images.map((image) => {
                return (
                    <div className={styles.masonryItem} key={image.id}>
                        <ImageCard
                            image={image}
                            openModal={openModal} />
                    </div>
                )
            })}
        </Masonry>
    )
}

export default ImageGallery