import "./SearchImage.css"

function ImageByCategory({imageCollage, altImg, style}){
    return(
        <>
            <img
                src={`${import.meta.env.BASE_URL}images/${imageCollage}.jpg`}
                alt={imageCollage}
                className="collage"
            />
        </>
    )
}

export {ImageByCategory}