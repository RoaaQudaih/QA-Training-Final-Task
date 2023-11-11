class ApplicationStageInfoAssertions{
    applicationInitiatedStatus(){
      cy.contains('p','Status: Application Initiated').should('be.visible');
    };

    applicationInitiatedOptions(){
        cy.contains('button','Reject').should('be.visible');
        cy.contains('button','Shortlist').should('be.visible');
    };

    rejectedStatus(){
      cy.contains('p','Status: Rejected').should('be.visible');
    };

    shortlistedStatus(){
      cy.contains('p','Status: Shortlisted').should('be.visible');
    };

    shortlistedOptions(){
      cy.contains('button','Reject').should('be.visible');
      cy.contains('button','Schedule Interview').should('be.visible');
    };

    interviewScheduledStatus(){
      cy.contains('p','Status: Interview Scheduled').should('be.visible');
    };

    interviewScheduledOptions(){
      cy.contains('button','Reject').should('be.visible');
      cy.contains('button','Mark Interview Failed').should('be.visible');
      cy.contains('button','Mark Interview Passed').should('be.visible');
    };

    interviewFailedStatus(){
      cy.contains('p','Status: Interview Failed').should('be.visible');
    };

    interviewFailedOptions(){
      cy.contains('button','Reject').should('be.visible');
    };

    interviewPassedStatus(){
      cy.contains('p','Status: Interview Passed').should('be.visible');
    };

    interviewPassedOptions(){
      cy.contains('button','Reject').should('be.visible');
      cy.contains('button','Schedule Interview').should('be.visible');
      cy.contains('button','Offer Job').should('be.visible');
    };

    secondInterviewPassedOptions(){
      cy.contains('button','Reject').should('be.visible');
      cy.contains('button','Offer Job').should('be.visible');
    };

    jobOfferdStatus(){
      cy.contains('p','Status: Job Offered').should('be.visible');
    };

    jobOfferdOptions(){
      cy.contains('button','Reject').should('be.visible');
      cy.contains('button','Offer Declined').should('be.visible');
      cy.contains('button','Hire').should('be.visible');
    };

    offerDeclinedStatus(){
      cy.contains('p','Status: Offer Declined').should('be.visible');
    };

    hiredStatus(){
      cy.contains('p','Status: Hired').should('be.visible');
    };   
}export default ApplicationStageInfoAssertions;