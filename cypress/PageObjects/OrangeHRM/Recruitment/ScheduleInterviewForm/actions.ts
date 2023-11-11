import moment from "moment-timezone";
const currentDate = moment().format('YYYY-MM-DD');
class ScheduleInterviewActions {
    enterInterviewTitle(title:string){
      cy.contains('div.oxd-grid-item','Interview Title').find('input').type(title);
      return this
    };

    enterInterviewer(letter:string,interviewer:string){     
      cy.contains('div.oxd-grid-item','Interviewer').find('input').type(letter);
      cy.get('.oxd-autocomplete-dropdown').contains(interviewer).click();
      return this
      };
      
      enterDate(){
        cy.contains('div.oxd-grid-item','Date').find('input').type(currentDate);
        return this
      };
    
    clickSaveButton(){
      cy.contains('button','Save').click();
    };
  }export default ScheduleInterviewActions