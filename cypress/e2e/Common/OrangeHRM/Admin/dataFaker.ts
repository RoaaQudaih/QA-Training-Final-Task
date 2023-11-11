import { JobTitle } from "@support/AdminTypes/types";
import { getPrefix } from "cypress/e2e/Common/DataFaker/dataFakerInitiating";

export const getJobTitle = (): JobTitle => {
    return {
        title: getPrefix()+"Automation QA",
        description: "",
        specification: null,
        note: ""
    }
};