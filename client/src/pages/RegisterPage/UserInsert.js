import React, { Component } from 'react'
import api from '../../api'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UserInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            role: 'customer',
            login: '',
            password: '',
            name:'',
            transactions:[]
        }

        this.props = props;
    }

    handleChange = e => {
        const { value } = e.target;
        this.setState({
          role: value
        });
      };

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
            this.setState({
                login: '',
                password: '',
                name:'',
                transactions:[]
            })
            this.props.navigate('/login');
            toast(`Customer inserted successfully`)
        })
    }


    handleIncludeSeller = async () => {
        const { login, password, name} = this.state
        const payload = { auth:{login, password}, name }

        await api.insertSeller(payload).then(res => {
            this.setState({
                login: '',
                password: '',
                name:''
            })
            this.props.navigate('/login');
            toast(`Seller inserted successfully`);
        })
    }

    render() {
        const { role, login, password, name, transactions, rating } = this.state
        return (
            <Wrapper>
                <Title>Rejestracja</Title>
                <Label>Nazwa użytkownika: </Label>
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

                <Label>Hasło: </Label>
                <InputText
                    type="password"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <FormControl>
                    <FormLabel id="radio">Wybierz rolę:</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio"
                        defaultValue="customer"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="customer" onChange={this.handleChange} control={<Radio />} label="Kupujący" />
                        <FormControlLabel value="seller" onChange={this.handleChange} control={<Radio />} label="Sprzedawca" />
                    </RadioGroup>
                    </FormControl>
                    <Box>
                        { role == "customer"
                            ? <Button variant="contained" color="primary" onClick={this.handleIncludeCustomer}>Zarejestruj jako kupujący</Button>
                            : <Button variant="contained" color="primary" onClick={this.handleIncludeSeller}>Zarejestruj jako sprzedawca</Button>
                        }
                    </Box>
                </Box>
            </Wrapper>
        )
    }
}

const UserInsertContainer = (props) => {
    const navigate = useNavigate();
    return <UserInsert {...props} navigate={navigate} />
}
export default UserInsertContainer