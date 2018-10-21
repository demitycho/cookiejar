import React, { Component } from 'react';
import './App.css';
import { Button, Form, Grid, Header, Image, Dropdown, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import View from './View'

const accountOptions = [
  {
    text: 'johnnytan@gmail.com',
    value: 'johnnytan@gmail.com',
    image: { avatar: true, src: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/54.png' },
  },
  {
    text: 'ethanchen@gmail.com',
    value: 'ethanchen@gmail.com',
    image: { avatar: true, src: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/9.png' },
  },
]

class App extends Component {
  state = {
    loggedIn: false,
    account: null
  }

  selectAccount = () => {
    this.setState({loggedIn:true});
  }

  render() {
    return (
      <div>
        {this.state.loggedIn
          ? <View account={this.state.account}/>
          :
          <div className='login-form'>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Dropdown
                      style={{marginBottom: '20px'}}
                      placeholder='Select Account'
                      fluid selection options={accountOptions}
                      onChange={(e,d)=>this.setState({ account:d.value} )}
                    />

                    <Button
                      color='teal'
                      fluid size='large'
                      onClick={this.selectAccount}
                      disabled={!this.state.account}
                    >
                      Login with Paypal Account
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        }
      </div>
    );
  }
}

export default App;
