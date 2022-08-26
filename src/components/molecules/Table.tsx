import styled from "styled-components";

export const Table = (props: any) => {
const tableData = props.tableData;
const tableHead = props.tableHead;
console.log(tableHead);

    return(
        <Stable id="course-table">
            <thead>               
                <tr id="table-head">
                    <th>{tableHead.count}</th>
                    <th>{tableHead.onece}</th>
                    <th>{tableHead.per}</th>
                </tr>
             </thead>
             <tbody>
                {tableData.map((table_d: any, index: any) => {
                     return(
                        <tr key={index}>
                            <td>{table_d.count}</td>
                            <td>{table_d.onece}</td>
                            <td>{table_d.per}</td>
                        </tr>
                     )
                 })}
            </tbody>
        </Stable>
    )
};

const Stable = styled.table`
width: 80%;
margin: 0 auto;
margin-bottom: 200px;
padding: 40px;
text-align: center;
background-color: #343434;
`