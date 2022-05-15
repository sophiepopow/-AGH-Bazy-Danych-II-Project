
import React, { Component } from 'react'
import api from '../../api'
import Button from '@mui/material/Button';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

// const Button = styled.button.attrs({
//     className: `btn btn-primary`,
// })`
//     margin: 15px 15px 15px 5px;
// `

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class CustomersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            name:'',
            transactions:[]
        }
    }

    handleChangeInputLogin = async event => {
        const login = event.target.value
        this.setState({ login })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.validity.valid
            ? event.target.value
            : this.state.password

        this.setState({ password })
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }



    handleIncludeCustomer = async () => {
        const { login, password, name, transactions } = this.state
        const payload = { auth:{login, password}, name, transactions }

        await api.insertCustomer(payload).then(res => {
            window.alert(`Customer inserted successfully`)
            this.setState({
                login: '',
                password: '',
                name:'',
                transactions:[]
            })
        })
    }

    render() {
        const { login, password, name, transactions } = this.state
        return (
            <Wrapper>
                <Title>Create Customer</Title>
                <Label>Username: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Login: </Label>
                <InputText
                    type="text"
                    value={login}
                    onChange={this.handleChangeInputLogin}
                />

                <Label>Password: </Label>
                <InputText
                    type="password"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />


                <Button variant="contained" color="primary" onClick={this.handleIncludeCustomer}>Add Customer</Button>
                <Button variant="contained" color="secondary" >Cancel</Button>
            </Wrapper>
        )
    }
}

export default CustomersInsert