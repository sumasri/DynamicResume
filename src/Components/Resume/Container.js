import React, { Component } from 'react'
import Presentation from "./Presentation";
import MyResume from "../MyResume"
export default class Container extends Component {
constructor (){
    super();
this.state={
FirstName:"",
LastName:"",
DOB:"",
Email:"",
PhoneNumber:"",
Gender:"",
Education:"",
Percentage:"",
CollegeName:"",
City:"",
Hobbies:"",
Skills:""
}
};

handleFirstName = (e) =>{
    this.setState({
        FirstName:e.target.value
    });
}
handleLastName = (e) =>{
    this.setState({
        LastName:e.target.value
    });
}
handleDateOfBirth = (e) =>{
    this.setState({
        DOB:e.target.value
    });
}
handleEmail = (e) =>{
    this.setState({
        Email:e.target.value
    });
}
handlePhoneNumber = (e) =>{
    this.setState({
        PhoneNumber:e.target.value
    });
}
handleGender = (e) =>{
    this.setState({
        Gender:e.target.value
    });
}
   
handleEducation = (e) =>{
    this.setState({
        Education:e.target.value
    });
}
handlePercentage = (e) =>{
    this.setState({
        Percentage:e.target.value
    });
}
handleCollegeName = (e) =>{
    this.setState({
        CollegeName:e.target.value
    });
}
handleCity = (e) =>{
    this.setState({
        City:e.target.value
    });
}
handleHobbies = (e) =>{
    this.setState({
        Hobbies:e.target.value
    });
}
handleSkills = (e) =>{
    this.setState({
       Skills:e.target.value
    });
}

    render() {
        return (
            <div style={{display:"flex"}}>
                <Presentation
                handleFirstName={this.handleFirstName}
                handleLastName={this.handleLastName}
                handleDateOfBirth={this.handleDateOfBirth}
                handleEmail={this.handleEmail}
                handlePhoneNumber={this.handlePhoneNumber}
                handleGender={this.handleGender}
                handleEducation={this.handleEducation}
                handlePercentage={this.handlePercentage}
                handleCollegeName={this.handleCollegeName}
                handleCity={this.handleCity}
                handleHobbies={this.handleHobbies}
                handleSkills={this.handleSkills}                
                />
             <MyResume
              data={this.state}
             />
            </div>
        )
    }
}


