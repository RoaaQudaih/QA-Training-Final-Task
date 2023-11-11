class HireFormAssertions{
    hiredCandidateForm(){
        cy.contains('h6','Hire Candidate').should('be.visible');
    };
}export default HireFormAssertions