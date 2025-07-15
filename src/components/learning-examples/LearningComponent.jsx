import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';
import { Component } from 'react';

export default class LearningComponent extends Component{
  render(){
    return(
        <>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <LearningJavaScript></LearningJavaScript>
        </>
    );
  }
}
