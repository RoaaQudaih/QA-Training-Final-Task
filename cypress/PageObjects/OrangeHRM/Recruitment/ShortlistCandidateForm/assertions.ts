class ShortlistCandidateAssertions{
    shortlistCandidateForm(){
        cy.contains('h6','Shortlist Candidate').should('be.visible');
    };
}export default ShortlistCandidateAssertions