import React, { Component } from "react";
import RadioInfo from "./data/RadioInfo";
import SearchFilesRadio from "./components/SearchFilesRadio";
class App extends Component {
  constructor() {
    super()
    this.state ={
        isId:0,
        
    }
    this.onRadioChange = this.onRadioChange.bind(this)
    
  }
  
  onRadioChange(id) {
    let newIsId = id
        this.setState({
          isId: newIsId})

    
  }
  
  render() {
    const SearchFilesRadioDisplay =
    RadioInfo.map(radioData => <SearchFilesRadio key={radioData.id} 
      name= {radioData.name}
      value ={radioData.id}
      onRadioChange={this.onRadioChange}/>)
     
   
     
    
    return (
      <div>
      
       {SearchFilesRadioDisplay}

      {this.state.isId == 1 &&
       <DataTableTI/>
       }

      {this.state.isId == 2 &&
       <DataTableTC/>
       }

       {this.state.isId == 3 &&
       <DataTableCS/>
       }

       {this.state.isId == 4 &&
       <DataTableBP/>
       }
      </div>
    )

  }
}


export default App;