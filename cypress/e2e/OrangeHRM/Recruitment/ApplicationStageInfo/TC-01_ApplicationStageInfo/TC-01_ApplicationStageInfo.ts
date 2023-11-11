import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getEmployee } from "cypress/e2e/Common/OrangeHRM/Employee/dataFaker";
import { getJobTitle } from "cypress/e2e/Common/OrangeHRM/Admin/dataFaker";
import { getSecduleInterviewForm, getVacancies } from "cypress/e2e/Common/OrangeHRM/Recruitment/dataFaker";
import { getCandidate } from "cypress/e2e/Common/OrangeHRM/Recruitment/dataFaker";
import Job from "cypress/PageObjects/OrangeHRM/Admin/AddJobTitle/dataUtilis";
import Employee from "cypress/PageObjects/OrangeHRM/PIM/AddEmployee/dataUtilies";
import NewVacancies from "cypress/PageObjects/OrangeHRM/Recruitment/AddJobVacancy/dataUtilis";
import NewCandidate from "cypress/PageObjects/OrangeHRM/Recruitment/AddCandidate/dataUtilis";
import ApplicationStageInfoAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/ApplicationStageInfo/assertions";
import ApplicationStageInfoActions from "cypress/PageObjects/OrangeHRM/Recruitment/ApplicationStageInfo/actions";
import AddCandidatesActions from "cypress/PageObjects/OrangeHRM/Recruitment/AddCandidate/actions";
import ViewCandidatesActions from "cypress/PageObjects/OrangeHRM/Recruitment/ViewCandidates/actions"; 
import RejectCandidateActions from "cypress/PageObjects/OrangeHRM/Recruitment/RejectCandidateForm/actions";
import RejectCandidateAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/RejectCandidateForm/assertions";
import ShortlistCandidateAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/ShortlistCandidateForm/assertions";
import ShortlistCandidateActions from "cypress/PageObjects/OrangeHRM/Recruitment/ShortlistCandidateForm/actions";
import Shortlisted from "cypress/PageObjects/OrangeHRM/Recruitment/ShortlistCandidateForm/dataUtilis";
import ScheduleInterviewAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/ScheduleInterviewForm/assertions";
import ScheduleInterviewActions from "cypress/PageObjects/OrangeHRM/Recruitment/ScheduleInterviewForm/actions";
import ScheduleInterview from "cypress/PageObjects/OrangeHRM/Recruitment/ScheduleInterviewForm/dataUtilis";
import MarkInterviewFailedFormAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewFailedForm/assertions";
import MarkInterviewFailedFormActions from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewFailedForm/actions";
import InterviewFailed from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewFailedForm/dataUtilis";
import MarkInterviewPassedFormAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewPassedForm/assertions";
import MarkInterviewPassedFormActions from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewPassedForm/actions";
import InterviewPassed from "cypress/PageObjects/OrangeHRM/Recruitment/InterviewPassedForm/dataUtilis";
import OfferJobFormActions from "cypress/PageObjects/OrangeHRM/Recruitment/OfferJobForm/actions";
import OfferJobFormAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/OfferJobForm/assertions";
import JobOffered from "cypress/PageObjects/OrangeHRM/Recruitment/OfferJobForm/dataUtilis";
import DeclineOfferFormActions from "cypress/PageObjects/OrangeHRM/Recruitment/DeclineOfferForm/actions";
import DeclineOfferFormAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/DeclineOfferForm/assertions";
import OfferDeclined from "cypress/PageObjects/OrangeHRM/Recruitment/DeclineOfferForm/dataUtilis";
import HireFormActions from "cypress/PageObjects/OrangeHRM/Recruitment/HireForm/actions";
import HireFormAssertions from "cypress/PageObjects/OrangeHRM/Recruitment/HireForm/assertions";

const hireFormActions = new HireFormActions();
const hireFormAssertions = new HireFormAssertions();
const offerDeclined = new OfferDeclined();
const declineOfferFormAssertions = new DeclineOfferFormAssertions();
const declineOfferFormActions = new DeclineOfferFormActions();
const jobOffered = new JobOffered();
const offerJobFormActions = new OfferJobFormActions();
const offerJobFormAssertions = new OfferJobFormAssertions();
const interviewPassed = new InterviewPassed();
const markInterviewPassedFormActions = new MarkInterviewPassedFormActions();
const markInterviewPassedFormAssertions = new MarkInterviewPassedFormAssertions();
const interviewFailed = new InterviewFailed();
const markInterviewFailedFormActions = new MarkInterviewFailedFormActions(); 
const markInterviewFailedFormAssertions = new MarkInterviewFailedFormAssertions();
const scheduleInterview = new ScheduleInterview();
const scheduleInterviewActions = new ScheduleInterviewActions();
const scheduleInterviewAssertions = new ScheduleInterviewAssertions();
const shortlistCandidate = new Shortlisted();
const shortlistCandidateActions = new ShortlistCandidateActions();
const shortlistCandidateAssertions = new ShortlistCandidateAssertions();
const applicationStageInfoActions = new ApplicationStageInfoActions();
const rejectCandidateAssertions = new RejectCandidateAssertions();
const rejectCandidateActions = new RejectCandidateActions();
const viewCandidateActions = new ViewCandidatesActions();
const addCandidatesActions = new AddCandidatesActions();
const applicationStageInfoAssertions = new ApplicationStageInfoAssertions();
const addEmployee = new Employee();
const addJobTitle = new Job();
const addVacancies = new NewVacancies();
const addCandidate = new NewCandidate();
const newEmployee = getEmployee();
const newJobTitle = getJobTitle();
const newVacancies = getVacancies();
const newCandidate = getCandidate();
const newScheduleInterviewForm = getSecduleInterviewForm();

let empId:number;
let jobTitleId:number;
let candidateId:number;
let vacancyId:number;
let scheduleFirstInterviewId:number;
let schedulesecondInterviewId:number;

beforeEach(() => {
    cy.login('Admin','admin123');
    cy.contains('span','Recruitment').click();
    addEmployee.createEmployee(newEmployee).then((Response) => {
        empId=Response.data.empNumber;
       addJobTitle.addJobTitle(newJobTitle).then((Response) => {
           jobTitleId=Response.data.id;
           addVacancies.addVacancy({...newVacancies,employeeId:empId,jobTitleId:jobTitleId}).then((Response)=>{
            vacancyId=Response.data.id;
           });
       });
    }); 
});   

When("Admin clicks 'Add' button on the viewCandidates page", () => {
    viewCandidateActions.clickAddButton();
});

When("Fills the add candidate form",() => {
    addCandidatesActions.enterFullName(newCandidate.firstName, newCandidate.middleName, newCandidate.lastName).
    enterVacancy(newVacancies.name).enterEmail(newCandidate.email);    
});

When("Clicks 'save' button on the add candidate form",() => {
    addCandidatesActions.clickSaveButton();
});

Then("Status should be application initiated",() => {
    applicationStageInfoAssertions.applicationInitiatedStatus();
});

Then("The available buttons options 'Reject' and 'Shortlist' should be visible",() => {
    applicationStageInfoAssertions.applicationInitiatedOptions();
});

Given("Admin has added candidate to the system",() => {
    addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
        candidateId=Response.data.id;
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
    });           
});

When("Admin clicks 'reject' button on the application stage grid", () => {
    applicationStageInfoActions.clickRejectButton();
});

Then("Navigate to the reject candidate form", () => {
    rejectCandidateAssertions.rejectForm();
});

When("Clicks 'save' button on the reject candidate form", ()=>{
    rejectCandidateActions.clickSaveButton();
});

Then("The status should be rejected", () => {
    applicationStageInfoAssertions.rejectedStatus();
});

When("Admin clicks 'Shortlist' button on the application stage grid", () => {
    applicationStageInfoActions.clickShortlistButton();
});

Then("Navigate to the shortlist candidate form", () => {
    shortlistCandidateAssertions.shortlistCandidateForm();
});

When("Clicks 'save' button on the shortlist candidate form", () => {
    shortlistCandidateActions.clickSaveButton();
});

Then("The status should be Shortlisted",() => {
    applicationStageInfoAssertions.shortlistedStatus();
});

Then("The available buttons options 'Reject' and 'Schedule Interview' should be visible", () => {
    applicationStageInfoAssertions.shortlistedOptions();
});

Given("The system has {string} candidate", (status) => {
    switch(status) {
        case "Shortlisted":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "Schedule First Interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "First Interview Failed":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                      scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewFailed.interviewFailedCandidate(candidateId,scheduleFirstInterviewId);
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "First Interview Passed":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "Offered Job after first interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                      }).then((Response) => {
                          scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                          then((Response) => {
                              scheduleFirstInterviewId=Response.data.id;
                          }).then((Response) => {
                              interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                          }).then((Response) => {
                              jobOffered.jobOfferedCandidate(candidateId);                      
                          });
                          cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                    });
            break;
        case "Offer Declined after first interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                 shortlistCandidate.shortlistedCandidate(candidateId);
                      }).then((Response) => {
                          scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                          then((Response) => {
                              scheduleFirstInterviewId=Response.data.id;
                          }).then((Response) => {
                              interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                          }).then((Response) => {
                              jobOffered.jobOfferedCandidate(candidateId);                      
                          }).then ((Response) => {
                              offerDeclined.offerDeclinedCandidate(candidateId);
                          })
                          cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "Schedule Second Interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    }).then((Response) => {
                        scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "Second Interview Failed":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    }).then((Response) => {
                        scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    }).then((Response) => {
                        interviewFailed.interviewFailedCandidate(candidateId,scheduleFirstInterviewId);
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;
        case "Second Interview Passed":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    }).then((Response) => {
                        scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    }).then((Response) => {
                        schedulesecondInterviewId=Response.data.id;
                        interviewPassed.interviewPassedCandidate(candidateId,schedulesecondInterviewId);
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                    }); 
            break;
        case "Offered Job after second interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    }).then((Response) => {
                        scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    }).then((Response) => {
                        schedulesecondInterviewId=Response.data.id;
                        interviewPassed.interviewPassedCandidate(candidateId,schedulesecondInterviewId);
                    }).then((Response) => {
                        jobOffered.jobOfferedCandidate(candidateId); 
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                    });
            break;
        case "Offer Declined after second interview":
            addCandidate.addCandidate({...newCandidate,vacancyId:vacancyId}).then((Response)=>{
                candidateId=Response.data.id;
                shortlistCandidate.shortlistedCandidate(candidateId);
                }).then((Response) => {
                    scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId).
                    then((Response) => {
                        scheduleFirstInterviewId=Response.data.id;
                    }).then((Response) => {
                        interviewPassed.interviewPassedCandidate(candidateId,scheduleFirstInterviewId);
                    }).then((Response) => {
                        scheduleInterview.scheduleInterviewCandidate({...newScheduleInterviewForm,interviewerEmpNumbers:[empId]},candidateId);
                    }).then((Response) => {
                        schedulesecondInterviewId=Response.data.id;
                        interviewPassed.interviewPassedCandidate(candidateId,schedulesecondInterviewId);
                    }).then((Response) => {
                        jobOffered.jobOfferedCandidate(candidateId); 
                    }).then((Response) => {
                        offerDeclined.offerDeclinedCandidate(candidateId); 
                    });
                    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateId}`);
                });
            break;            
    }
});

When("Admin clicks 'Schedule Interview' button on the application stage grid", () => {
    applicationStageInfoActions.clickScheduleInterviewButton();
});

Then("Navigate to the schedule interview form", () => {
    scheduleInterviewAssertions.scheduleInterviewCandidateForm();
});

When("Fills the schedule Interview form", () => {
    scheduleInterviewActions.enterInterviewTitle(newJobTitle.title).enterInterviewer(newEmployee.firstName,newEmployee.firstName+' '+newEmployee.middleName+' '+newEmployee.lastName).enterDate();
});

When("Clicks 'save' button on the schedule Interview form", () => {
    scheduleInterviewActions.clickSaveButton();
});

Then("The status should be Interview Scheduled", () => {
    applicationStageInfoAssertions.interviewScheduledStatus();
});

Then("The available buttons options 'Reject', 'Mark Interview Failed' and 'Mark Interview Passed' should be visible", () => {
    applicationStageInfoAssertions.interviewScheduledOptions();
});

When("Admin clicks 'Mark Interview Failed' button on the application stage grid", () => {
    applicationStageInfoActions.clickMarkInterviewFailedButton();
});

Then("Navigate to the Mark Interview Failed form", () => {
    markInterviewFailedFormAssertions.MarkInterviewFailedCandidateForm();
});

When("Clicks 'save' button on Mark Interview Failed form", () => {
    markInterviewFailedFormActions.clickSaveButton();
});

Then("The status should be Interview Failed", () => {
    applicationStageInfoAssertions.interviewFailedStatus();
});

Then("The available button option 'Reject' should be visible", () => {
    applicationStageInfoAssertions.interviewFailedOptions();
});

When("Admin clicks 'Mark Interview Passed' button on the application stage grid", () => {
    applicationStageInfoActions.clickMarkInterviewPassedButton();
});

Then("Navigate to the Mark Interview Passed form", () => {
    markInterviewPassedFormAssertions.MarkInterviewFailedCandidateForm();
});

When("Clicks 'save' button on interview passed form", () => {
    markInterviewPassedFormActions.clickSaveButton();
});

Then("The status should be Interview Passed", () => {
    applicationStageInfoAssertions.interviewPassedStatus();
});

Then("The available buttons options 'Reject', 'Schedule Interview' and 'Offer job' should be visible", () => {
    applicationStageInfoAssertions.interviewPassedOptions();
});

When("Admin clicks 'Offer Job' button on the application stage grid", () => {
    applicationStageInfoActions.clickOfferJobButton();
});

Then("Navigated to the Offer Job form", () => {
    offerJobFormAssertions.offerJobCandidateForm();
});
      
When("Clicks 'save' button on the Offer Job form", () => {
    offerJobFormActions.clickSaveButton();
});

Then("The status should be Job Offered", () => {
    applicationStageInfoAssertions.jobOfferdStatus();
});

Then("The available buttons options 'Reject', 'Offer Declined' and 'Hire' should be visible", () => {
    applicationStageInfoAssertions.jobOfferdOptions();
});     
      
When("Admin clicks 'offer declined' button on the application stage grid", () => {
    applicationStageInfoActions.clickOfferDeclineButton();
});

Then("Navigate to the Decline Offer candidate form", () => {
    declineOfferFormAssertions.offerDeclineCandidateForm();
});
          
When("Clicks 'save' button on the Decline Offer candidate form", () => {
    declineOfferFormActions.clickSaveButton();
});

Then("The status should be Offer Declined", () => {
    applicationStageInfoAssertions.offerDeclinedStatus();
});

When("Admin clicks 'Hire' button on the application stage grid", () => {
    applicationStageInfoActions.clickHireButton();
});

Then("Navigate to the hire candidate form", () => {
    hireFormAssertions.hiredCandidateForm();
});

When("Clicks 'save' button on the Hire candidate form", () => {
    hireFormActions.clickSaveButton();
});

Then("The status should be Hired", () => {
    applicationStageInfoAssertions.hiredStatus();
});

Then("The available buttons options 'Reject' and 'Offer job' should be visible", () => {
   applicationStageInfoAssertions.secondInterviewPassedOptions(); 
});

afterEach(()=>{
   addVacancies.deleteVacancy(vacancyId);
   addCandidate.deleteCandidate(candidateId); 
   addJobTitle.deleteJobTitle(jobTitleId);
   addEmployee.deleteEmployee(empId);   
});
