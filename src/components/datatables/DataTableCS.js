import React,{Component} from "react"
import CrimeStatsData from "../../data/json/848s-4m4z.json";

class DataTableCS extends Component {
    constructor() {
        super();
        this.state ={
            selectedData:CrimeStatsData,
            filterData:[],
            error_output:""
        }
        this.idFilter = this.idFilter.bind(this);
        this.communityNameFilter = this.communityNameFilter.bind(this);

      }
   
    idFilter(e){
        
       var count = 0;
            var filteredData = this.state.selectedData.filter((selectedData)=> {
                if(e.target.value == ""){
                    
                }
                else if(selectedData.id.toLocaleLowerCase().startsWith(e.target.value.toLowerCase())&& count <=5 ){
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
            
                error_output:"Sorry it isn't here or there are very few results. Try a typing in something like this.| yyyy-Mon-[communityName]-[crime]-[count] |",
                filterData:[]
            })
        }
    }
    communityNameFilter(e){
        
        var count = 0;
             var filteredData = this.state.selectedData.filter((selectedData)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(selectedData.community_name.startsWith(e.target.value) && count <=5){
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
            
                error_output:"Sorry, it isn't here or there are very few results. Try a different search filter to find what you are looking for",
                filterData:[]
            })
        }
     }
    render(){
        
             
        return (
            <div>
                <label>ID</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.idFilter(e)}/>
                <br/>
                <label>Community Name</label>
                <br/>
                <input type="text"
                placeholder=""
                onChange={(e) => this.communityNameFilter(e)}/>
                {this.state.error_output != "" ?<p>{this.state.error_output}</p>:null}
            <table>
                <thead>
                  <tr>
                  <th>Community Name</th>
                  <th>Group Category</th>
                  <th>Crime Category</th>
                  <th>Count</th>
                  <th>Resident Count</th>
                  <th>ID</th>
                  <th>Select</th>
                  </tr>  
                </thead>
                <tbody>

            {this.state.filterData.map((csDetail) => {
            return  <tr key={csDetail.id}>
            
                        <th>{csDetail.community_name}</th>
                        <th>{csDetail.group_category}</th>
                        <th>{csDetail.category}</th>
                        <th>{csDetail.count}</th>
                        <th>{csDetail.resident_count}</th>
                        <th>{csDetail.id}</th>
                        <th><a href={`https://www.google.com/maps/@${csDetail.geocoded_column.latitude},${csDetail.geocoded_column.longitude}`} >Click here to see map</a></th>
                    </tr>
            })
            }
          </tbody>  
        </table>
            
        </div>
    )
}
}


export default DataTableCS