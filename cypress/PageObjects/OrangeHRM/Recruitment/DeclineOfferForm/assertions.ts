class DeclineOfferFormAssertions{
    offerDeclineCandidateForm(){
        cy.contains('h6','Decline Offer').should('be.visible');
    };
}export default DeclineOfferFormAssertions