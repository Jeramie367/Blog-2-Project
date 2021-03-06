import React,{Component} from "react"
import TrafficCamerasData from "../../data/json/k7p9-kppz.json";

class DataTableTC extends Component {
    constructor() {
        super();
        this.state ={
            selectedData:TrafficCamerasData,
            filterData:[],
            error_output:""
        }
        this.cameraFilter = this.cameraFilter.bind(this);
        this.cameraLocationFilter = this.cameraLocationFilter.bind(this);

      }
   
    cameraFilter(e){
        
       var count = 0;
            var filteredData = this.state.selectedData.filter((selectedData)=> {
                if(e.target.value == ""){
                    
                }
                else if(selectedData.camera_url.description.toLocaleLowerCase().startsWith(e.target.value.toLowerCase()) && count <=5){
                    count = count + 1
                    
                    return selectedData
                }
                
            })
            
        if(count >= 3  || (count == 0 &&e.target.value == "" )){
        this.setState({
            
            filterData:filteredData,
            error_output:""
        })
        }else{
            this.setState({
            
                error_output:"Sorry, it isn't here or there are very few results. Try a different search filter to find what you are looking for",
                filterData:[]
            })
        }
    }
    cameraLocationFilter(e){
        
        var count = 0;
             var filteredData = this.state.selectedData.filter((selectedData)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(selectedData.camera_location.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase()) && count <=5){
                     count = count + 1
                     return selectedData
                 }
                 
             })
             
         if(count >= 3  || (count == 0 &&e.target.value == "" )){
          this.setState({
            
            filterData:filteredData,
            error_output:""
        })
        }else{
            this.setState({
            
                error_output:"Sorry it isn't here or there are very few results. Try a typing in something like this.|[street name] / [street name] [Quadrant]|",
                filterData:[]
            })
        }
     }
    render(){
        
             
        return (
            <div>
                <label>Camera Number</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.cameraFilter(e)}/>
                <br/>
                <label>Camera Location</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.cameraLocationFilter(e)}/>
                {this.state.error_output != "" ?<p>{this.state.error_output}</p>:null}
            <table>
                <thead>
                  <tr>
                  <th>Camera Number</th>
                  <th>Quadrant</th>
                  <th>Camera Location</th>
                  <th>Camera Picture</th>
                  <th>Select</th>
                  </tr>  
                </thead>
                <tbody>

            {this.state.filterData.map((tcDetail) => {
            return  <tr key={tcDetail.camera_url.description}>
            
                        <th>{tcDetail.camera_url.description}</th>
                        <th>{tcDetail.quadrant}</th>
                        <th>{tcDetail.camera_location}</th>
                        <th><a href={tcDetail.camera_url.url}>Click here to see camera picture</a></th>
                        <th><a href={`https://www.google.com/maps/@${tcDetail.point.coordinates[0]},${tcDetail.point.coordinates[1]}`} >Click here to see map</a></th>
                    </tr>
            })
            }
          </tbody>  
        </table>
            
        </div>
    )
}
}


export default DataTableTC