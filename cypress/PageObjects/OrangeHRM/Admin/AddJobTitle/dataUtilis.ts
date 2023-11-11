import { JobTitle } from "@support/AdminTypes/types";

class Job {
    addJobTitle(job: JobTitle){
        return cy.request({ method:'POST',
                url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles',
                body:job
                }).then((Response) => {
                  return Response.body;
             });
     }; 

    deleteJobTitle(jobTitleId:number){
        cy.request({
            method: 'DELETE',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles',
            body: {
              "ids": [jobTitleId]
            }
          });     
      };
}export default Job