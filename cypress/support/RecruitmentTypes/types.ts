export interface Vacancies {
    "description":string,
    "employeeId":number,
    "isPublished":boolean,
    "jobTitleId":number,
    "name":string,
    "numOfPositions":number,
    "status":boolean
}

export interface Candidate{
    "comment":string,
    "consentToKeepData":boolean,
    "contactNumber":object,
    "dateOfApplication":string,
    "email":string,
    "firstName":string,
    "keywords":object,
    "lastName":string,
    "middleName":string,
    "vacancyId":number
} 

export interface ScheduleInterviewForm{
    "interviewDate":string,
    "interviewName":string,
    "interviewTime":string,
    "interviewerEmpNumbers":[number],
    "note":object
}