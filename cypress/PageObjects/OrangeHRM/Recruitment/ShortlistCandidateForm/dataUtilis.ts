class Shortlisted {
    shortlistedCandidate(id:number){
      cy.request({ method:'PUT',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`
            });
    };
}export default Shortlisted