class ApplicationStageInfoActions{
    clickRejectButton(){
        cy.contains('button','Reject').click({force:true});
    };

    clickShortlistButton(){
        cy.contains('button','Shortlist').click({force:true});
    };

    clickScheduleInterviewButton(){
        cy.contains('button','Schedule Interview').click({force:true});
    };

    clickMarkInterviewFailedButton(){
        cy.contains('button','Mark Interview Failed').click({force:true});
    };

    clickMarkInterviewPassedButton(){
        cy.contains('button','Mark Interview Passed').click({force:true});
    };

    clickOfferJobButton(){
        cy.contains('button','Offer Job').click({force:true});
    };

    clickOfferDeclineButton(){
        cy.contains('button','Offer Declined').click({force:true});
    };

    clickHireButton(){
        cy.contains('button','Hire').click({force:true});
    };
}export default ApplicationStageInfoActions