class OfferDeclined {
    offerDeclinedCandidate(candidateId:number){
      cy.request({ method:'PUT',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/job/decline`
          });
    };
}export default OfferDeclined