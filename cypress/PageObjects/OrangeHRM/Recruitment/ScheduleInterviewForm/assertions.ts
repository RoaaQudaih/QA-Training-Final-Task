class ScheduleInterviewAssertions{
    scheduleInterviewCandidateForm(){
        cy.contains('h6','Schedule Interview').should('be.visible');
    };
}export default ScheduleInterviewAssertions