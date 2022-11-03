import React from 'react'
import '../Componentes/ButtonNav.css'

export default function ButtonNav(props) {
    let { nombre, Link } = props
    return (
        <a href={Link}>{nombre}</a>
    )
}
