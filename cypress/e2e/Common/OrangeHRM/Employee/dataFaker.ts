import { Employeebody } from "@support/EmployeeTypes/types";
import { getPrefix } from "cypress/e2e/Common/DataFaker/dataFakerInitiating";

const minRandomId:number= 2000;
const maxRandomId:number= 2000;
const randomId=Math.floor(Math.random() * (maxRandomId - minRandomId + 1)) + minRandomId;

export const getEmployee= (): Employeebody => {
    return {
        firstName: getPrefix()+"Rashed",
        middleName: "Netham", 
        lastName: "Qudaih", 
        employeeId: randomId.toString()
    }
};