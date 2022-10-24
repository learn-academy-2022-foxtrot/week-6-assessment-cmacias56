# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:  You can migrate and add a new column or row to a database. You would call it cohort_id and it would be part of the student model, and after you do db:migrate it will show up on the schemea

Researched answer: Theres a couple of answers to this problem. Theres a command called db rollback that can go back on a recent migration. Almost like command-Z. after putting that command in, you should be able to go ahead and run the process over again to insert the correct command. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, edit, update, destroy. In order to utilize any of those , you must identify which instance you wish to conduct any of these actions. Therefore you must add params.

Researched answer: The RESTful routes that must be passed params are GET, PUT, and DELETE. POST is the only route that doesn't need params to be passed as we are creating an entirely new object. (Going to look further into this due to I should've known this no problem )

3. Name three rails generator commands. What is created by each?
-alot to do so sorry keeping this a little short. im exhausted.

Your answer: rails g model "name" creates a model, rails g controller "name" creates controller, rails g resource...makes life easier

Researched answer: rails g ModelName column1:dataType column2:dataType. if additional columns are needed.This command will generate a Rails model for the rails app with its coorelated columns to be apart of the table.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - def index/ @students = students.all - this will display all that is within students

action: "POST" location: /students - def create/ @student=Student.create - this will create 

action: "GET" location: /students/new - def new/ @student =Student.new(params[:id])- this will create a new student

action: "GET" location: /students/2 - def show/ @student =Student.find(params[:id]) - this will show the info of student 2 

action: "GET" location: /students/2/edit - def edit/ @student =Student.find - this will "edit" which is update the specified student

action: "PATCH" location: /students/2 - def update/ @student =Student.dind(params[:id])/ @student.update(strong_params)- this will update the specified student

action: "DELETE" location: /students/2- def destroy/@student = Student.find(params[:id]).destroy - this will delete tge specified student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1) As a user, I can login or create a new account.
2) As a user, I can view all to-do-list(s).
3) As a user, I can create a new to-do-list.
4) As a user, I can edit an existing to-do-list.
5) As a user, I can click on a specific to-do-list.
6) As a user, I can check of tasks from a to-do-list.
7) As a user, I can share my to-do-list.
8) As a user, I can delete my to-do-list.
9) As a user, I can make share my to-do-list with a link.
10) As a user, I cannot access other people's to-do-list without a share link.