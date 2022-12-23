import React from 'react'
import PropTypes from "prop-types"
function Rating({value,text,color}) {
  return (
    <div className='rating'>
<span>
        <i 
        style={{color}}
        className={
                value>=1
                ?`fas fa-star`
                :value>=0.5
                ?`fas fa-star-half-alt`
                :`far fa-star`
        }></i>
</span>
<span>
        <i 
        style={{color}}
        className={
                value>=2
                ?`fas fa-star`
                :value>=1.5
                ?`fas fa-star-half-alt`
                :`far fa-star`
        }></i>
</span>
<span>
        <i 
        style={{color}}
        className={
                value>=3
                ?`fas fa-star`
                :value>=2.5
                ?`fas fa-star-half-alt`
                :`far fa-star`
        }></i>
</span>
<span>
        <i 
        style={{color}}
        className={
                value>=4
                ?`fas fa-star`
                :value>=3.5
                ?`fas fa-star-half-alt`
                :`far fa-star`
        }></i>
</span>
<span>
        <i style={{color}}
        className={
                value>=5
                ?`fas fa-star`
                :value>=4.5
                ?`fas fa-star-half-alt`
                :`far fa-star`
        }></i>
</span>
<span><h6>{text && text}</h6></span>

    </div>
  )
}

// setting default values

Rating.defaultProps={
        color:"yellow"
}

// Prop types=>first import from "prop-types"

Rating.propTypes={
value:PropTypes.number.isRequired,
// Text:PropTypes.string.isRequired,
// color:PropTypes.string,
}

export default Rating