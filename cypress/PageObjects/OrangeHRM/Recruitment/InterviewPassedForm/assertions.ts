class MarkInterviewPassedFormAssertions{
    MarkInterviewFailedCandidateForm(){
        cy.contains('h6','Mark Interview Passed').should('be.visible');
    };
}export default MarkInterviewPassedFormAssertions