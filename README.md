# digital-wallet

You can test the code with the postman collection below: 

https://www.getpostman.com/collections/1be195edc8b0849ca040

# SignUp API
Signup api needs to be modified so that, user can signup with only email & password. no other information is required.

**Input**:
- email
- password

**Output**:
- status : 200
- message: "Registration successful"


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

