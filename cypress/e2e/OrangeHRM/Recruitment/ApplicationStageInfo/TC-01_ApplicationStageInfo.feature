Feature: Track the status of candidates throughout the recruitment application

    Scenario: #1- Verify the 'application initiated' status when candidate addition and the required buttons appearance 
        When Admin clicks 'Add' button on the viewCandidates page
        And Fills the add candidate form
        And Clicks 'save' button on the add candidate form 
        Then Status should be application initiated
        And The available buttons options 'Reject' and 'Shortlist' should be visible

    Scenario: #2- Verify 'reject' button functionality on the application initiated candidate
        Given Admin has added candidate to the system
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #3- Verify rejected status appearance for the application initiated candidate 
        Given Admin has added candidate to the system   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #4- Verify 'shortlist' button functionality on the application initiated candidate
        Given Admin has added candidate to the system
        When Admin clicks 'Shortlist' button on the application stage grid
        Then Navigate to the shortlist candidate form 

    Scenario: #5- Verify shortlisted status and the required buttons appearance for the application initiated candidate  
        Given Admin has added candidate to the system   
        When Admin clicks 'Shortlist' button on the application stage grid
        And Clicks 'save' button on the shortlist candidate form
        Then The status should be Shortlisted
        And The available buttons options 'Reject' and 'Schedule Interview' should be visible

    Scenario: #6- Verify 'reject' button functionality on the shortlisted candidate
        Given The system has "Shortlisted" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #7- Verify rejected status appearance for the shortlisted candidate 
        Given The system has "Shortlisted" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #8- Verify 'schedule interview' button functionality for the first interview 
        Given The system has "Shortlisted" candidate
        When Admin clicks 'Schedule Interview' button on the application stage grid
        Then Navigate to the schedule interview form

    Scenario: #9- Verify schedule interview status and the required buttons appearance for the first interview
        Given The system has "Shortlisted" candidate
        When Admin clicks 'Schedule Interview' button on the application stage grid
        And Fills the schedule Interview form
        And Clicks 'save' button on the schedule Interview form 
        Then The status should be Interview Scheduled
        And The available buttons options 'Reject', 'Mark Interview Failed' and 'Mark Interview Passed' should be visible

    Scenario: #10- Verify 'reject' button functionality on Scheduled first Interview candidate 
        Given The system has "Schedule First Interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #11- Verify rejected status appearance on scheduled first interview candidate 
        Given The system has "Schedule First Interview" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #12- Verify 'Mark Interview Failed' button functionality on scheduled first interview candidate
        Given The system has "Schedule First Interview" candidate
        When Admin clicks 'Mark Interview Failed' button on the application stage grid
        Then Navigate to the Mark Interview Failed form

    Scenario: #13- Verify interview failed status and the required buttons appearance for scheduled first interview candidate
        Given The system has "Schedule First Interview" candidate
        When Admin clicks 'Mark Interview Failed' button on the application stage grid
        And Clicks 'save' button on Mark Interview Failed form
        Then The status should be Interview Failed
        And The available button option 'Reject' should be visible
    
    Scenario: #14- Verify reject button functionality on first Interview Failed candidate 
        Given The system has "First Interview Failed" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #15- Verify rejected status appearance on first Interview Failed candidate 
        Given The system has "First Interview Failed" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #16- Verify Mark Interview Passed button functionality on scheduled first interview candidate
        Given The system has "Schedule First Interview" candidate
        When Admin clicks 'Mark Interview Passed' button on the application stage grid
        Then Navigate to the Mark Interview Passed form

    Scenario: #17- Verify Interview Passed status and the required buttons appearance for scheduled first interview candidate
        Given The system has "Schedule First Interview" candidate
        When Admin clicks 'Mark Interview Passed' button on the application stage grid
        And Clicks 'save' button on interview passed form 
        Then The status should be Interview Passed
        And The available buttons options 'Reject', 'Schedule Interview' and 'Offer job' should be visible
    
    Scenario: #18- Verify reject button functionality on first Interview Passed candidate 
        Given The system has "First Interview Passed" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #19- Verify rejected status appearance for first Interview Passed candidate 
        Given The system has "First Interview Passed" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected
    
    Scenario: #20- Verify Offer job button functionality after the first interview
        Given The system has "First Interview Passed" candidate
        When Admin clicks 'Offer Job' button on the application stage grid
        Then Navigated to the Offer Job form 
     
    Scenario: #21- Verify Offer job status and the required buttons appearance after the first interview
        Given The system has "First Interview Passed" candidate
        When Admin clicks 'Offer Job' button on the application stage grid
        And Clicks 'save' button on the Offer Job form 
        Then The status should be Job Offered
        And The available buttons options 'Reject', 'Offer Declined' and 'Hire' should be visible

    Scenario: #22- Verify reject button functionality on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #23- Verify rejected status appearance on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate  
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #24- Verify Offer Declined button functionality on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate
        When Admin clicks 'offer declined' button on the application stage grid
        Then Navigate to the Decline Offer candidate form

    Scenario: #25- Verify Offer Declined status appearance on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate  
        When Admin clicks 'offer declined' button on the application stage grid
        And Clicks 'save' button on the Decline Offer candidate form
        Then The status should be Offer Declined
        And The available button option 'Reject' should be visible

    Scenario: #26- Verify reject button functionality on Offer declined candidate after the first interview 
        Given The system has "Offer Declined after first interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #27- Verify rejected status appearance on Offered Job candidate after the first interview 
        Given The system has "Offer Declined after first interview" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #28- Verify Hire button functionality on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate
        When Admin clicks 'Hire' button on the application stage grid
        Then Navigate to the hire candidate form

    Scenario: #29- Verify Hired status appearance on Offered Job candidate after the first interview 
        Given The system has "Offered Job after first interview" candidate   
        When Admin clicks 'Hire' button on the application stage grid
        And Clicks 'save' button on the Hire candidate form
        Then The status should be Hired        

    Scenario: #30- Verify schedule interview button functionality for the second interview
        Given The system has "First Interview Passed" candidate
        When Admin clicks 'Schedule Interview' button on the application stage grid
        Then Navigate to the schedule interview form

    Scenario: #31- Verify schedule interview status and the required buttons appearance for the second interview
        Given The system has "First Interview Passed" candidate
        When Admin clicks 'Schedule Interview' button on the application stage grid
        And Fills the schedule Interview form
        And Clicks 'save' button on the schedule Interview form 
        Then The status should be Interview Scheduled
        And The available buttons options 'Reject', 'Mark Interview Failed' and 'Mark Interview Passed' should be visible    
    
    Scenario: #32- Verify reject button functionality on schedule second interview candidate 
        Given The system has "Schedule Second Interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #33- Verify rejected status appearance on schedule second interview candidate 
        Given The system has "Schedule Second Interview" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected
    
    Scenario: #34- Verify Mark Interview Failed button functionality for the second interview
        Given The system has "Schedule Second Interview" candidate
        When Admin clicks 'Mark Interview Failed' button on the application stage grid
        Then Navigate to the Mark Interview Failed form

    Scenario: #35- Verify interview failed status and the required buttons appearance for the second interview
        Given The system has "Schedule Second Interview" candidate
        When Admin clicks 'Mark Interview Failed' button on the application stage grid
        And Clicks 'save' button on Mark Interview Failed form
        Then The status should be Interview Failed
        And The available button option 'Reject' should be visible

    Scenario: #36- Verify reject button functionality on the second Interview Failed candidate 
        Given The system has "Second Interview Failed" candidate 
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #37- Verify rejected status appearance on the second Interview Failed candidate 
        Given The system has "Second Interview Failed" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #38- Verify Mark Interview Passed button functionality for the second interview
        Given The system has "Schedule Second Interview" candidate
        When Admin clicks 'Mark Interview Passed' button on the application stage grid
        Then Navigate to the Mark Interview Passed form

    Scenario: #39- Verify Interview Passed status and the required buttons appearance for the second interview
        Given The system has "Schedule Second Interview" candidate
        When Admin clicks 'Mark Interview Passed' button on the application stage grid
        And Clicks 'save' button on interview passed form 
        Then The status should be Interview Passed
        And The available buttons options 'Reject' and 'Offer job' should be visible

    Scenario: #40- Verify reject button functionality for the second Interview Passed candidate 
        Given The system has "Second Interview Passed" candidate 
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #41- Verify rejected status appearance on Interview Failed candidate 
        Given The system has "Second Interview Passed" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected
    
    Scenario: #42- Verify Offer job button functionality after the second Passed interview
        Given The system has "Second Interview Passed" candidate
        When Admin clicks 'Offer Job' button on the application stage grid
        Then Navigated to the Offer Job form 
    
    Scenario: #43- Verify Offer job status and the required buttons appearance after the second Passed interview
        Given The system has "Second Interview Passed" candidate
        When Admin clicks 'Offer Job' button on the application stage grid
        And Clicks 'save' button on the Offer Job form 
        Then The status should be Job Offered
        And The available buttons options 'Reject', 'Offer Declined' and 'Hire' should be visible

    Scenario: #44- Verify reject button functionality on Offered Job candidate after the second Passed interview 
        Given The system has "Offered Job after second interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #45- Verify rejected status appearance on Offered Job candidate after the second interview 
        Given The system has "Offered Job after second interview" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #46- Verify Offer Declined button functionality on Offered Job candidate after the second interview 
        Given The system has "Offered Job after second interview" candidate
        When Admin clicks 'offer declined' button on the application stage grid
        Then Navigate to the Decline Offer candidate form

    Scenario: #47- Verify Offer Declined status appearance on Offered Job candidate after the second interview 
        Given The system has "Offered Job after second interview" candidate  
        When Admin clicks 'offer declined' button on the application stage grid
        And Clicks 'save' button on the Decline Offer candidate form
        Then The status should be Offer Declined
        And The available button option 'Reject' should be visible

    Scenario: #48- Verify reject button functionality on Offer declined candidate after the second interview 
        Given The system has "Offer Declined after second interview" candidate
        When Admin clicks 'reject' button on the application stage grid
        Then Navigate to the reject candidate form

    Scenario: #49- Verify rejected status appearance on Offered Job candidate after the second interview 
        Given The system has "Offer Declined after second interview" candidate   
        When Admin clicks 'reject' button on the application stage grid
        And Clicks 'save' button on the reject candidate form
        Then The status should be rejected

    Scenario: #50- Verify Hire button functionality on Offered Job candidate after the second interview 
        Given The system has "Offered Job after second interview" candidate
        When Admin clicks 'Hire' button on the application stage grid
        Then Navigate to the hire candidate form

    Scenario: #51- Verify Hired status appearance on Offered Job candidate after the second interview 
        Given The system has "Offered Job after second interview" candidate   
        When Admin clicks 'Hire' button on the application stage grid
        And Clicks 'save' button on the Hire candidate form
        Then The status should be Hired