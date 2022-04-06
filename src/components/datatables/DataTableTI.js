import React,{Component} from "react"
import TrafficIncidentsData from "../../data/json/35ra-9556.json";

class DataTableTI extends Component {
    constructor() {
        super();
        this.state ={
            selectedData:TrafficIncidentsData,
            filterData:[],
            error_output:""
        }
        this.incidentInfoFilter = this.incidentInfoFilter.bind(this);
        this.startDateFilter = this.startDateFilter.bind(this);

      }
   
    incidentInfoFilter(e){
        
       var count = 0;
            var filteredData = this.state.selectedData.filter((selectedData)=> {
                if(e.target.value == ""){
                    
                }
                else if(selectedData.incident_info.toLocaleLowerCase().startsWith(e.target.value.toLowerCase()) && count <=5){
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
    startDateFilter(e){
        
        var count = 0;
             var filteredData = this.state.selectedData.filter((selectedData)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(selectedData.start_dt.startsWith(e.target.value) && count <=5){
                     count = count + 1
                     return selectedData
                 }
                 
             })
             
         if(count >= 3 || (count == 0 &&e.target.value == "" )){
          this.setState({
            
            filterData:filteredData,
            error_output:""
        })
        }else{
            this.setState({
            
                error_output:"Sorry it isn't here or there are very few results. Try a typing in something like this.| yyyy-Mon-ddTHH:Min:Sec |",
                filterData:[]
            })
        }
     }
    render(){  
        return (
            <div>
                <label>Incident Info</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.incidentInfoFilter(e)}/>
                <br/>
                <label>Start Date</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.startDateFilter(e)}/>
                 {this.state.error_output != "" ?<p>{this.state.error_output}</p>:null}
            <table>
                <thead>
                  <tr>
                  <th>Incident Info</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>Longitude</th>
                  <th>Latitude</th>
                  <th>ID</th>
                  <th>Select</th>
                  </tr>  
                </thead>
                <tbody>

            {this.state.filterData.map((tiDetail) => {
            return  <tr key={tiDetail.id}>
            
                        <th>{tiDetail.incident_info}</th>
                        <th>{tiDetail.description}</th>
                        <th>{tiDetail.start_dt}</th>
                        <th>{tiDetail.longitude}</th>
                        <th>{tiDetail.latitude}</th>
                        <th>{tiDetail.id}</th>
                        <th><a href={`https://www.google.com/maps/@${tiDetail.location.latitude},${tiDetail.location.longitude}`} >Click here to see map</a></th>
                    </tr>
            })
            }
          </tbody>  
        </table>
            
        </div>
    )
}
}


export default DataTableTI