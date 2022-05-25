import React, { Component } from 'react'
import api from '../../api'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components'



const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateCustomer extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/customers/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteCustomer extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the customer ${this.props.id} permanently?`,
            )
        ) {
            api.deleteCustomerById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class CustomersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllCustomers().then(customers => {
            this.setState({
                customers: customers.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { customers, isLoading } = this.state
        console.log(customers)
        return (
            
            <Wrapper>
                {customers.map(customer =>
                <Grid key="customer._id">{customer.auth.login} {customer.role}</Grid>
                )
            }
            </Wrapper>
        
        )
    }
}

export default CustomersList