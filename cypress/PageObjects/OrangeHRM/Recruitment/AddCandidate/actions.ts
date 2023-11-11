import { setTimeout } from "timers";

class AddCandidatesActions {
  enterFullName(firstName:string ,middleName:string ,lastName:string ){
    cy.get('[name="firstName"]').type(firstName);
    cy.get('[name="middleName"]').type(middleName);
    cy.get('[name="lastName"]').type(lastName);
    return this
  };

  enterVacancy(vacancyName:string){
    cy.contains('div.oxd-grid-item','Vacancy').children().children().find('i.oxd-select-text--arrow').parent().click({force:true});
    cy.contains('[role="listbox"]', vacancyName).click();
    return this
  };

  enterEmail(email:string){
    cy.contains('div.oxd-input-group','Email').find('input').type(email);
    return this
  };

  clickSaveButton(){
    cy.get('[type="submit"]').click();
  }; 
}export default AddCandidatesActions