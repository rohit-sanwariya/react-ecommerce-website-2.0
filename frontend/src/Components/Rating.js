import React from 'react'

const Rating = ({rating,numReviews}) => {
    const star ={
        color:"#f8e825"
    }
    return (
        <div className="rating">
            <span >
                <i style={star}
                className={
                rating>=1?
                "fas fa-star":
                rating>=.5?
                "fas fa-star-half-alt":
                "far fa-star"}>

                </i>
            </span>
           
          
            <span >
                <i style={star} className={
                rating>=2?
                "fas fa-star":
                rating>=1.5?
                "fas fa-star-half-alt":
                "far fa-star"}>

                </i>
            </span>
            <span >
                <i style={star} 
                className={
                rating>=3?
                "fas fa-star":
                rating>=2.5?
                "fas fa-star-half-alt":
                "far fa-star"}>

                </i>
                </span>
                <span >
                <i style={star} className={
                rating>=4?
                "fas fa-star":
                rating>=3.5?
                "fas fa-star-half-alt":
                "far fa-star"}>

                </i>
            </span>
            <span >
                <i style={star} className={
                rating>=5?
                "fas fa-star":
                rating>=4.5?
                "fas fa-star-half-alt":
                "far fa-star"}>

                </i>
            </span>{" "}
          <span>{numReviews && numReviews}</span>
        </div>
    )
}

export default Rating
