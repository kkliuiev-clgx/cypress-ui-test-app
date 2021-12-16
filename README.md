## TC#1

Summary:

### User should be able to Sign Up by filling all mandatory fields and click [SignUp] button


Steps:

1. Go to http://localhost:3000/signin

2. Click 'Don't have an account? Sign Up' link

3. Fill all mandatory fields

4. Click on [Sign Up] button

Expected result:

1. Sign Up form closes - user is on Log In page - account successfully created.

------------------------------------------------------------------------------------------

## TC#2

Summary:

### User should be able to Log in


Steps:

1. Go to http://localhost:3000/login

2. Fill 'Username' and 'Password' fields

3. Click on [Sign In] button

Expected result:

1. Sign in form closes - user is on homepage - user successfully login.

------------------------------------------------------------------------------------------

## TC#3

Summary:

### User should be able to Log out


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on 'Log out' button in the sidebar

Expected result:

1. Homepage closes - user is on Sign in page - user successfully logout.

------------------------------------------------------------------------------------------

## TC#4

Summary:

### When clicking the burger menu in the left side of header - sidebar menu is shown


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on burger menu in the left side of header

Expected result:

1. Side bar menu is shown.

------------------------------------------------------------------------------------------

## TC#5

Summary:

### All received notifications is shown when click 'Notifications' link at sidebar


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on 'Notification' link in the sidebar

Expected result:

1. After clicking the link - 'Notification' page opens

------------------------------------------------------------------------------------------

## TC#6

Summary:

### All received notifications is shown when click 'bell' icon in right side of header


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on 'bell' icon in right side of header

Expected result:

1. After clicking the icon - 'Notification' page opens

------------------------------------------------------------------------------------------

## TC#7

Summary:

### User should be able to create Bank Account by clicking 'Bank Accounts' link and click [CREATE] button


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on 'Bank Accounts' link in the sidebar

2. User is on 'Bank Accounts' page - Click on [Create] button

3. 'Create Bank Account' form opens - Fill all mandatory fields

4. Click on [Save] button

Expected result:

1. After clicking on [Save] button - Form page closes:
new bank account name in the list is shown - new bank account is created.

------------------------------------------------------------------------------------------

## TC#8

Summary:

### User should be able to delete Bank Account by clicking 'Bank Accounts' link and click [DELETE] button


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has bank account created

3. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on 'Bank Accounts' link in the sidebar

2. User is on 'Bank Accounts' page - choose any bank account name

3. Click on [DELETE] button

Expected result:

1. After clicking on [DELETE] button - bank account name has form:
"'bank account name'(Deleted)" - bank account is successfully deleted

------------------------------------------------------------------------------------------

## TC#9

Summary:

### User not be able to create bigger payment as account balance is represented.


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance '$0.00'

3. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '100'

4. In field 'Add note' type any text

3. Click on [PAY] button

Expected result:

1. After clicking on [PAY] button - Page shows warning like: 
"user unable to make transaction - not enough money"

------------------------------------------------------------------------------------------

## TC#10

Summary:

### User not be able to create bigger payment request as account balance is represented.


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance '$0.00'

3. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '100'

4. In field 'Add note' type any text

3. Click on [REQUEST] button

Expected result:

1. After clicking on [REQUEST] button - Page shows warning like: 
"user unable to make transaction - not enough money"

------------------------------------------------------------------------------------------

## TC#11

Summary:

### User should be able to create payment transaction by filling all mandatory fields and click [PAY] button


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance with '$100.00'

3. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '50'

4. In field 'Add note' type any text

3. Click on [PAY] button

Expected result:

1. After clicking on [PAY] button - Page shows message: 
"Transaction Submitted!" - payment is successful.

------------------------------------------------------------------------------------------

## TC#12

Summary:

### User should be able to create request transaction by filling all mandatory fields and click [REQUEST] button


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance with '$100.00'

3. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '50'

4. In field 'Add note' type any text

3. Click on [REQUEST] button

Expected result:

1. After clicking on [REQUEST] button - Page shows message: 
"Transaction Submitted!" - request is successful.

------------------------------------------------------------------------------------------

## TC#13

Summary:

### User should be able to edit user settings by clicking 'My Account' link at sidebar


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Test data:

first name: John

last name: Snow

email: john_snow@gmail.com

phone: 12345678910


Steps:

1. On homepage - click on 'My Account' link in sidebar

2. User is on 'User settings' page - 'User Settings' form is presented

3. Fill all mandatory fields with test data

4. Click on [SAVE] button

Expected result:

1. After clicking on [SAVE] button - Page shows message like: 
"User settings updated successfully"

------------------------------------------------------------------------------------------

## TC#14

Summary:

### User's payments should be shown by clicking 'MINE' link in header


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance '$100.00'

3. Go to http://localhost:3000 (homepage)

4. On homepage click on [New] button in header

5. Choose any other user's name represented in list - click

6. 'Transaction page' opens - In field 'Account' type '50'

7. In field 'Add note' type any text

8. Click on [PAY] button


Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '50'

4. In field 'Add note' type any text

3. Click on [PAY] button

4. Click on 'MINE' link in header

Expected result:

1. After clicking on 'MINE' link - List of payments and requests is opened: 
User payment is represented in the list with value '-$50'

------------------------------------------------------------------------------------------

## TC#15

Summary:

### User's requests should be shown by clicking 'MINE' link in header


Preconditions:

1. Make sure that user is logged in

2. Make sure that user has account balance '$100.00'

3. Go to http://localhost:3000 (homepage)

4. On homepage click on [New] button in header

5. Choose any other user's name represented in list - click

6. 'Transaction page' opens - In field 'Account' type '50'

7. In field 'Add note' type any text

8. Click on [REQUEST] button


Steps:

1. On homepage click on [New] button in header

2. Choose any other user's name represented in list - click

3. 'Transaction page' opens - In field 'Account' type '50'

4. In field 'Add note' type any text

3. Click on [REQUEST] button

4. Click on 'MINE' link in header

Expected result:

1. After clicking on 'MINE' link - List of payments and requests is opened: 
User request is represented in the list with value '-$50'

------------------------------------------------------------------------------------------

## TC#16

Summary:

### User should be able to create comment by clicking on any other user at homepage - filling the comment field and click [Enter] key


Preconditions:

1. Make sure that user is logged in

2. Go to http://localhost:3000 (homepage)

Steps:

1. On homepage choose any other user's name in the list - click

2. 'Transaction detail' page opens - type 'Hello' text in 'Write a comment...' field

3. Click [Enter] key

Expected result:

1. After clicking the [Enter] key: 'Hello' is presented in block 'Comments' below 'Write a comment...' field