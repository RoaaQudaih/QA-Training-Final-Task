import { Vacancies } from "@support/RecruitmentTypes/types";
import { Candidate } from "@support/RecruitmentTypes/types";
import { ScheduleInterviewForm } from "@support/RecruitmentTypes/types";
import { getPrefix } from "cypress/e2e/Common/DataFaker/dataFakerInitiating";
import moment from "moment-timezone";

const currentDate = moment().format('YYYY-MM-DD');

export const getVacancies= (): Vacancies => {
    return {
        description:"",
        employeeId:null,
        isPublished:true,
        jobTitleId:null,
        name:getPrefix()+"QA",
        numOfPositions:null,
        status:true
    }
};

export const getCandidate= (): Candidate => {
    return {
        comment:"",
        consentToKeepData:true,
        contactNumber:null,
        dateOfApplication:"",
        email:"rama@gmail.com",
        firstName:getPrefix()+"Rama",
        keywords:null,
        lastName:"Qudaih",
        middleName:"Netham",
        vacancyId:null
    }
};

export const getSecduleInterviewForm= (): ScheduleInterviewForm  => {
    return {
        interviewDate:currentDate,
        interviewName:getPrefix()+"QA Interview",
        interviewTime:null,
        interviewerEmpNumbers:null,
        note:null
    }
};