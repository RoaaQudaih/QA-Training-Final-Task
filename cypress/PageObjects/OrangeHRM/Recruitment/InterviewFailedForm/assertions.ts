class MarkInterviewFailedFormAssertions{
    MarkInterviewFailedCandidateForm(){
        cy.contains('h6','Mark Interview Failed').should('be.visible');
    };
}export default MarkInterviewFailedFormAssertions