import { Vacancies } from "@support/RecruitmentTypes/types";
class NewVacancies {
  addVacancy(vacancy: Vacancies){
    return cy.request({ method:'POST',
          url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies',
          body:vacancy
        }).then((Response) =>{
          return Response.body;
        });
    };
  
  deleteVacancy(vacancyId:number){ 
    cy.request({method:'DELETE',
    url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies',
    body:{
    "ids":[vacancyId]
    }
   });
 };
}export default NewVacancies