import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
 
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
 
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
 
  render() {
    return (
        <>
            <Form
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
            />
            <DisplayData formData={this.state}/>
        </>
    )
  }
}
 
export default ParentComponent;