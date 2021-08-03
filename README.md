# digital-wallet

# RegisterUser API description:

As an admin, I want my users to be registered before they start using my services.
As a User, I want the registration process to be simple and short.
Acceptance Criteria:

User inputs should be validated.

All fields(name, email, phone, & pass) are required.

Email & phone should be unique.

password should be at least 8 digit including at least 1 Number, 1 special character, 1 Capital & 1 small letter.

registration information should be stored in user collection(see bellow for mongo db user schema ).

registration time should be stored in db.

API should return validation error, if given email/phone already exists on DB.

User Collection:
-> _id (string - UUID, primary key)
-> name (string)
-> email (string)
-> pass (string)
-> phone (string, as it may contain + and leading 0)
-> createdAt (number, as we need to store timestamp)

Endpoint: /user
Method: POST
Input:
- full name
- email address
- password
- phone

Success Response:
- status 200
- message: Successfully registered.

Failed Response:
- status 400
- message: validation error


# CreateUser API description:

As signup api only store email & password of a user,
we need a new api to put rest of information of a user.

PUT: /users

input:
- name
- phone
- picture

**Story:** 
To create a wallet first user chooses the type of wallet. As an admin, I would verify that If s/he already has that wallet. If the user does not have any wallet previously I let him create one.

**Acceptance Criteria: **
User Input should be validated

Need to choose the type of wallet (from two types in our case,e.g. Bd wallet, US wallet) which user want to create
In DB new wallet information like (wallet ID, wallet balance, wallet currency ) will be added

API should return an error message if the entered type wallet already exists on the DB for that particular user.

# CreateWallet API

Endpoint: /wallet

Method: POST

Input:
- Currency (USD/BDT)

Success Response:
- status 200
- message: Successfully create the wallet.
-data
    - wallet object

Timeout Response:
- status 408
- message: Server is taking too long to make payment

Server Error:
- status 500
- message: Server cannot process the request for an unknown reason

**Schema**:
- _id
- wallet_number
- currency
- balance
- status

# GetWallet API description

**Story** 
#As an admin, I want to provide wallet details.

#As an user, I want to get my wallet details without providing much information.


**Endpoint**: /wallets
**Method**: GET
**Input**:

**Output**
-Wallet ID
-Wallet balance
-Wallet Currency in USD or BDT 

**Success Response**:
- status 200
- message:  Wallet Description


**Server Error:**
- status 500
- message: Server cannot process the request for an unknown reason


**Story:** 
To create a wallet first user chooses the type of wallet. As an admin, I would verify that If s/he already has that wallet. If the user does not have any wallet previously I let him create one.

**Acceptance Criteria: **
User Input should be validated

Need to choose the type of wallet (from two types in our case,e.g. Bd wallet, US wallet) which user want to create
In DB new wallet information like (wallet ID, wallet balance, wallet currency ) will be added

API should return an error message if the entered type wallet already exists on the DB for that particular user.

# 

Endpoint: /wallet

Method: POST

Input:
- Currency (USD/BDT)

Success Response:
- status 200
- message: Successfully create the wallet.
-data
    - wallet object

Timeout Response:
- status 408
- message: Server is taking too long to make payment

Server Error:
- status 500
- message: Server cannot process the request for an unknown reason

**Schema**:
- _id
- wallet_number
- currency
- balance
- status
