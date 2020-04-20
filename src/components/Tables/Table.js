//Aaron Miller
import React from "react";
import Columns from "components/Tables/Columns.js";
import "components/Tables/Table.css";

export default function Table(){


  return(
    <div>
      <table id="customers">
        <tr>
          <th>Select</th>
          <th>Number</th>
          <th>Staff's Email</th>
          <th>Project Number</th>
        </tr>
        <Columns/>
      </table>
    </div>
  )
}
