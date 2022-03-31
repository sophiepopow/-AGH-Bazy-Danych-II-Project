
import React, { Component } from 'react'
import api from '../api'

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

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class CustomersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            surname: '',
            age: '',
        }
    }

    handleChangeInputName = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }

    handleChangeInputSurname = async event => {
        const surname = event.target.validity.valid
            ? event.target.value
            : this.state.surname

        this.setState({ surname })
    }

    handleChangeInputAge = async event => {
        const age = event.target.value
        this.setState({ age })
    }

    handleIncludeCustomer = async () => {
        const { firstname, surname, age } = this.state
        const payload = { firstname, surname, age }

        await api.insertCustomer(payload).then(res => {
            window.alert(`Customer inserted successfully`)
            this.setState({
                firstname: '',
                surname: '',
                age: '',
            })
        })
    }

    render() {
        const { firstname, surname, age } = this.state
        return (
            <Wrapper>
                <Title>Create Customer</Title>

                <Label>Firstname: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeInputName}
                />

                <Label>Surname: </Label>
                <InputText
                    type="text"
                    value={surname}
                    onChange={this.handleChangeInputSurname}
                />

                <Label>Age: </Label>
                <InputText
                    type="number"
                    value={age}
                    onChange={this.handleChangeInputAge}
                />

                <Button onClick={this.handleIncludeCustomer}>Add Customer</Button>
                <CancelButton href={'/customer/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default CustomersInsert