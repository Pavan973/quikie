import React from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const save = () => {
    return (
        <div>
            <div>
  <div class="header">
     <h1>QUIKIE</h1>
     <h5>Apps</h5>
   </div>

   
   <div className="contain4">

   <div className="contain2"><div className="google">
       <h5>GOOGL</h5>
       <img src="/Assets/google.png"  alt="Google" height="80px" className="png1"/>
       <h1>1515USD</h1>
     </div>
     <div className="fb">
     <h5>FB</h5>
       <img src="/Assets/FB.png"  alt="fb" height="80px" className="fb1"/>
       <h1>266USD</h1>
     </div>
     <div className="amaz">
     <h5>AMZN</h5>
       <img src="/Assets/AMZN.SVG"  alt="amz" height="80px" className="amz"/>
       <h1>3116USD</h1>
     </div>
   </div>
  
   
   <Table size='small'>
   
   <Table.Header>
  
     <Table.Row>
     <Table.HeaderCell />
      <Table.HeaderCell />
       <Table.HeaderCell>SAVED DATA TABLE</Table.HeaderCell>
     
       
     </Table.Row>
   </Table.Header>

   <Table.Body>
     <Table.Row>
       <Table.Cell>141 Capital inc</Table.Cell>
       <Table.Cell><div className="oncp"><li>ONCP</li></div></Table.Cell>
       <Table.Cell>$145.4k</Table.Cell>
       <Table.Cell> <Button color='violet'>DELETE</Button></Table.Cell>
       <Table.Cell>$0.001</Table.Cell>
     </Table.Row>
     
    
     <Table.Row>
       <Table.Cell>BigString Corp</Table.Cell>
       <Table.Cell><div className="oncp"><li>BSGC</li></div></Table.Cell>
       <Table.Cell>$543k</Table.Cell>
       <Table.Cell> <Button color='violet'>DELETE</Button></Table.Cell>
       <Table.Cell>$0.003</Table.Cell>
     </Table.Row>
     
   </Table.Body>

   <Table.Footer>
     <Table.Row>
     <Table.HeaderCell />
     <Table.HeaderCell />
    
       <Table.HeaderCell><Button color='violet'><Link to="/">BACK</Link></Button></Table.HeaderCell>
 
       
     </Table.Row>
   </Table.Footer>
 </Table>


   </div>

  </div>


        </div>
    );
}

export default save;
