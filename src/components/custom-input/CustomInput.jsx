import React from 'react'

import './custom-input.scss'

const CustomInput = ({ handleChange, label, ...other }) => (

    <div className="custom-input">
        <input className="custom-input__form-input" onChange={handleChange} {...other} />
        {
            label ?
                (
                    <label className={other.value.length > 0 ? 'shrink custom-input__label' : 'custom-input__label'}>
                        {label}
                    </label>)
                :
                null
        }
    </div >
)

export default CustomInput;