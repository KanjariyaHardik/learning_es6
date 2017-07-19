import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate_img = 'https://cdn2.iconfinder.com/data/icons/humano2/128x128/status/gtk-missing-image.png'
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a
                                href={infoLink}
                                key={index}
                                className="book"
                                target="_blank"
                            >

                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : alternate_img}
                                    alt="Book Image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;