class ViewCandidatesActions{    
    clickAddButton(){
        cy.contains('button','Add').click({force:true});
    };
}export default ViewCandidatesActions