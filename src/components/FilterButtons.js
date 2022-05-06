import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartColumn, faTable } from '@fortawesome/free-solid-svg-icons';

const FilterButtons = ({
  graphTypeHandler,
  filterData
}) => {

    return (
      <div className="App">
        <div className='graph-menu graph-buttons'>
          <input type="radio" id="bar" name="graph" value="bar" onClick={graphTypeHandler} defaultChecked={true}/>
          <label htmlFor="bar"><FontAwesomeIcon icon={faChartColumn} /></label>
          <input type="radio" id="line" name="graph" value="line" onClick={graphTypeHandler} />
          <label htmlFor="line"><FontAwesomeIcon icon={faChartLine} /></label>
          <input type="radio" id="table" name="graph" value="table" onClick={graphTypeHandler} />
          <label htmlFor="table"><FontAwesomeIcon icon={faTable} /></label>
      </div>
      <div className='graph-menu filter-buttons'>
          <input type="radio" id="both" name="filter" value="both" onClick={filterData} defaultChecked={true}/>
          <label htmlFor="both">Both</label>
          <input className='fun-radio' type="radio" id="funFactor" name="filter" value="funFactor" onClick={filterData} />
          <label htmlFor="funFactor">Fun</label>
          <input className='diff-radio' type="radio" id="difficulty" name="filter" value="difficulty" onClick={filterData} />
          <label htmlFor="difficulty">Difficulty</label>
      </div>
      </div>
    )
}
  
  export default FilterButtons;