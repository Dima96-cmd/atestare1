import React, { useState } from "react";
import styles from "./Card.module.css";
import image from "../../data/images.json";
import Image from "../Image/Image";
import svg from "../../assets/question.svg"

function Cards({ images, onClick }) {
    console.log("Image" ,image)
    const [status, setStatus] = useState(false)
    function handleClick(){
       if (status === false){
        console.log('test')
       }
    }
    return (
           <div className={styles.imageList}>
                {image.map((image, index) => (
                    <Image key={image.id} image={{ ...image}} onClick={() => handleClick(index)} />
                ))}

            </div>
    );
}

export default Cards;
