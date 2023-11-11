class JobOffered {
    jobOfferedCandidate(candidateId:number){
      cy.request({ method:'PUT',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/job/offer`
            });
    };
}export default JobOffered