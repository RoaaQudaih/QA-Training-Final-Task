class RejectCandidateAssertions {
    rejectForm(){
        cy.contains('h6','Reject Candidate').should('be.visible');
    };
  }export default RejectCandidateAssertions