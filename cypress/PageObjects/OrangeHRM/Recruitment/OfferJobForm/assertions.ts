class OfferJobFormAssertions{
    offerJobCandidateForm(){
        cy.contains('h6','Offer Job').should('be.visible');
    }
}export default OfferJobFormAssertions