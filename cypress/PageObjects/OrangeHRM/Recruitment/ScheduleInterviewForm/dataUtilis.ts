import { ScheduleInterviewForm } from "@support/RecruitmentTypes/types";
class ScheduleInterview {
    scheduleInterviewCandidate(form:ScheduleInterviewForm,id:number){
      return cy.request({ method:'POST',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`,
            body:form
        }).then((Response) => {
            return Response.body;
        });
    };
}export default ScheduleInterview