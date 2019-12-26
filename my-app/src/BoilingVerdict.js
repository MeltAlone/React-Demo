import React from 'react'

export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水沸腾了</p>;
    }
    return <p>水还没有沸腾</p>;
}
