import React,{Component} from "react"
import CrimeStatsData from "../../data/json/848s-4m4z.json";

class DataTableCS extends Component {
    constructor() {
        super();
        this.state ={
            datab:CrimeStatsData,
            filterData:[],
            error_output:""
        }
        this.idFilter = this.idFilter.bind(this);
        this.communityNameFilter = this.communityNameFilter.bind(this);

      }
   
    idFilter(e){
        
       var count = 0;
            var filteredData = this.state.datab.filter((datab)=> {
                if(e.target.value == ""){
                    
                }
                else if(datab.id.toLocaleLowerCase().startsWith(e.target.value.toLowerCase()) ){
                    count = count + 1
                    
                    return datab
                }
                
            })
            
        if(count >= 3 && count <=5 || (count == 0 &&e.target.value == "" )){
        this.setState({
            
            filterData:filteredData,
            error_output:""
        })
        }else{
            this.setState({
            
                error_output:"Sorry, it isn't here or there are very few results. Try a different search filter to find what you are looking for"
            })
        }
    }
    communityNameFilter(e){
        
        var count = 0;
             var filteredData = this.state.datab.filter((datab)=> {
                 if(e.target.value == ""){
                     
                 }
                 else if(datab.community_name.startsWith(e.target.value) && count <=5){
                     count = count + 1
                     return datab
                 }
                 
             })
             
         if(count >= 3 || (count == 0 &&e.target.value == "" )){
          this.setState({
            
            filterData:filteredData,
            error_output:""
        })
        }else{
            this.setState({
            
                error_output:"Sorry, it isn't here or there are very few results. Try a different search filter to find what you are looking for"
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

            {this.state.filterData.map((csDetail,index) => {
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
            <br/>
            <p>{this.state.error_output}</p>
            
        </div>
    )
}
}


export default DataTableCS