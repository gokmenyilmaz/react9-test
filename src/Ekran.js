import React, { Component } from 'react'

export default class Ekran extends Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
      
    }

    render() {
        return (
            <div>
                xxxx:
              {process.env.REACT_APP_API_ENDPOINT}
            </div>
        )
    }
}
