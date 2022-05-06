import './TableChart.css'

export const TableChart = ({currentData, textField}) => {

    return(
        <div className="tablechart">
            <table>
                <tr>
                    <th className="text-field">{textField()}</th>
                    {!currentData ? null : currentData.map(item => <th  key={item.assignment} >{item.assignment}</th>)}
                </tr>

                {currentData && currentData[0].funFactor ? 
                    <tr className="fun-chart">
                        <td>Fun</td>
                        {currentData.map(ass => {
                            return <td key={ass.assignment}>{ass.funFactor}</td>
                        })}
                    </tr>
                : null }

                {currentData && currentData[0].difficulty? 
                    <tr className="diff-chart">
                        <td>Difficulty</td>
                        {currentData.map(ass => {
                            return <td key={ass.assignment}>{ass.difficulty}</td>
                        })}
                    </tr>
                : null }
            </table>
        </div>
    );
}