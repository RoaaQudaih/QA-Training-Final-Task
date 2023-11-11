class InterviewPassed {
    interviewPassedCandidate(candidateId:number,interviewId:number){
      cy.request({ method:'PUT',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/interviews/${interviewId}/pass`
            });
    };
}export default InterviewPassed