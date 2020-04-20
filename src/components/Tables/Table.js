//Aaron Miller
import React from "react";
import Columns from "components/Tables/Columns.js";
import "components/Tables/Table.css";

export default function Table(props){

  console.log(props.columns)
  console.log(Object.keys(props.columns))
  console.log(Object.values(props.columns))

  var TopColumns = Object.values(props.columns).map((c) => {
    return(
      <th>{c}</th>
    )
  })

  return(
    <div>
      <table id="customers">
        <tr>
          <th>Select</th>
          {TopColumns}
        </tr>
        <Columns/>
      </table>
    </div>
  )
}
