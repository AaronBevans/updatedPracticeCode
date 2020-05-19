import React from "react"

class Application extends React.Component{

    render(){
        //inline css styling can go here.
        
        //to use props use 'this.' keyword to activate props items.
        return(
            <div>
                <h3>{this.props.whatever}</h3>
            </div>
        )
    }
}
export default Application

import React from 'react'
import Application from "./FakeApplicationComp"

class App extends React.Component{
    render(){
        return(
            <div>
                <Application whatever = 'Hello'/>
            </div>
        )
    }
}
export default App

class Apple extends React.Component{
    render(){
        return(
            <div>
                {this.props.moreShit}
            </div>
        )
    }
}
export default Apple

import React from 'react'

class App1 extends React.Component{
    render(){
        const fakeComponent = fakeData.map(dataItem=> <FakeData key={dataItem.id}
        dataItem={//points to object
            item//
        }
        />)
        return(
                <div>
                </div>
        )
    }
}
export default App1

import React from 'react'
import PracticeChild from "./practiceComp"
//component that renders its own state.
//but accepts a child component that uses props.
class PracticeApp extends React.Component{

    constructor(){
        super()
        this.state = {
            name:'Aaron',
            title:'Front-End Software Engineer',
            develop:'User Interfaces'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.title}</h1>
                <h1>{this.state.develop}</h1>
                <br/>
                <PracticeChild
                name = 'Aaron Bevans',
                title = 'Fron-End Software Engineer',
                data = 'properties',
                language = 'JavaScript',
                framework = 'ReactJS'
                />
            </div>
        )//props will always render from inside a child component.
    }
}
export default PracticeApp

import React from 'react'
//deliver props from here
class PracticeChild extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.title}</h1>
                <br/>
                <br/>
                <h1>{this.props.data}</h1>
                <h1>{this.props.language}</h1>
                <h1>{this.props.framework}</h1>
            </div>
        )
    }

}
export default PracticeChild

/*const pseudoArray = [
    {
        name:'Aaron',
        title:'Software Engineer'   
    },
    {
        data:'props',
        language:'JavaScript',
        framework:'ReactJS'
    },
]
export default pseudoArray*/

//template literals
let title = 'Front-Software Engineer';
let language = 'JavaScript';
let framework = 'React.js';

let literalSentence = `I am a ${title} who uses ${language} with frameworks like ${framework}.`;
//practice conditional rendering.
class Conditioned extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        let displayLog
        if(this.state.isLoggedIn){
            displayLog = 'in'
        }else{
            displayLog = 'out'
        }
        return(
            <div>
            <h2>You are currently logged (displayLog)</h2>
            </div>
        )
    }
}

//counter component that changes its own state to count up.
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {//name of state object
            count:0
        }
    } 

    handleClick(){//method that allows state object to be changed.
        this.setState({count:1})
    }

    render(){
        return(
            //{this.state.count} = embedding state change.

            //onClick={this.handleClick} = event handler that allows state change functionality.
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
export default Counter

class Counter1 extends React.Component{
    constructor(){
        super()

        //original state object
        this.state = {
            count1:0
        }
    }

    //method that declares new state object
    handleClick(){
        this.setState({count1:1})
    }

    render(){
        //{this.state.count1} = new state object within element to be rendered.
        //onClick={this.handleClick} = event handler that renders new state object to the web page.
        return(

            <div>
                <h1>{this.state.count1}</h1>

                <button onClick={this.handleClick}>Count Up!</button>
            </div>
        )
    }

}
export default Counter1

class CountApp extends React.Component(){
    constructor(){
        super()
        this.state = {
            count2:3
        }
    }
    handleClick(){
        this.setState({count2:3})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count2}</h1>
                <button onclick={this.handleClick}>Click to add!</button>
            </div>
        )
    }
}
export default CountApp

class CountApp1 extends React.Component{
    constructor(){
        super()
        this.state = {
            count3: 4
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({count3: 5})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count3}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default CountApp1

class NewCount extends React.Component{
    constructor(){
        super()
        this.state = {
            count0:1
        }
    }
    this.handleClick = this.handleClick.bind(this)
}
    handleClick(){
        this.setState({count0:2})
    }
render(){
    return(
        <div>
            <h1>{this.state.count0}</h1>
            <button onClick ={this.handleClick}>Click</button>
        </div>
    )
}
export default NewCount

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState=>{
            return{
                count:prevState.count + 1
            }
        })

    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}
export default App

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState =>{
            return{
                count:prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default App


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos:completed
        }
        this.handleChange = this.handleChange.bind(this)//binds method to class.
    }

    handleChange(id){//method tha changes state
        this.setState(prevState=>{

            const updatedTodos = prevState.todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos:updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item=> <TodoItem key={item.id} //mapped data that uses state.
        item={item}
        handleChange={this.handleChange}
            />)
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}
export default App

//GENERAL IDEA PRACTICE/MOCK UP
import dataArray from "./dataArrayFile"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            array:dataArray
        }
        this.changeUp = this.changeUp.bind(this)
    }

   changeUp(id){
       this.setState(prevState=>{
           const updatedData = prevState.array.map(dataItem=>{
               if(dataItem.id === id){
                   return{
                       ...dataItem,
                       completed:!dataItem.completed
                   }
               }
               return dataItem
           })
           return {
               array: updatedData
           }
       })
   }

    render(){
        const arrayComponents = this.state.array.map(data=> <FakeComponent            
        key={data.id} itemFake={data} changeUp={this.changeUp}
        />)

        return(
            <div>
                <input type='checkbox' checked={props.itemFake.checked}

                onChange ={()=> props.changeUp(props.itemFake.id)}
                />
            </div>
        )
    }
}
export default App

import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            data:array
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //method that changes state.
    handleChnage(id){
        this.setState(prevState=>{
            const updatedArray = prevState.data.map(dataItems=>{
                if(dataItems.id === id){
                    return{
                        ...dataItems,
                        completed:!dataItems.completed
                    }
                }
                return dataItems
            })
            return{
                data:updatedItems
            }
        })
    }
  

    render(){
        const fakeComponent = this.state.data.map(dataItem=> <Component
        key={dataItem.id} fkObj={dataItem} 
        handleChange={this.handleChange}
        />)

        return(
            <div>
                {fakeComponent}
                
            </div>
        )
    }
}
export default App

//fake checkbox component
function Component(props){
    return(
        <div>

            <input type='checkbox' 
            checked={props.fkObjJ.completed}
            onChange={props.handleChange(props.fkObj.id)}
            }>

        </div>
}

{/*component will re-render once lifecycle method runs.*/} 

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading:true
        }
    }

/*Lifecycle method that checks for updates when the page renders
then it will re-render and run updated code.*/

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading:false
            })
        }, 1500);
    }
    

    render(){
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>{/*component contains whatever state is available and renders it*/} 
            </div>
        )
    }
}
export default App


{/*functional component to render*/}

function Conditional(props){

    return(
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Conditional Rendering</h1>}
        </div>
    )
    
}
export default Conditional


//conditional rendering with use of a loading component and lifecycle method.
import React from 'react'
import LoadContent from './loadContentComp'

class App extends Reac.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    //lifecycle method that re-renders the components, and adds new state when new code is added.
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoggedIn:true
            })
        }, 1500);
    }

    render(){
        return(
            <div>
                <LoadContent isLoggedIn={this.state.isLoggedIn}/>{/*Any state belonging to a component needs to be passed to it.*/}
            </div>
        )
    }
}
export default App

//conditional rendering within child component.
function LoadContent (props){
    return(
        props.isLoggedIn === true ? <h2>Loading...</h2> : <h2>Practice Content...</h2>
    )
} 
export default LoadContent

//conditional rendering with use of state changing method and button.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:false
        }
        this. = this.bind(this)
    }

    //functional method that changes state
    changeState(){
        this.setState(prevState=>{
            return{
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }

    render(){
        let buttonText = this.state.isLoggedIn === true ? 'Log In' : 'Log out'
        return(
            <div>
                <button onClick={this.changeState}>{buttonText}</button>
            </div>
        )
    }
}
export default App 

//////////////////////////////////////////////////////
//changing state with use of state changing method.
import React from 'react'
import ActivityList from './ActivityList'//pseudo file
import activeArray from './ActiveArray'//pseudo file

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            activities:activeArray
        }
        //bind method!
        this.handleChange = this.handleChange.bind(this)
    }
    

    //create method that changes state and checbox
    handleChange(activityId){
        this.setState(prevState=>{
            const updatedActiveArray = prevState.activities.map(actives=>{
                if(actives.activityId === activityId){
                    return {
                        ...actives,
                        actv:!actives.actv
                    }
                }
                return actives
            })
            return{
                activities: updatedActiveArray
            }
        })

    }

    render(){
        const activityComponent = this.activies.map(do=> <ActivityList key={do.activityId} 
        activeObj={do}
        //add event handler object for checkboxes.

        />)
        return(
            <div>
                {activityComponent}
            </div>
        )
    }
}
export default App

//child component that renders props.
import React from 'react'

function ActivityList(props){//child component
    const actvStyle={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:'line-through'
    }
    
    return(
        <div>
            <input type='checkbox'

            checked={props.activeObj.actv}

            //Add Event handler
            onChange={this.handleChange}
            

            />

            {/*v 'if props.activeObj.actv === true(css style) else(no style given )' v*/}

            <h1 style={ props.activeObj.actv ? actvStyle : null }>{props.activeObj.codeLang0}</h1>

            <h1>{props.activeObj.codeLang1}</h1>
            <h1>{props.activeObj.codeLang2}</h1>
            <h1>{props.activeObj.recreation0}</h1>
            <h1>{props.activeObj.recreation1}</h1>
            <h1>{props.activeObj.recreation2}</h1>
        </div>
    )
}
export default ActivityList

//map this array
const activeArray = [
    {
        activityId:1,
        codeLang0:'html',
        codeLang1:'css',
        codeLang2:'javaScript',
        codeLang3:'jsx',
        actv:false
    },
    {
        activityId:2,
        recreation0:'running',
        recreation1:'hoops',
        reacreation2:'weight lifting',
        actv:false
    }
]
export default activeArray

//practice style and conditional rendering

import React from 'react'

function Component(props){

    const pseudoStyle = {
        fontStyle:'italic',
        textDecoration:'line-through',
        color:'#303030'
    }

    return(

        <div>
            <input 
            type='checkbox'
            checked={}
            />
            <h2 style={props.mappedObj.objKey ? pseudoStyle : null}>{props.mappedObj.objKey}</h2>
        </div>
    )
}
export default Component

//practice componentDidMount()
import React from 'react'

class App extends React.Component{
    constructor()
    this.state = {
        isTrue:false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isTrue = true
            })
        }, 1500);
    }


    render(){
        return(){
            <div>
                <Greeting isTrue={this.state.isTrue}/>
            </div>
        }
    }
}
export default App

////////////////////
//practice fetching data from an API.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        console.log('I love React.js')
    }

    render(){
        return(
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}
export default App

/////////////////////////
//fetching data from an API and converting it into state that can be displayed on screen.
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character: {//data coming back is an object.
                
            }
        }
    }

    /*using component did mount used for API fetch call 
    that converts the data into our state.*/

    componentDidMount(){
        //changing loading to true
        this.setState({loading:true})
        //fethching API data with fetch() method.
        fetch("https://swapi.co/api/people/1")

        //resolve promise by converting into js object.
        .then(response=> response.json())

        //directing the data to be placed into our state.
        .then({data=>{
            loading:false
            this.setState({//setting up our state to accept the received data.
                character:data//assigning our data in out state object.
            })
        })     
    }



//current state always gets passed into the render method as; this.state. etc...
    render(){
        const loadingtext = this.state.loading ? 'Loading...' : this.state.charcter.name
        return(
            <div>
                {loadingtext}
            </div>
        )
    }
}
export default App


////////////////


//Practice conditional rendering//////////$$$,$$$//////////////Practice api fetch and conditional rendering////Forms
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            character:{}
        }
    }

    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                console.log(character:data)
            })
        })
    }

    render(){
        const character1 = this.state.character.name
        return(
            <div>
            {character1}
            </div>
        )
    }
}
export default App

///////////To have FORM text field constantly Update state/////////////
import React from 'react'

class InputForm extends React.Component{
    constructor(){
        this.state = {
            firstName:'',//setting state to be empty strings
            lastName:''//setting state to be empty strings
        }
       //Always bind new methods.
       this.handleChange = this.handleChange.bind(this)
    }

    //method that allows typing to access and change state automatically.
    /*handleChange(event){
        //destructuring [event.target] object to extract what we need(name & value) 
        const {name, value} = event.target

        //setting state to become name-string-value
        this.setState({
            [name]: value
        })
    }

            

    render(){
        return(
            //form that contains text-iput fields
            <div>
                <form>
                    
                    <input
                    type='text'
                    name='firstName'
                    value={this.state.firstName}
                    placeHolder= 'First Name'
                    onChange={this.handleChange}
                    />

                <br/>

                    <input
                    type='text'
                    name='firstName'
                    value={this.state.lastName}
                    placeHolder= 'Last Name'
                    onChange={this.handleChange}
                    />
              
                 <h1>{this.state.firstName} {this.state.lastName}</h1>
                
            
            </div>
        )
    }
}
export default InputForm*/

import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName:'',
            lastName:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form>
                <input
                type ='text'
                name ='firstName'  
                value = {this.state.firstName}  
                onChnage = {this.handleChange} 
                placeHolder = 'First Name'
                />
                <br/>
                <input
                type ='text'
                name ='lastName'  
                value = {this.state.lasttName}  
                onChange = {this.handleChange} 
                placeHolder = 'Last Name'
                />

                </form>
            </div>
        )
    }
}
export default App


//practice conditional rendering(setTimeOut method)

import React App
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:true//rendered first
        }
    }

    componentDidMount(){//re-renders component for 1.5 seconds.
        setTimeout(() => {
            this.setState({
                isLoggedIn:false
            })
        }, 1500);
    }

    render(){
        return(
            <div>
                {this.state.isLoggedIn ? <h1>Loading...</h1> : <h1>Component Render Successful</h1>}
            </div>
        )
    }
}
export default App



//practice reusable handleChange method for ids...
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            list:array
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){//method that changes that state of the checkbox inputs that contain
    //props belonging to the completed key value pair that is being mapped in parent component.
        this.setState(prevState=>{//this event handler method recognizes previous state, but when is used it'll change the
        //previous state of the completed key value pair in the original mapped array.
            const updatesList = prevState.list.map(arrayItems=>{//previous state is stored in a variable to be looped through(map)
            //the map method takes in a function that returns an object and checks for conditions.
                if(arrayItems.id === id){//if the new object id key value pair matches the original
                //return the new object where the completed key value pair is the opposite of its original.
                    return{
                        ...arrayItems,
                        completed:!arrayItems.completed
                    }
                }
                return arrayItems
            })
            return{
                list:updatedList
            }
        })
    }

    hendleChange(id){
    this.setState(prevState=>{
        const updatedArray = prevState.id.map(todos=>{
            if(todo.id === id){
                return{
                    ...todos,
                    completed: !todos.completed
                }
            }
            return todo
        })
        return {
            data: updatedArray
        }
    })
}

    render(){
        const listComponent = this.state.list.map(items=> <CheckBoxComponent
        key={items.id} obj={items} handleChange={this.handleChange}
        />)
        return(
            <div>
                {listComponent}
            </div>
        )
    }
}
export default App

import React from 'react'

class CheckBoxComponent extends React.Component{

    render(){
        return(
            <div>
            {this.props.obj.id}

            <input
            type='checkbox'
            checked={this.props.obj.completed}
            />

            </div>
        )
    }
}
export default CheckBoxComponent

const array = [//map this array to main component.
    {
        id:1,
        completed:false
    },
    {
        id:2,
        completed:false
    }
]
export default array

/*practice fetching data from and API and using conditional rendering 
to display data*/
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading:false,//page state is not yet loading...
            character:{}
        }
    }

    componentDidMount(){
        this.setState({isLoading:true})//page state is now able to load...
        fetch("https://swapi.co/api/people/1")
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                character:data,
                isLoading:false//page state is no longer loading...
                //once page is no longer loading, it renders fetched data.
            })
        })
    }

    render(){
        const loadText = this.state.isLoading ? 'loading...' : this.state.character.name//js code that enable loading feature...
        return(
            <div>
                {loadText}
            </div>
        )
    }
}
export default App

//practice forms and changing form state(text fields and checkboxes)
import React from 'react'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            textField:'',
            textField1:'',
            isClicked:false,
            isClicked1:false,
            radio:'',
            favMusic:'Rap/Hip-Hop'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, checked, type, value} = event.target//method targets the eventhandler to access different attributes
        type === 'checkbox' ? this.setState({[name]:checked}) : this.setState({[name]:value})
    }

      /*handleChange(event){
        const {name, value} = event.target//method targets the eventhandler to access different attributes
        this.setState({
            [name]:value
        })
    }*/


    render(){
        return(
            <div>
                <form>
                    <input
                    type='text'
                    name='textField'
                    value={this.state.textField}
                    placeholder='Text'
                    onChage={this.handleChange}
                    />
                    
                    <br/>
                    <input
                    type='text'
                    name='textField1'
                    value={this.state.textField1}
                    placeholder='Text'
                    onChange={this.handleChange}
                    />

                    <br/>
                    <input
                    type='checkbox'
                    name='isChecked'
                    checked={this.state.isChecked}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <input
                    type='checkbox'
                    name='isChecked1'
                    checked={this.state.isChecked1}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <label>
                   <input
                   type='radio'
                   name='radio'
                   value='front-end'
                   checked={this.state.radio === 'front-end'}
                   onChange={this.handleChange}
                   />
                   Front End Software Engineer
                   </label>

                    <br/>
                    <label>
                   <input
                    type='radio'
                    name='radio'
                    value='back-end'
                    checked={this.state.radio === 'back-end'}
                    onChange={this.handleChange}
                   />
                   Back End Software Engineer
                   </label>

                    <br/>

                    <select
                    name='favMusic'
                    value={this.state.favMusic}
                    onChange={this.handleChange}
                    >
                    <option value='Rap/Hip-Hop'>Rap/Hip-Hop'</option>
                    <option value='Jazz'>Jazz</option>
                    <option value='Pop'>Pop</option>
                    <option value='Rock'>Rock</option>
                    <option value='Classical'>Classical</option>
                    </select>
                </form>
                <h1>{this.state.textField}</h1>
                <br/>
                <h1>{this.state.textField1}</h1>
                <br/>
                <h1></h1>
            </div>
        )
    }
}
export default App

import React, {Component} from 'react'

class App extends React{
    constructor(){
        super()
        this.state = {
            textField:'',
            textField1:'',
            isChecked:false,
            isChecked1:false,
            radio:'',
            favColor:'blue',
            noRadio:'',
            yesRadio:'',
            fireRadio:'',
            iceRadio:'',
            windRadio:'',
            eartradio:'',
            favLanguage:'javaScript'
        }
        this.handleChange1 = this.handleChange1.bind(this)
    }

    handleChange1(event){//event handler method that accesses form element attributes when the event handler method is fired.
        const {checked, name, type, value} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render(){
        return(
            <div>
                <form>
                    <input
                    type='text'
                    name='textField'
                    value={this.state.textField}
                    onChange={this.handleChange}
                    />

                    <input
                    type='text'
                    name='textField1'
                    value={this.state.textField1}
                    onChange={this.handleChange}
                    />

                    <input
                    type='checkbox'
                    name='isChecked'
                    checked={this.state.isChecked}
                    onChanged={this.handleChange}
                    />

                    <input
                    type='checkbox'
                    name='isChecked1'
                    checked={this.state.isChecked1}
                    onChange={this.handleChange}
                    />

                    <input
                    type='radio'
                    name='radio'
                    value='on'
                    checked={this.state.radio === 'on'}
                    onChange={this.handleChange}
                    />

                    <input
                    type='radio'
                    name='radio'
                    value='off'
                    checked={this.state.radio === 'off'}
                    onChange={this.handleChange}
                    />


                    <select
                    name='favColor'
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    />
                        <option value='blue'>Blue</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='yellow'>Yellow</option>
                        <option value='purple'>Purple</option>
                    </select>

                    <input
                    type='radio'
                    name='yesRadio'//name in state
                    value='yes'
                    checked={this.state.yesRadio === 'yes'}
                    onChange={this.handleChange}
                    />

                    <input
                    type='radio'
                    name='noRadio'//name in state
                    value='no'
                    checked={this.state.noRadio === 'no'}
                    onChange={this.handleChange}
                    />

                    <input
                    type='radio'
                    name='fireRadio'//name in state
                    value='fire'
                    checked={this.state.fireRadio === 'fire'}
                    onChange={this.handleChange}
                    />

                    <input
                    type='radio'
                    name='iceRadio'//name in state
                    value='ice'
                    checked={this.state.iceRadio === 'ice'}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <input
                    type='radio'
                    name='windRadio'
                    value='wind'
                    checked={this.state.windRadio === 'wind'}
                    onChange={this.handleChange}
                    />

                    <br/>
                    <input 
                    type='radio'
                    name='earthRadio'
                    value='earth'
                    checked={this.state.earthradio === 'earth'}
                    />

                    {/*<input 
                    type='radio'
                    name='radio'
                    value='on'
                    checked={this.state.radio === 'on'}
                    />*/}

                    <br/>

                    <select
                        name='favLanguage'
                        value={this.state.favLanguage}
                        onChange={this.handleChange}
                        >
                        <option value='html'>HTML</option>
                        <option value='css'>Css</option>
                        <option value='javaScript'>JavaScript</option>
                        <option value='python'>Python</option>

                    </select>

                    <input
                    type='radio'
                    name='radio'
                    value='on'
                    checked={this.state.radio === 'on'}
                    />
                </form>
            </div>
        )
    }
}
export default App
//React Container & Component Architecture
//JavaScript review BootCamp
var name = 'Aaron';
var surName = 'Bevans';
var numberVar = 1000;
//global object
//accessible anywhere in our applications.

//running js in browser g.o. = window
//running js in server g.o. = global
variale = 'this is a variable'//property of global object in browser window.

//hoisting: describes the behavior of lifting 
//variable declaration to top of context its running in, or scope.
//variables declared with var key word can be accessed before they are initialized.
//but will return undefined.
var age;
console.log(age)
age = 26;
console.log(age)

//why is let and const over var//
//let and const cannot be hoisted.
//prevented hoisting: temporal hoisting.
// let used when: a value will be changed/re-assigned (similar to var).
// const used when: value cannot be changed/reassigned

//const is best because it makes code more readable
//must be initialized with variale.
//const keeps values the same.


//Why block scoping matters

//let and const variables created inside local scope
//cannot be accessed in the global scope with same name.

var myLang = 'javaScript'
var intermmediate = true

if(intermmediate){
    let myLang = 'I am getting better at Js'
    console.log(myLang)
}
console.log(myLang)

//Template literals
let coderName = 'cyberman'
let coderMsg = `My coder name is ${coderName}`

//React Hookd useState()
import React, {useState} from 'react'

function App(){
    const [value] = useState('React.Js')
    const [count, setCount] = useState(0)
    
    function countUp(){
        setCount(prevCount=> prevCount + 1)
    }

    return(
        <div>
            <h1>I love using {value} to create Apps.</h1>
            <button onClick={countUp}>Increment</button>
        </div>
    )
}

export default App
.
//React Hooks useEffect()
import React {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'

function App(){
    const [color, setRandomColor] = useState('')

    useEffect(()=> {//acts as a componentDidMount() lifecycle method.

    })
    return(
        <div>
            <h1></h1>
        </div>
    )
}
export default App

import React, {useState} from 'react'

function App(){
    const [message, setMessage] = useState('Hello World')
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}
export default App

// Challenge 1: create a conditional that logs out "Good morning!", 
//"Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

// could be "afternoon", "evening" and "night"

const time = "morning" 

if(time === 'morning'){
    console.log('Good Morning')

}else if(time === 'afternoon'){
    console.log('Good Afternoon')

}else if(time === 'night'){
    console.log('Good night')

}else{
    console.log('Lost track of time.')
}

const time = "morning" 
swicth(time){
    case 'night':
        console.log('Good night');
        break;
    case 'evening':
        console.log('Good Evening');
        break;
    case 'morning':
        console.log('Good Morning');
        break;
    default: 'Lost track of time';
}

///falsey values
// false
// 0
// ''
// null
// undefined
// NaN

if(null){
    console.log('run')
}else{
    console.log('skipped')
}

if(''){
    console.log('run')
}else{
    console.log('skipped')
}

if(undefined){
    console.log('run')
}else{
    console.log('skipped')
}

if(NaN){
    console.log('error')
}else{
    console.log('run')
}

//truthy values
if(2){
    console.log('truthy')
}else{
    console.log('falsey')
}

if(true){
    console.log('truthy')
}else{
    console.log('falsey')
}

if('string'){
    console.log('truthy')
}else{
    console.log('falsey')
}

if(-2){
    console.log('truthy')
}else{
    console.log('falsey')
}


let devSpecialty = true;

let webDev;

webDev = devSpecialty ? 'Front End Web Developer' : 'Back End Web Developer';

let devLanguage = 'javaScript'
let Language = 'python'

let bestFramework;

bestFramework = devLanguage > Language ? 'React.js' : 'Django.py'

//Conditional Programming
let condition;

if(condition){
    console.log('These are my conditions')
}else{
    console.log('These are not my conditions')
}

conditions = 'true'//first console will run because 
//the new value of conditions variable is a 'TRUTHY' value.

if(condition){
    console.log('These are my true conditions')
}else if(condition === 'true'){
    console.log('These also are my true conditions')
}else{
    console.log('These are not my conditions')
}

condition = true

if(condition){
    console.log('These are my true boolean conditions')
}else if(condition === 'true'){
    console.log('The conditions are truthy')
}else{
    console.log('Not true conditions')
}

condition = 'black'

//switch statements
switch(condition){
    case 'black':
        console.log('black is the main color');
    break;

    case 'purple':
        console.log('purple is the main color');
    break;

    case 'green':
        console.log('green is the main color.');
    break;

    case 'red':
        console.log('red is the main color.');
    break;
    default:
        console.log('None of these colors are the main color.');
    break;
}

//short circuiting

//If mainColor is condition, console.log(true)
let mainColor;

mainColor = condition ? true : console.log('None of these colors are the main color.');

//log in validation program
let user = 'Abevz1'//truthy value

if(user){
    console.log(true)
}else{
    console.log('user name not valid')
}

//If validLogInId equals to true console.log('userName: ', true)
user = 574652;

validLogInId = user ? console.log('validLogInId: ', true) : 'user invalid log in ID'

//ternary operator
let age = 15


let ableToVote
ableToVote = age > 17 ? console.log('able to vote') : console.log('to young to vote')

//Type Conversion
let nullValue = null 
console.log(nullValue)

nullValue = !null
console.log(nullValue)

nullValue = !!null

nullValue = Boolean(null)

console.log(nullValue)

nullValue = Boolean(!null)

let intVal = 5
intVal = Boolean(5)

if(Boolean(!!null)){
    true
}else{
    false;
}

//Default Props & PropTypes
import React from 'react'
import PropTypes from 'prop-types'

function App(){
    return(
        <div>
            <Child childColor='orange' childHeight=200 childWidth=200/> {/*can change the props/styling*/}
            <Child/> {/*Child componenet automatically 
            set to default props, if no props/style given*/}
        </div>
    )
}
export default App

function Child(props){

    const childStyle = {//correct css syntax
            backgroundColor: props.childColor,
            height: props.childHeight,
            width: props.childWidth
    }

    return(
        <div style={{childStyle}}>
        </div>
    )
}

Child.defaultProps = {
    childColor:'black',
    childHeight:100,
    childWidth:100
}

Child.propTypes = {
    childColor: PropTypes.string.isRequired,
    childHeight: PropTypes.number.isRequired,
    childWidth: PropTypes.number
}

export default Child

/////////////////////////////////
import React from "react"
import PropTypes from 'prop-types'
import Child from './ChildComp'
{/**
 * Challenge: Here's a component meant to take an image (`src` prop) and round the edges.
 * It has some styling applied with CSS to ensure it isn't too large on the page, but
 * we want this component to allow for any image source and any kind of border radius to be applied
 * 
 * 1. The component should always receive a `src` prop, and it should always be a string //x
 * 2. The component should be able to accept only a string or a number for the `borderRadius` prop//x
 *      (https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
 * 3. If it doesn't receive a `borderRadius` prop at all, it should default it to "50%"//x
 */}

function App(){
    return(
        <div>
            <Child childColor='pink' childHeight={200} childWidth={200}/>
        </div>
    )
}
export default App

function Child(props){

    const childStyle = {
        backgroundColor: props.childColor,
        height: props.childHeight,
        width: props.childWidth
    }

    return(
        <div style={{childStyle}}>
        </div>
    )
}

Child.defaultProps = {
    childColor:'blue',
    childHeight: 100,
    childWidth:100

}

export default Child



{/*Code Reusability: Children*/}
import React from 'react'
import Child from './ChildComp'

function App(){
    return(
        <div>
            <Child>
                <h1>My name is Aaron Bevans</h1>
            </Child>
                <br>
                <hr/>
                <br>
            <Child>
                <h1>Front End Web Developer</h1>
            </Child>
        </div>
    )
}
export default App

{/*Child Component*/}
function Child(props){
    return(
        <div style={backgroundColor: 'blue' height='100' width='100'}>
            {props.children}
        </div>
    )
}
export default Child

{/*defaultProps & PropTypes*/}
import React from 'react'
import PropTypes from 'prop-types'
import Child from './ChildComp'

function App(){

    return (
        <div>
            <Child />
        </div>
    )

}
export default App

function Child(props){
    const childStyle = {

        backgroundColor: props.childColor,

        height: props.childHeight,

        width: props.childWidth
        
    }

    return (
        <div style={{childStyle}}>
        </div>
    )
}

Child.defaultProps = {
    childColor: 'blue',
    childHeight: 100,
    childWidth: 100
}

Child.propTypes = {

    childColor: PropTypes.string.oneOf(['blue', 'green', 'white']).isRequired,

    childHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
    
}
export default Child

{/*

useState()
defaultProps(functional and class based)
PropTypes
React.fragment
DRY: children
DRY: Higher order components

*/}

{/*
    // 
        A function that takes a component as its 
        first argument and returns a new component 
        that wraps the given component, 
        providing extra capabilities to it.
    //
*/}

{/*Higher order components*/}
import React from 'react'
import {augmentedFirst} from './augmentedFirst'
import {augmentedSecond} from './augmentedSecond'

function App(){
    return (
        <h1>{props.addedProps}</h1>
    )
}
const ReturnAugment = augmentedSecond(App)
export default ReturnAugment

import React from 'react'

export function augmentedFirst(Component){
    return function(props){
        return (
            <Component {...props}/>
        )
    }
}

import React from 'react'

export function augmentedSecond(Component){
    return function (props){
        return(
            <Component addedProps= 'additional props' {...props}/>
        )
    }
}


{/*useState()*/}

import React, {useState} from 'react'

function App(){
    const [name, setName] = useState('cyberman')

    function setName(){
        setName(prevName=> prevName + ' 86-012-00')
    }

    return (
        <div>
            <h1>Alias submitted to; 'covert infiltrators guild';<h1> 
            {/**/}
            <h1>!manage directory; !submit; `non-pseudo; confirm submit</h1>
            <h1>!response; standby...</h1>
            <button onClick={setName}>Submit Alias</button>
        </div>
    )
}
export deefault App

{/*rendering added props from a higher order component*/}
import React from 'react'
import {augmentedComponent} from './augmentedComponent'

function App(props){
    return (
        <Component/>
    )
}

const HigherComponent = augmentedComponent(App)
export default HigherComponent

import React from 'react'

export function augmentedComponent(Component){
    return function(props){
        return(
            <Component {...props}/>
        )
    }
}



{/*App that renders button collapsing capabilities using a HOC*/}

import React from 'react'{/*Importting React library */}

import Menu from './Menu'{/*Importing component from its file*/}

function App(){//functional component that returns the component with HOC capabilities.
    return (
        <div>
            <Menu/>
        </div>
    )
}
export default App

import React from 'react'

export function higherOrder(Toggler){//higher order/functional component that returns a component
    return function (props){
        return (
            <Toggler {...props}/>
        )
    }
}

import React from 'react'{/*Importing React library*/}
import {higherOrder} from './higherOrder'{/*Importing HOC from its file*/}

class Menu extends React.Component{//class based component

    state = {//state first initialized to true boolean
        show: true
    }

    toggle =()=>{//method that changed the state of 'show' when button is clicked.
        this.setState(prevState=>{//setting state to go from previous state to new state.
            show: !prevState.show//opposite of previous state.
        })
    }

    render(){//render lifecycle method
        return(//returning JSX
            <div>
                <button onClick={this.toggle}>//button that uses the toggle method.

                    {this.state.show ? 'Hide' : 'Show'} Menu //conditional rendering for button that 
                    //checks for state that is attached to text.

                </button>

            <nav style={{display: this.state.show} ? 'Block' : 'None'}>//inline styling that uses conditional rendering to check for state.
                <h6></h6>
                <a></a>
                <a></a>
                <a></a>
            </nav>
            </div>
        )
    }
}
const RenderMenu = higherOrder(Menu)
export default RenderMenu

{/*Higher Order Component*/}

import React form 'react'
import {augmentedSecond} from './augmentedSecond'

function App(props){
    return(
        <div>
           {props.newlyProps}
        </div>
    )
}
const RenderComp = augmentedSecond(App)
export default RenderComp

import React from 'react'

export function augmentedFirst(Component){

    return function(props){
        return (
            <Component {...props}/>
        )
    }
}

import React from 'react'

export function augmentedSecond(Component){
    return function(props){
        return (
            <Component newlyProps = ' New props given' {...props}/>
        )
    }
}

{/*Using a HOC to give components advanced capabilities*/}
import React from 'react'
import Menu from './menu'
import Favorite from './favorite'

function App(){
    return(
        <Menu/>
    )
}
export default App

import React from 'react'

export function toggleFunction(Toggler){
    return function(props){
        return (
            <Toggler {...props}/>
        )
    }
}

import React from 'react'
import {toggleFunction} from 'toggleFunction'

class Menu extends React.Component{
    state = {
        show: true
    }

    toggleShow =()=>{
        this.setState(prevState=>{
            return {
                show: !prevState.show
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleShow}>
                 {this.state.show ? 'Hide' : 'Show'} Menu//display functionality 
                </button>

                <nav style={{display: this.state.show ? 'Block' : 'None'}}>
                    <h6>Signed In as UserName 'cyberman'</h6>
                        <a></a>
                        <a></a>
                        <a></a>
                </nav>
            </div>
        )
    }
}
const HigherOrderMenu = toggleFunction(Menu)
export default HigherOrderMenu
{/*We use the function earlier 
created and pass the component as an argument*/}


{/*Component that allows user to like or dislike a comment with click of a button*/}

import React from 'react'
import {toggleFunction} from './toggleFunction'

class Favorite extends React.Component{
    state = {
        isFavorited = false
    }

    toggleFavorite =()=>{
        this.setState(prevState=>{
            isFavorited: !prevState.isFavorited
        })
    }

    render(){
        return(
            <div>
                <h3>Click to favorite comment</h3>
                <h1>

                    <span onClick={this.toggleFavorite}>

                      {this.state.isFavorited ? 'Love' : 'Do not love'}//conditional rendering 
                      //to show like or dislike when clicking button

                    </span>

                </h1>
            </div>
        )
    }

}
const HigherOrderFavorite = toggleFunction(Favorite)
export default HigherOrderFavorite

componentDidMount(){
    fetch()
    .then(response=> response.json())
    .then(response=>{
        const {memes} = response.data
        this.setState({
            apiImgs: memes
        })
    })
}

import React from 'react'

import {toggleFunction} from './toggleFunction'

class Menu extends React.Component{

    state = {
        show: true
    }

    toggleShow = () =>{
        this.setState(prevState=>{
            return {
                show: !prevState.show
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleShow}>

                    {this.state.show ? 'Hide' : 'Show'} Menu

                </button>

                <nav style={{display: this.state.show ? 'Block' : 'None'}}>
                </nav>
            </div>
        )
    }
}

const HigherOrderMenu = toggleFunction(Menu)
export default HigherOrderMenu

import React from 'react'
import {toggleFunction} from './toggleFunction'

class Favorite extends React.Component{
    state = {
        isFavorited: false
    }

    toggleFavorite = () =>{
        this.setState(prevState=>{
            isFavorited: !prevState.isFavorited
        })
    }

    render(){
        return (
            <div>
                <h1>
                    <h3>Click to favoriet a comment</h3>

                        <span onClick={this.toggleFavorite}
                            {this.state.isFavorited ? 'Like' : 'Dislike'}
                        </span>

                </h1>
            </div>
        )
    }
}
const HigherOrderFavorite = toggleFunction(Favorite)
export default HigherOrderFavorite

import React from 'react'
function App(props){
    return(

    )
}
export default App

import React from 'react'

export function togglerFunction(Toggler){
    return function(props){
        reurn(
            <Toggler {...props}/>
        )
    }
}

import React from 'react'
import {togglerFunction} from './togglerFunction'

class Menu extends React.Component{
    state = {//setting original state to a boolean value
        show: true
    }

    toggleShow = () =>{//toggle method that changes state.
        this.setState(prevState=>{
                return {
                    show: !prevState.show
                }
            })
        }

    render(){
        return(
            <div>

                <button onClick={this.toggleShow}>//event handler that takes method
                    {this.state.show ? 'Hide' : 'Show'} Menu//state is changed and displayed upon button click.
                </button>
                
                <nav style={{display: this.state.show ? 'Block' : 'None'}}>//

                    <h6>Logged in as user 'cyberman'</h6>
                    <a></a>
                    <a></a>
                    <a></a>

                </nav>

            </div>
        )
    }
}
const superChargedMenu = toggleFunction(Menu)
export default superChargedMenu

import React from 'react'
import {toggleFunction} from './toggleFunction'

class Favorite extends React.Component{
    state = {
        isFav: false
    }

    toggleFav = {
        this.setState(prevState=>{
            return{
                isFav: !prevState.isFav
            }
        })
    }

    render(){
        return(
            <div>
                <h3>Favorite a comment</h3>

                <h1>
                    <span onClick={this.toggleFav}>
                        {this.state.isFav ? 'Like' : 'Dislike'}
                    </span>
                </h1>
            </div>
        )
    }
}
const superChargedFav = toggleFunction(Fav)
export default superChargedFav

{/*Implementing HOC*/}

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Menu from './menu'
import Favorite from './favorite'

function App(){
    return(
        <div>
            <Menu/>
            <br/>
            <Favorite/>
        </div>
    )
}
export default App

import React from 'react'

class ToggleComponent extends React.Component{

    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            on: !prevState.on
        })
    }

    render(){

        const Component = this.props.component

        return(

            <Component on={this.state.on} toggle={this.toggleOn} {...this.props}> 

        )
    }
}

export function withHigherOrder(component){
    return function (props){
        return(
            //withHigherOrder returns props to the class component ToggleComponent
            <ToggleComponent component={component} {...props}>
        )
    }
}

import React from 'react'
import {withHigherOrder} from './toggleClass'

function Menu(props){
    return(
        <button onClick={props.toggleOn}>
            {props.on ? 'Hide' : 'Show'}Menu
        </button>

        <nav style={{display: props.on ? 'block' : 'none'}}>

            <h6>Signed in as </h6>
            <a>Timeline Posts</a>
            <a>Messages</a>
            <a>Interests</a>

        </nav>

    )
}
const superChargedMenu = withHigherOrder(Menu)
export default superChargedMenu

import React from 'react'
import {withHigherOrder} from './toggleClass'

function Favorite(props){

    return (
        <h1>
            <h3>Like a post</h3>
                <span onClick={props.toggleOn}>
                    {props.on ? 'Like' : 'Dislike'}
                </span>
            </h3>
        </h1>
    )

}
const superChargedFavorite = withHigherOrder(Favorite)
export default superChargedFavorite

{/*Practice defaultProps*/}

import React from 'react'
import ReactDOM from './react-dom'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './childComp'

function App(){
    return(

        <div childBackgroundColor='red' childFontColor='green' ChildHeight={100} ChildWidth={100}>
            <Child 
                name={'Aaron'}
                title={'Front-End Engineer'}
            />
        </div>
    )
}
export default App

import React from 'react'

function Child(props){

    const childCompStyle = {
        backgroundColor: props.childBackgroundColor,
        color: props.childFontColor,
        width: props.childWidth,
        height: props.childHeight
    }

    return(
        <div style={{childCompStyle}}>
            <h1>{props.name}</h1>
            <h2>{props.title}</h2>
        </div>
    )
}

Child.defaultProps = {
    childBackgroundColor: 'black',
    childFontColor: 'white',
    childWidth: 100,
    childHeight: 100
}

export default Child

{/*Rendering props */}
import React from 'react'

function Child(props){
    return(
        <div>
            <h3>{props.renderProps(true)}</h3>
       </div>
    )
}
export default Child

import React from 'react'
import Child from './child'

function App(){
    return(
        <div>
            <Child renderProps={

                function(boolean){
                    return(
                        <div>
                            <h1>
                                {boolean ? 'components properties rendered successful' 
                                : 'component properties rendered unsuccessful'}
                            </h1>
                        </div>
                    )
                }
            }
        </div>
    )
}
export default Child


{/*Higher Order Components*/}

import React from 'react'
//class based component that initializes state.

class ToggleHighOrder extends React.Component{
    state = {//state: boolean
        on:false
    }
    
    //method that changes/sets sate to its opposite whenever it is activated with a specific event handler.
    toggleOn=()=>{
        this.setState(prevState=>{
            return{
                on: !prevState.on
            }
        })
    }
    //rendering props inside an element to be passed down
    render(){
        const Component = this.props.component
        //Component element contains props and state to be distributed & utilized
        return(
            <div>
                <Component on={this.state.on} toggle={this.toggleOn} {...props}/>
            </div>
        )
    }
}


export function withHighOrder(props){//higher order component contains 
    return function(props){
        return(
            <ToggleHighOrder component={component} {...props}/>
        )
    }
}


import React from 'react'
import {withHighOrder} from './withHighOrder'

function Menu(props){
    return(
        <div>
            <button onClick={props.toggleOn}>
                {props.on ? 'Hide' : 'Show'}Menu
            </button>

            <nav style={{display: props.on ? 'block' : 'none'}}>
                <h5></h5>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
            </nav>
        </div>
    )
}
const superChargedMenu = withHighOrder(Menu)
export default superChargedMenu

import React from 'react'
import {withHighOrder} from './withHighOrder'

function Favorite(props){
    return function(props){
        <h1>
            <h3>Like or DisLike a comment</h3>
            <span onClick={props.toggleOn}>
                {props.on ? 'Like' : 'Dislike'}
            </span>
        </h1>
    }
}
const superChargedFavorite = withHighOrder(Favorite)
export default superChargedFavorite

import React from 'react'
import {augmentedSecond} from './augmentedSecond'

function App(){
    return(
        <Component/>
    )
}
const augmentedApp = augmentedSecond(App)
export default augmentedApp

import React from 'react'

export function augmentedFirst(Component)
const Component = component
    return function(props){
        return (
            <Component {...props}/>
        )
    }

import React from 'react'


export function augmentedSecond(Component){
    const Component = component
        return function(props){
            return (
                <Component addedProps='additional Props' {...props}/>
        )
    }
}

{/*Rendering Props*/}
import React from 'react'
import Child from './childComponent'

function App(){
    return(
        <div>
            <Child renderTheseProps={
                function(validationMsg, validation ){
                    return(
                        <div>
                            <h1>{validationMsg === 'username: cyberman' ? 'user validation successful!' : 'user validation error!'}</h1>
                            <h2>{validation ? 'validtion, true' : 'validation, false'}</h2>
                        </div>
                    )
                }
            }
            />
        </div>
    )
}
export default App

import React from 'react'

function Child(props){
    return(
        {props.renderTheseProps('username: cyberman', true)}
    )
}
export default Child

import React from 'react'
import Child from './childComponent'

function App(){
    return(
        <div>
            <Child renderThisProps={
                 function(userName, boolean){
                    return(
                        <div>
                            <h1>{userName === 'cyberman' ? 'userName Valid' : 'userName not valid'}</h1>
                            <h2>{boolean ? 'cyberman' : 'username not valid'}</h2>
                        </div>
                    )
                }
            }
            />
        </div>
    )
}
export default App

import React from 'react'

function Child(props){
    return (
        <div>
            {props.renderThisProps('cyberman', true)}
        </div>
    )
}
export default Child

{/*Rendering Props

//Render props between component when a props value is a function.
//A component with a render props takes a function that returns a react element 
//and calls it instead of implementing its own render logic.

*/}


import React from 'react'

function Child(props){
    return (
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

import React from 'react'
import Child from './childComp'

function App(){
    return (
        <div>
            <Child renderProps={
                function(userName, varified){
                    return (
                        <div>
                            <h1>{userName === 'cyberman' ? 'username: cyberman' : 'username: unidentified'/h1>
                            <h2>{varified ? 'username varified' : 'username error'}</h2>
                        </div>
                    )
                }
            }
        </div>
    )

}
export default App


import React from 'react'

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            return{
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return (
            <Component on={this.state.on} toggleOn={this.toggleOn} {...props}/>
        )
    }

}

export function withHighestOrder(component){//function disguised as a component
    return function(props){
        return (
            <ToggleClass component={component} {...props}/>//the function/component passes down properties from a component
        )
    }
}

import React from 'react'
import {withHighestOrder} from './withHighestOrder'

function Menu(props){
        return(
            <div>
                <button onClick={props.toggleOn}>
                    {props.on ? 'Hide' : 'Show'} Menu
                </button>

                <nav style={{display: props.on ? 'block' : 'none'}}>

                </nav>
            </div>
        )
    }
}
const superChargedMenu = withHighestOrder(Menu)
export default superChargedMenu

import React from 'react'
import {withHighestOrder} from './withHighestOrder'

function Favorite(props){
    return(
        <div>
            <h1>
                <span onClick={props.toggleOn}>
                    <h3>Like or dislike a comment</h3>
                    <h4>{props.on ? 'like' : 'dislike'}</h4>
                </span>
            </h1>
        </div>
    )
}
const superChargedFavorite = withHighestOrder(Favorite)
export default superChargedFavorite

{/*Rendering Props*/}

import React from './react'
import Child from './child'

function App(){
       return (
           <div>
                <Child renderProps={
                    function(userName, userValidation){
                        return (
                            <div>
                                <h2>{userName ? 'userName' : 'userName not valid'}</h2>
                                <h2>{userValidation === true ? 'userName Valid'}</h2>
                            </div>
                        )

                    }
                }/>
           </div>
     )
}
export default App


import React from 'react'

function Child(props){
    return(
        <div>
            {props.renderProps('userName: cyberman', true)}
        </div>
    )
}
export default Child

//rendering props

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './child'

function App(){
    return (
        <div>
            <Component renderProps={
                function(userName, validateUser){
                    <div>
                        <h1>{userName ? 'cyberman' : 'invalid'}</h1>
                        <h1>{validateUser === true ? 'userName: cyberman' : 'userName: invalid'}</h1>
                    <div>
                }
            }
        </div>
    )
}
export default App

import React from 'react'

function Child(props){
    return (
        <div>
        {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

handleSubmit=(event)=>{
    event,.preventDefault()
    let index = Math.floor(Math.random() * this.state.apiImgs.length)
    let meme = this.state.apiImgs[index].url
    this.setState({
        randomImg: meme
    })
}

{/*Child Props*/}

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './child'
function App(){
    return(
        <Child>
            <h1>Aaron Bevans</h1>
            <h2>Front End Web Developer</h2>
        </Child>
    )
}
export default App


import React from 'react'

function Child(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
export default Child

{/**Higher order components */}
import React from 'react'

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            return {
                on:!prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return (
            <Component on={this.state.on} toggleOn={this.toggleOn} {...props}/>
        )
    }
}

export function highOrder(component){
    return function(props){
        <ToggleClass component={component} {...props}/>
    }
}

import React from 'react'
import {highOrder} from './highOrder'

function Menu(props){
    return(
        <div>
            <button onClick={props.toggleOn}>
                {props.on ? 'Hide' : 'Show'}Menu
            </button>

            <nav style={{display: props.on ? 'block' : 'none'}}>
                <h6>Signed in as cyberman</h6>
            </nav>

            <a></a>
            <a></a>
        </div>
    )
}
const superChargedMenu = highOrder(Menu)
export default superCharhedMenu

{/**Rendering/passing different data types and through props*/}

import React from 'react'
import ReeactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))


import React from 'react'
import Elements form './Elements

function App(props){
    return(
        <di>
            <Elements renderJsxElements={
                function(uI){
                    return (
                        <div>
                            {uI}
                        </div>
                    )
                }
            }
            />
        </div>
    )
}
export default App

import React from 'react'

function Elements(props){
    return(
        <div>
            {props.renderJsxElements(
                <div style={{color:'lightBlue', backgroundColor:'black', textAlign:'center'}}>
                    <h1>Aaron Bevans</h1>
                    <h2>ReactJS Front-End SoftWare Engineer</h2>
                </div>
            )}
        </div>
    )
}
export default Elements


{/****************************/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'

function App(){
    return(
        <div>
            <Menu/>
            <hr/>
            <Favorite/>
        </div>
    )
}
export default App

import React from 'react'

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleMethod=()=>{
        this.setState(prevState=>{
            return{
                on:!prevState.on
            }
        })
    }

    render(){
        return(
            <div>
                {this.props.renderProps

                    (this.state.on, this.toggleMethod)

                }
            </div>
        )
    }
}
export default ToggleClass

import React from './react'
import ToggleClass from './toggleClass'

function Menu(props){
    return(
            <ToggleClass renderProps={
                (on, toggleMethod)=>(
                    <div>
                        <button onClick={toggleMethod}>
                            {on ? 'Hide' : 'Show'}Menu
                        </button>

                            <nav style={{display: on ? 'block' : 'none'}}>
                                <h3>Signed In as cyberman</h3>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                            </nav>
                    </div>
                )
            }
        )
    }
    export default Menu

    import React form 'react'
    import ToggleClass from './toggleClass'

function Favorite(props){
    return(
           <Toggler renderProps={
               (on, renderProps)=>(
                    <div>
                        <h3>
                            <span onClick={toggle}>
                                {on ? 'like' : 'dislike'}
                            </span>
                        </h3>
                    </div>
                )
           }/>
        )
    }
    export default Favorite

{/*Practice HOCs and Render Props and New Render Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import {augmentedSecond} from './augmentedSecond'

function App(){
    return (
        <div>
            {props.addedProps}
        </div>
    )
}
const superChargedComponent = augmentedSecond(App)
export default superChargedComponent

import React from 'react'

export function augmentedFirst(Component){
    return function(props){
        return (
            <Component {...props}/>
        )
    }
}

export function augmentedSecond(Component){
    return functon(props){
        return (
            <Component addedProps= 'additional props' {...props}/>
        )
    }
}

{/*Rendering Props*/}

import React from 'react'
import ReactDom from 'react-dom'

ReactDOM.render(<App/>,  document.getElementById('root'))

import React from 'react'

function App(props){
    return(
        <Component renderProps={
            (username)=>(
                <div>
                    <h1>{username === 'cyberman' ? 'uername: valid' : 'usernam: invalid'}</h1>
                </div>
            )
        }
    )
}
export default App

import React from 'react'

function Component(props){
    return(
        <div>
            {props.renderProps('cyberman')}
        </div>
    )
}
export default Component

{/*Rendering Props*/}
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import Component form './componentJs'

function App(props){
    return (
        <Component renderProps={
            (uI)=>(
                <div>
                    {uI}
                </div>
            )
        }/>

    )
}
export default App

import React from 'react'

function Component(props){
    return (
        {props.renderProps(
            <div style={{backgroundColor:'lightBlue', color:'blue'}}>
                <h1></h1>
            </div>
        )}
    )
}
export default Component

{/*hendleChange(id){
    this.setState(prevState=>{
        const updatedArray = prevState.id.map(todos=>{
            if(todos.id === id){
                return{
                    ...todos,
                    completed:!prevState.completed
                }
            }
            return todo
        })
        return {
            data: updatedArray
        }
    })
}*/}

{/*Higher Order Components*/}
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.getElementById('root'))

import react from 'react'
import Menu from './menu'
import Favorite from './favorite'

function App(){
    return (
        <Menu/>
        <hr/>
        <Favorite/>
    )
}
export default App

import React from 'react'

class TogglerClass extends React.Component{//class based component that contains state that can be changed.
    state = {
        on: false
    }

    toggleOn=()=>{//method that changes state when event handler is fired.
        this.setState(prevState=>{//turns previuos state to its opposite.
            return {
                on: !prevState.on
            }
        })
    }


    render(){//render life cyle method used to create a component that contains props

        const Component = this.props.component//allows a component to contain & pass down props

        return (//returning the same Component that contains props, state, and event method from original class based TogglerClass.
            <Component on={this.state.on} toggleOn={this.toggleOn} {...props}/>
        )
    }
}

export function higherOrder(component){//HOC is a function that takes a component
//and returns a new component.
   return function(props){
       return(
           <TogglerClass component={component} {...props}/>//TogglerClass classed based component 
           //will be stored in a HOC/function that will be used later.
       )
   }
}

{/*Menu Component*/}
import React from 'react'
import {higherOrder} from './higherOrder' {/*Importig an HOC which is really a function*/}

function Menu(props){
    return (
        <div>

                <button onClick={props.toggleOn}>
                    {props.on ? 'Hide' : 'Show'} Menu
                </button>

            <nav style:{{dislay: props.on ? 'block' : 'none'}}>
                <a>Likes</a>
                <a></a>
                <a></a>
                <a></a>
            </nav>
        </div>
    )
}
export default Menu


{/*Favorite Component*/}

import React from 'react'
import {higherOrder} from './higherOrder'

function Favorite(props){
    return(
        <h1>
            <h3>Like or dislike</h3>

            <span onClick={props.toggleOn}>
                {props.on ? 'Like' : 'Dislike'}
            </span>

        </h1>
    )
}
export default Favorite

{/*Higher Order Component/function*/}

export function highOrder(component){
    return function(props){
        return(
            <Component {...props}/>
        )
    }

}

{/*redering props*/}
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App/>, document.getElementById('root'))

import React form 'react'
import ElementComponents from './elementsComp'

function App(){
    return(
        <ElementsComponent renderProps={
            return function(username, valid){
                return (
          
                    <div>
                        <h1>{username === 'cyberman' ? 'username valid' : 'username invalid'}</h1>
                        <h1>{valid ? 'username: true' : 'username: false'}</h1>
                    </div>
                )
            }
        }/>
    )
}
export default App

import React from 'react'

function ElementComponents(props){
    return (
        <div>
            {props.renderProps('username', true)}
        </div>
    )
}
export default ElementComponents

{/*Render Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './childComp'

function App(){
    return(
        <Child renderProps={
            return function(userName, validated){
                return (
                    <div/>
                        <h1>{userName === 'cyberman' : 'userName: invalid'}</h1>
                        <h2>{validated ? 'userName: valid' : 'userName: invalid'}</h2>
                    <div>
                )
            }
        }/>
    )
}
export default App

import React from 'react'

function Child(props){
    return(
        <div>
            {props.renderProps('username', true)}
        </div>
    )
}
export default Child

{/*Render Props used in social media app*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'

function App(){
    return (
        <div>
        </div>
    )
}
export default App

import React from 'react'

class ToggleClass extends React.Component{//class based component
    state = {//component contains state to be changed.
        on: false
    }

    toggleOn =()=>{//method to be used to change state.
        this.setState(prevState=>{//setting up all state to be changed to its opposite
        //when ever the method is fired.
             on: !prevState.on//all state being changed to its opposite.
        })
    }

    render(){
        return(
            <div>
                {this.renderProps(this.state.on, this.toggleOn)}
            </div>
        )
    }
}
export default ToggleClass

import React from 'react'
import ToggleClass from './toggleClass'

function Menu(){
    return(
        <ToggleClass renderProps={
            (on, toggleOn)=>(
                <div>

                    <button onClick={on}>
                        {on ? 'Hide' : 'Show'}menu
                    </button>

                    <nav style={{display: on ? 'block' : 'none'}}>
                        <a>Posts</a>
                        <a>Likes</a>
                        <a>Comments</a>
                        <a>Inbox</a>
                    </nav>

                </div>
            )
        }/>
    )
}
export default Menu

import React from 'react'
import ToggleClass from './toggleClass'

const Favorite =()=> {
    return(
        <ToggleClass renderProps={
            (on, toggleOn)=>(
                <h3>
                    <h1>Signed In as cyberman</h1>

                        <span onClick={toggleOn}>
                            {on ? 'Like' : 'Dislike'}
                        </span>
                </h3>
            )
        }/>
    )
}
export default Favorite

{/*Render Props*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

RenderDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './childComp'

const App =()=>{
    return (
        <Child renderProps={
            (userName, validator)=>(
                <div>
                    <h1>{userName === 'cyberman' ? 'userName: valid' : 'userName: invalid'}</h1>
                    <h2>{validator ? 'valid' : 'invalid'}</h2>
                </div>
            )
        }/>
    )
}
export default App

import React from 'react'

const Child=(props)=>{
    return(
        <div>
            {props.renderProps('cyberMan', true)}
        </div>
    )
}
export default Child

export const higherOrder=(component)=>{
    const Component = component
    return function(props){
        return(
            <Component addedProps='additional props' {...props}/>
        )
    }
}

{/*Higher Order Components*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))
import Menu from './Menu'
import Favorite from './Favorite'

function App(){
    return(
        <Menu/>
        <br/>
        <Favorite/>
    )
}
export default App

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn =()=>{
        this.setState(prevState=>{
            return {
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.componentProps
        return(
            <Component on={this.state.on} toggleOn={this.toggleOn} {..props}/>
        )
    }
}

export function higherOrder(component){
    const Component = component
    return function(props){
        return(
            <ToggleClass componentProps={component} {...props}/>
        )
    }
}

import React from './react'
import {higherOrder} from './higherOrder'

function Menu(props){
    return(
        <div>
            <button onClick={props.toggleOn}>
                {props.on ? 'Hide' : 'Show'} Menu
            </button>
            <nav style={{display: props.on ? 'block' : 'none'}}>
                <a></a>
                <a></a>
                <a></a>
            </nav>
        </div>
    )
}
export default Menu

import React from 'react'
import {higherOrder} from './higherOrder'

function Favorite(props){
    return(
        <h1>
            <h3>Like or Dislike</h3>
            <span onClick={props.toggleOn}>
                {props.on ? 'like' : 'Dislike'}
            </span>
        </h1>
    )
}
export default Favorite

{/*Simple Higher Order Components*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import {augmentedFirst} from './augmentedFirst'
import {augmentedSecond} from './augmentedSecond'

function App(props){
    return(
        <h1>{props.nameProps}</h1>
    )
}
const superChargedApp = augmentedFirst(App)
export default superChargedApp

import React from 'react'

export function augmentedFirst(component){
    const Component = component
    return function(props){
        return(
            <Component nameProps='Aaron Bevans' {...props}/>
        )
    }
}

import React from 'react'

export function augmentedSecond(component){//a component/function that takes a component and returns a component with more functionality
    const Component = component
    return function(props){
        return(
            <Component {...props}/>
        )
    }
}

{/*Render Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import ChildComp from './childComp'

function App(props){
    return(
        <ChildComp renderProps={
            return function(username, validate){
                return(
                    <div>
                        {username === 'cyberman' ? 'username: cyberman' : 'username: null'}
                        {validate ? 'valid' : 'invalid'}
                    </div>
                )
            }
        }/>
    )
}
export default App

import React from 'react'

function ChildComp(props){
    return(
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default ChildComp



{/*Combine Higher Order Components and Rendering props*/}

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import Menu from './menu'
import Favorite from './favorite'

function App(){
    return (
        <Menu/>
            <hr/>
                <Favorite/>
    )
}
export default App

import React from 'react'

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            return{
                on: !prevState.on
            }
        })
    }


    render(){
        return(
            <div>
                {this.renderProps(this.state.on, this.toggleOn)}
            </div>
        )
    }
}
export default ToggleClass

import React from 'react'
import ToggleClass from './toggleClass'

function Menu(){
    return (
        <button onClick={toggleOn}>
            {on ? 'Hide' : 'Show'} Menu
        </button>

        <nav style={{display: on ? 'block' : 'none'}}>
            <a>Posts</a>
            <a>Likes</a>
            <a>Comments</a>
            <a>Inbox</a>
        </nav>
    )
}
export default Menu

import React from 'react'
import ToggleClass from './toggleClass'

function Favorite(){
    return(
        <h1>
            <h3>Like or Dislike</h3>

            <span onClick={toggleOn}>
                {on ? 'like' : 'Dislike'}
            </span>
        </h1>
    )
}
export default Favorite

{/*Render Props Practice*/}
import React from 'react'
import ReactDOM from 'react-dom'
Import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import Child from './child'

function App(){//functional component
    return(//returns a child component that contains props
        <Child renderProps={
            return function(userName, valid){//returns a function that has two props parameters
                return (//the function returns conditional logic that will display data.
                    <h1>{userName === 'cyberman' ? 'userName: valid' : 'userName: invalid'}</h1>
                )
            }
        }/>
    )
}
export default App

import React from 'react'

function Child(props){//functional child based component that contains props.
    return(//returns/renders props as a called function with props data as its arguments.
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

{/*Render Props pattern Practice*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import Child from './child'

function App(){
    return(
        <Child renderProps={
            (userName, validated)=>(
                <div>
                    <h1>{userName === 'cyberman' ? 'username: '\'cyberman'\'' : 'please enter a username'}</h1>
                    <h1>{validated ? 'username: valid' : 'username: invalid'}</h1>
                </div>
            )
        }/>
    )
}
export default App

import React from 'react'

function Child(props){
    return (
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

{/*practice the rendering props to the social media components*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElememtById('root'))



import Menu from './menu'
import Favorite from './favorite'
function App(){
    return(

    )
}
export default App

{/*Best Practice when rendering props*/}
{/*Use class based component that sets state and methods*/}
import React from 'react'

class ToggleClass extends React.Component{//class based component that creates state.
    state = {
        on: false
    }

    toggleOn =()=>{//eventHandler method that allows state to be changed.
        this.setState(prevState=>{
            return {
                on:!prevState.on
            }
        })
    }

     /*render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggleOn={this.toggleOn} {...props}/>
        )
    }

   export function highOrder(component){
        return function(props){
            return(
                <ToggleClass component={component} {...props}/>
            )
        }
    }*/

    render(){//rendering props function 
        return(
            <div>
                {this.props.renderProps(this.state.on, this.toggleOn)}
            </div>
        )
    }

}
export default ToggleClass

import React from 'react'
import ToggleClass './toggleClass'

function Menu(props){
    return (
        <div>
            <button onClick={toggleOn}>
                {on ? 'Hide' : 'Show'} Menu
            </button>

            <nav style={{display: on ? 'block' : 'none'}}>
            </nav>

        </div>
    )
}
export default Menu

import React from 'react'
import ToggleClass from './toggleClass'

function Favorite(props){
    return(
        <h1>
            <h3>Like or Dislike</h3>
                <span onClick={toggeleOn}>
                    {on ? 'Like' : 'Dislike'}
                </span>
        </h1>
    )
}
export default Favorite

{/*UNDERSTAND THE CONCEPTS!!*/}
{/*Practice Re-creating memegenerator app*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'

function App(){
    return(
        <div>
            <MemeGenr8er/>
        </div>
    )
}
export default App

import React from 'react'

class MemeGenr8er extends React.Component{
    state = {
        upperText:'',
        lowerText:'',
        randomImg:'',
        apiImgs:[]
    }

    hendleSubmit=(event)=>{
        event.preventDefault()
        const indexed = Math.floor(Math.random() * this.state.apiImgs.length)
        const meme = this.state.apiImgs[indexed].url
        this.setState({
            randomImg:meme
        })
    }

    handleChange=()=>{
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className='generateForm' onSubmit={this.handleSubmit}>

                    <input

                        type='text'
                        name='upperText'
                        value={this.state.upperText}
                        onChange={this.handleChange}
                    />

                    <input

                        type='text'
                        name='lowerText'
                        value={this.state.lowerText}
                        onChange={this.handleChange} 
                    />

                    <button>Gen</button>

                </form>

                    <hr/>

                <div className='textMemeImg'>

                    <Img src={this.state.randomImg} alt='memeImgs'>

                    <h2 className='topText'>{this.state.upperText}</h2>
                    <h2 className='bottomText'>{this.state.lowerText}</h2>

                 </div>

            </div>
        )
    }
}
export default MemeGenr8er

{/*Re-create todo-app*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))


import React from 'react'
import MapThisComponent from './mapThis'
import dataArray from ./dataArray

class App extends React.Component{
    state = {
        data: todosArray
    }

    handleChange=(id)=>{
        this.setState(prevState=>{
            const updatedArray = prevState.data.map(items=>{
                if(items.id === id){
                    return{
                        ...items,
                        completed: !items.completed
                    }
                }
                return items
            }) 
            return {
                data: updatedArray
            }
        })
    }


    render(){
        const dataItemsComp = this.state.data.map(item=>
        <MapThisComponent
            key={itemObj.id} 
            item={itemobj}
            handleChange={this.handleChange}
        />)
        return(
            <div>
                {dataItemsComp}
            </div>
        )
    }
}
export default App

import React from 'react'

class MapThisComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task:''
        }
        this.handleChangetext = this.handleChangeText.bind(this)
    }

    //method that live reloads the text inside text fields
    handleChangeText(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){

        const completedStyle = {
            textDecoration: 'lineThrough'
            color:'red'
        }

        return(
            <div>
                <form>
                    <ul>
                        <li>
                            <input
                                type='checkBox'
                                checked={this.props.itemObj.completed}
                                onChange={()=>this.handleChange(this.props.itemObj.id)}
                            />
                        </li>
                        <li>
                            <input
                                type='text'
                                name='task'
                                value={this.state.task}
                                onChange={this.handleChangeText}
                            />
                        </li>
                    </ul>
                </form>

                <div>
                    <h2 style={this.props.itemObj.completed ? completedStyle : null}>
                        {this.state.task}
                    </h2>
                </div>

            </div>
        )
    }
}
export default MapThisComponent


const todosArray = [
    {
        id:1,
        completed:false
    },
    {
        id:2,
        completed:false
    }
]
export default todosArray

{/*Practice rendering props pattern*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(</App>, document.getElementById('root'))

import React from 'react'
import Child from './child'

function App(props){
    return (
        <div>
            <Child
                childBgColor='green'
                childColor='white'
                childWidth={100}
                childHeight={50}
                name='Aaron'
                title='Bevans'
            />
        </div>
    )
}
export default App

import React from 'react'
import PropTypes from 'prop-types'

function Child(props){

            const divStyle = {
                backgroundColor: {props.childBgColor},
                color: {props.childColor},
                width: {prop.childWidth},
                height {props.childHeight}:
            }

    return(

        <div divStyle={{style}}>
            {props.name}
            {props.title}
        </div>
    )

}
Child.defaultProps = {
    childBgColor: 'black',
    childColor: 'white',
    childWidth: 100,
    childHeight 100
}

Child.propTypes = {
    chlildBgColor: PropTypes.string,
    childColor: PropTypes.string,
    childWidth: PropTypes.number.isRequired,
    childHeight: PropTypes.number.isRequired
}
export default Child

{/*Render Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'

function App(){
    return(
        <div>
            <Child renderProps={
                (userName, validator)=>(
                    return (
                        <div>
                            <h1>
                                {userName === 'cyberman' ? 'userName: cyberman' : 'userName: none'}
                            </h1>
                            <h2>{validator ? 'userName: valid' : 'userName: invalid'}</h2>
                        </div>
                    )
                )
            }/>
        </div>
    )
}
export default App

import React from 'react'


function Child(props){
    return (
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

{/*Higher Order Components*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(document.getElememtById('root'))


import React from 'react'
import {augmentedFirst} from './augmentedFirst'

function App(){
    return (
        <div>
            <Component/>
        </div>
    )
}
const superChargedApp = augmentedFirst(App)
export default App

import React from 'react'

export function aigmentedFirst(component){
    const Component = component
    return function(props){
        <Component renderedProps='props rendered' {...props}/>
    }
}

import React from 'react'

export function augmentedSecond(component){
    const Component = component
    return function(props){
        <Component {...props}/>
    }
}

{/*Higher Order Components*/}
import React from 'react'
import ReactDOM from 'react-dom'

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn =()=>{
        this.setState(prevState=>{
            return {
                on: !prevState.on
            }
        })
    }

    render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggleOn={this.toggleOn} {...props}/>
        )
    }
}

export function higherOrder(component){
    const Component = component
    return function(props){
        return (
            <Toggle component={component}/>
        )
    }
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
ReactDOM.render(<App/>, document.getElememtById('root'))


import React from 'react'
import {higherOrder} from './higherOrder'

function Menu(props){
    return (
        <div>
            <button onClick={toggleOn}>
                {on ? 'Hide' : 'Show'} Menu
            </button>

            <nav style={{display: on ? 'block' : 'none'}}>
                <a></a>
                <a></a>
                <a></a>
            </nav>
        </div>
    )
}
export default Menu

import React from 'react'
import {higherOrder} from './higherOrder'

function Favorite(props){
    return(
        <h1>
            <h3>Like or Dislike Posts</h3>
                <span onClick={toggleOn}>
                    <h1>{on ? 'Like' : 'Dislike'}</h1>
                </span>
        </h1>
    )
}
export default Favorite

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            return{
                on: !prevState.on
            }
        })
    }

    render(){
        return(
            <div>
                {this.renderProps(this.state.on, this.toggleOn)}
            </div>
        )
    }

}
export default ToggleClass

import React from 'react'
import ToggleClass from './toggleClass'

function Menu(props){
    return(
        <div>
            <ToggleClass renderProps={
                (on, toggleOn)=>(
                    <div>
                        <button toggleOn={toggleOn}>
                        </button>
                    </div>
                )
            }/>
        </div>
    )
}
export default Menu

{/*React Children*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElememtById('root'))

import React from 'react'
import Child from './child'
function App(){
    return (
        <Child>
            <h1>Aaron E. Bevans</h1>
        </Child>
            <br>
            <hr/>
            <br>
        <Child>
            <h2>ReactJs Front End Developer</h2>
        </Child>
            <br>
            <hr/>
            <br>
        <Child>
            <h1></h1>
        </Child>
    )
}
export default App

import React from 'react'
function Child(props){
    return (
        <div style={backgroundColor: 'blue', color:'white', height:100, width:500}>
         <h1>{props.children}</h1>
        </div>
    )
}
export default Child

{/*Higher Order Components*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
ReactDOM.render(<App/>, document.getElememtById('root'))

Import React from 'react'
Import {augmentedFirst} from './augmentedFirst'

function App(){
    retrun(
        <div>
            {props.firstProps}
        <div>
    )
}
const SuperChargedApp = augmentedFirst(App)
export default SuperChargedApp

import React from 'react'

export function augmentedFirst(component){
    const Component = component
    return function(props){
        return(
            <Component firstProps= 'first props' {...props}/>
        )
    }
}

import React from 'react'

export function augmentedSecond(component){
    return function(props){
        return(
            <Component extraProps='additional props' {...props}/>
        )
    }
}

{/*Rendering Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(document.getElememtById('root'))

import React from 'react'

function App(){
    return(
        <Child renderProps={
            return function(userName, validator){
                return(

                )
            }
        }/>
    )
}
export default App

import React from 'react'

function Child(props){
    return (
        <div>
            {props.renderProps('cyberman', true)}
        </div>
    )
}
export default Child

{/*Data Fetching by way of combining React CHILDREN, and React RENDERING PROPS*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

Render(<App/>, document.getElememtById('root'))

import React from 'react'
import DataFetcher from './DataFetcher'

function App(){
    return (
        <div>
            <DataFetcher url=''>
                {(data, loading)=>{
                    return(
                        loading
                            ?
                        <h1>Loading...</h1>
                            :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
    )
}
export default App

import React from 'react'

class DataFetcher extends React.Component{
    state = {
        loading: false,
        data: null
    }

    componentDidMount(){//lifecycle method that re-renders the component to screen with new code.
        this.setState({loading: true})//resetting the state of loading to true after re-rendering.
        fetch(this.props.url)//fetching url data with fetch method.
            .then(res=> res.json())//converting api data response to json object.
            .then(data=> this.setState({data: data, loading: false}))//data function that resets state of data and loading.
    }

    render(){//render method
        return(//return method that returns rendered props function; with data state and loading state as its parameters.
            this.props.children(this.state.data, this.state.loading)
        )
    }
}
export default DataFetcher

import React from 'react'


class DataFetcher extends React.Component{
    state = {
        loading: false,
        data: null
    }

    componentDidMount(){//lifecycle method that re-renders the component to the page once new code is added.
        this.setState({loading: true})//loading state is reset to its opposite when page is reloaded/re-rendered.
        fetch(this.props.url)//fetch data from the rendered props url/api.
         .then(res=> res.json())//then once we get a response the data needs to be converted into a json object/method so data can be displayed.
         .then(data=> this.setState({data: data, loading: false}))//then once we convert the api response, we need to transfer data into our state's object values.
    }

    render(){
        return(
            this.props.children(this.state.data, this.state.loading)
        )
    }
}
export default DataFetcher

import React from 'react'
import DataFetcher from './DataFetcher'

function App(){
    return(
        <di>
            <DataFetcher url=''>
                {(data, loading)=>{
                    return(
                        loading
                            ?
                        <h1>Loading</h1>
                            :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
    )
}
export default App

import React from 'react'

class DataFetcher extends React.Component{
    state = {
        data: null,
        loading: false
    }

    componentDidMount(){
        this.setSate({loading: true})
        fetch(this.props.url)
        .then(res=> res.json())
        .then(data=> this.setState({data: data, loading: false}))
    }

    render(){
        return(
            this.props.children(this.state.data, this.state.loading)
        )
    }
}
export default DataFetcher


import React from 'react'
import DataFetcher from './dataFetcher'

function App(){
    return(
        <DataFetcher url=''>
            {(data, loading)=>{
                return(
                    loading 
                        ?
                    <h1>Loading</h1>
                        :
                    <p>{JSON.stringify(data)}</p>
                )
            }}
        </DataFetcher>
    )
}
export default App

{/*Rendering Props & Children with API challenge*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import DataFetcher from './dataFetcher'

function App(){
    return (
        <div>
            <DataFetcher url=''>
            {(data, loading)=>{
                return (
                    loading 
                        ?
                    <h1>Loading</h1>
                        :
                    <p>{JSON.stringify(data)}</p>
                )
            }}
            </DataFetcher>
        </div>
    )
}
export default App

import React from 'react'

class DataFetcher extends React.Component{
    state = {//object
        data: null,
        loading: false
    }

    componentDidMount(){
        this.setState({loading: true})//object
        fetch(this.props.url)
        .then(res=> res.json())
        .then(data=> this.seState({data: data, loading: false}))//object
    }

    render(){
        return(
            this.props.children(this.state.data, this.state.loading)//state variables have have to point to state.
        )
    }
}
export default DataFetcher


{/*Rendering Props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElememtById('root'))

function App(props){
    return (
        <ToggleClass renderProps={
            (on, toggleOn)=>(
                <div>
                    <button onClick={toggleOn}>
                        {on ? 'Hide Menu' : 'Show Menu'}
                    </button>
                </div>
            )
        }/>

    )
}
export default App

class ToggleClass extends React.Component{
    state = {
        on: false
    }

    toggleOn=()=>{
        this.setState(prevState=>{
            return {
                on: !prevState.on
            }
        })
    }
    
    render(){
        return(
            {this.props.renderProps(this.state.on, this.toggleOn)}
        )
    }
}
export default ToggleClass

{/*React Children and Render props pattern*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import DataFetcher from './dataFetcher'

function App(){
    return (
        <div>
            <DataFetcher url=''>
                {(data, loading)=>{
                    return (
                        loading
                            ?
                        <h1>Loading</h1>
                            :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFecther>
        </div>
    )
}
extends react App


import React from 'react'

class DataFetcher extender React.Component{
    state = {
        data: null,
        laoding: false
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch(this.props.url)
        .then(res=> res.json())
        .then(data=> this.setState(data: data, loading: false))
    }

    render(){
        return (
            this.props.children(this.state.data, this.state.loading)
        )
    }
}
export default DataFecther

{/*Rendering Page*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

{/*Functional App render component*/}
import React from 'react'
import Child from './childComp'

function App(){
    return(
        <div>
        </div>
    )
}
export default App

{/*Functional Child component*/}
import React from 'react'
function Child(){
    return(
        <div>
            <h1>Aaron Bevans</h1>
        </div>
    )
}
export default Child

{/*Passing down props from parent to child to render to web page.*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './childComp'

function App(props){
    return(
        <div>
            <Child
                name='Aaron'
            />
        </div>
    )
}
export default App

import React from 'react'

function Child(props){
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default Child

{/*Create a class based parent component/Passing down props*/}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'

class App extends React.Component{
    render(){
        return(
            <div>
                <Child
                name='Aaron'
                />
            </div>
        )
    }
}
export default App

{/*Create a class based child component/Passing down props*/}

import React from 'react'

class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.prop.name}</h1>
            </div>
        )
    }
}
export default Child

{/*Creating State within components*/}
{/*State can be maintained within a single component*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'

class App extends React.Component{
    state = {
        someState: true
    }

    render(){
        const stateAlert = {
            alert('This is state')
        }
        return(
            <div>
                {this.state.someState ? stateAlert : 'no alert'} 
            </div>
        )
    }
}
export default App

{/*Creating State within components*/}
import React from 'react'
import ReactDOM from from 'react-dom'
import App from './app'

React.render(<App/>, document.getElementById('root'))

import React from 'react'
import Child from './childComp'

class App extends React.Component{

    render(){
        return(
            <div>
                <Child renderProps={
                        (someState)=>(
                            
                        someState
                            ? 
                        <h1>True</h1>
                            :
                        <h1>False</h1>
                    )
                }/>
            </div>
        )
    }
}
export default App

import React from 'react'

class Child extends React.Component{
    state = {
        someState: true
    }

    render(){
        return(
            {this.props.renderProps(this.state.someState)}
        )
    }
}
export deafault Child

{/*Use props to render completed data*/}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(document.getElementById('root'))

import React from 'react'
import Child from './childComp'

class App extends React.Component{
    state = {
        data: simpleArray
    }

    render(){
        const dataComponent = this.state.data.map(items=> 
        <Child 
            key={items.id}
            codeItem={items}
        />)
        return(
            <div>
                {dataComponent}
            </div>
        )
    }
}
export default App

import React from 'react'

function Child(props){
    return (
        <div>
                <input
                    type='checkbox'
                    checked={props.codeItem.completed}
                    onChange={()=>{props.handleChange(props.codeItem.id)}}//method 
                    //that changes state of checkboxes
                />
            <div>
                <h1>{props.language0}</h1>
                <h1>{props.language1}</h1>
                <h1>{props.language2}</h1>
                <h1>{props.library}</h1>
            </div>
        </div>
    )
}
export default Child

const simpleArray = [
    {
        id:1,
        completed: false,
        language0: 'Html5'
    },
    {
        id:2,
        completed: false,
        langauage1: 'Css3'
    },
    {
        id:3,
        completed: false,
        language2: 'JavaScript'
    },
    {
        id:4,
        completed: false,
        library: 'ReactJs'
    }
]
export default simpleArray;

{/*assigning a constant variable*/}
const name = 'Aaron'

console.log(name)

{/*assigning a let variable*/}
let number;

number = 100;
console.log(number);

{/*reassigning a constant variable*/}
const data = 'some data';
let newData = data;

newData = 'even better data';
console.log(newData);

{/*User template literals*/}
let favLanguage = 'JavaScript';
let engineeringType = 'Front End';

let message = `I am using a ${favLanguage} library to create applications on the ${engineeringType}.`;
consle.log(message);

{/*Conditional statement and switch statements*/}
const time = 'morning';

if(time === 'morning'){
    console.log('good morning')
}else if(time === 'afternoon'){
    console.log('good afternoon')
}else{
    console.log('good night')
}

const newTime = 'evening';

switch(2){
    case 1: 'evenning';
        console.log('good evening');
        break;
    case 2: 'night';
        console.log('good night');
        break;
    case 3: 'midnight';
        console.log('it is midnight')
        break;
    default:
        console.log('early early morning')
}

{/*Truethy and Falsey*/}
// Challenge 1:
// What will the following console logs display? (they're all true and false)

console.log("Challenge 1:")//true "Challenge 1:"
console.log(!undefined);//true
console.log(Boolean(NaN));//false
console.log(false === false);//true
console.log(5 === "5");//false
console.log("Hello" == "hello");//false

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:")//true
console.log(Boolean(0));//false
console.log(Boolean("0"));//true
console.log(Boolean(""));//false
console.log(!null);//true
console.log(!!"hello");//true

// Challenge 3:
// List all the falsy values in JavaScript
0
''
undefined
null
false
NaN

{/*Ternaries*/}















