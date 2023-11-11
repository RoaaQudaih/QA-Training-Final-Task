import { Employeebody } from "@support/EmployeeTypes/types";

class Employee {
    createEmployee(Employee:Employeebody){
        return cy.request({method:'POST',
        url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        body:
          Employee  
        }).then((Response) => {
          return Response.body;
        });
    };

    deleteEmployee(employeeId:number){        
          cy.request({
          method: 'DELETE',
          url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
          body: {
            "ids": [employeeId]
          }    
        });       
     }
}export default Employee