import React, { useState } from 'react'


const Form = (props) => {

    // create a state to hold form data
    const [formData, setFormData] = useState(props.song)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (formData.title !== "" && formData.artist !== "" && formData.time !== "") {
            props.handleSubmit(formData)
        }
        setFormData({
            title: "",
            artist: "",
            time: ""
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='add-song'>
            <h2 className='add-text'>ADD A NEW SONG</h2>
            <form onSubmit={handleSubmit} className='all-btn'>
                <h4>TITLE</h4>
                <input
                    className='title-btn'
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
                <h4>ARTIST</h4>
                <input
                    className='artist-btn'
                    type='text'
                    name='artist'
                    value={formData.artist}
                    onChange={handleChange}
                />
                <h4>TIME</h4>
                <input
                    className='time-btn'
                    type='text'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                />
                <br />
                <input
                    className='add-song-btn'
                    type='submit'
                    value='ADD NEW SONG'
                />
            </form>
        </div>
    )
}

export default Form