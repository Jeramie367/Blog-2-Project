import React,{Component} from "react"
import TrafficIncidentsData from "../../data/json/c2es-76ed.json";

class DataTableBP extends Component {
    constructor() {
        super();
        this.state ={
            selectedData:TrafficIncidentsData,
            filterData:[],
            error_output:""
        }
        this.permitNumberFilter = this.permitNumberFilter.bind(this);
        this.addressFilter = this.addressFilter.bind(this);
        this.costFilter = this.costFilter.bind(this);

      }
   
    permitNumberFilter(e){
        
       var count = 0;
            var filteredData = this.state.selectedData.filter((selectedData)=> {
                if(e.target.value == ""){
                    
                }
                else if(selectedData.permitnum.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())&& count <=5 ){
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
            
                error_output:"Sorry it isn't here or there are very few results. Try typing in |BP2021-[IDnumber] |",
                filterData:[]
            })
        }
    }
    addressFilter(e){
        
        var count = 0;
             var filteredData = this.state.selectedData.filter((selectedData)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(selectedData.originaladdress.startsWith(e.target.value) && count <=5 ){
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
    costFilter(e){
        
        var count = 0;
             var filteredData = this.state.selectedData.filter((selectedData)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(selectedData.estprojectcost != null){
                     if(selectedData.estprojectcost.startsWith(e.target.value) && count <=5){
                        count = count + 1
                        return selectedData
                     }
                     
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
    render(){
        
             
        return (
            <div>
                <label>Permit Number</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.permitNumberFilter(e)}/>
                <br/>
                <label>Address</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.addressFilter(e)}/>
                <br/>
                <label>Estimated Project Cost</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.costFilter(e)}/>
                {this.state.error_output != "" ?<p>{this.state.error_output}</p>:null}
            <table>
                <thead>
                  <tr>
                  <th>Permit Number</th>
                  <th>Current Status</th>
                  <th>Permit Type</th>
                  <th>Permit Class</th>
                  <th>Permit Class Group</th>
                  <th>Contractor Name</th>
                  <th>Estimated Project Cost</th>
                  <th>Address</th>
                  <th>Select</th>
                  </tr>  
                </thead>
                <tbody>

            {this.state.filterData.map((bpDetail) => {
            return  <tr key={bpDetail.permitnum}>
            
                        <th>{bpDetail.permitnum}</th>
                        <th>{bpDetail.statuscurrent}</th>
                        <th>{bpDetail.permittype}</th>
                        <th>{bpDetail.permitclass}</th>
                        <th>{bpDetail.workclassgroup}</th>
                        <th>{bpDetail.contractorname != null ? bpDetail.contractorname:'N/A'}</th>
                        <th>{bpDetail.estprojectcost != null ? bpDetail.estprojectcost:'N/A'}</th>
                        <th>{bpDetail.originaladdress}</th>
                        <th>{bpDetail.contractorname != null ? <a href={`https://www.google.com/maps/@${bpDetail.location.latitude},${bpDetail.location.longitude}`} >Click here to see map</a>:'Location coordinance unknown'}</th>
                    </tr>
            })
            }
          </tbody>  
        </table>
            
        </div>
    )
}
}


export default DataTableBP