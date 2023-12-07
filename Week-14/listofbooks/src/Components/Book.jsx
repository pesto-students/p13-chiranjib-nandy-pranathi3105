import React, { Component } from 'react'

function Book({title,author,year}){
    return(
        <li>{title} {author} {year}</li>
    )
}

export default Book