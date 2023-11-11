import { Candidate } from "@support/RecruitmentTypes/types";

class NewCandidate {
    addCandidate(candidate:Candidate){
      return cy.request({ method:'POST',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',
            body:candidate
        }).then((Response) =>{
            return Response.body;
        });
    };

    deleteCandidate(candidateId:number){
        cy.request({ method:'DELETE',
        url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',
        body:{
        "ids":[candidateId]
        }
        });
    };
}export default NewCandidate