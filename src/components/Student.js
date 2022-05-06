import { useLocation } from "react-router";
import FilterButtons from "./FilterButtons";
import { DisplayChart } from "./charts/DisplayChart";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Student = () => {
    const [graphType, setGraphType] = useState("bar");
    const [choice, setChoice] = useState("both");

    const location = useLocation()
    const { student } = location.state
    
    const filterData = event => {
        setChoice(event.target.value)
      }
    
    const graphTypeHandler = event => setGraphType(event.target.value)
    
    const displayFilter = () => {
        if(choice === "both"){
            return student;
        } else if (choice === "funFactor") {
            return student.map(item => {
                return {...item, difficulty: null}
            })
        } else {
            return student.map(item => {
                return {...item, funFactor: null}
            })
        }
    }

    return (
      <div className="App">
          <DisplayChart currentData={displayFilter()} graphType={graphType} choice={choice}/>
          <FilterButtons graphTypeHandler={graphTypeHandler} filterData={filterData} />
          <NavLink  className='graph-menu student-buttons back-button' style={{textDecoration: "none"}} to={"/"}>
                        <input type="radio" name="studentbutton" />
                        <label>Back to overview</label>  
          </NavLink>
      </div>
    );
  }
  
  export default Student;