# Rate My Hairdresser

This project was developed using React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Team Members

Nathan Campbell

Kya Broderick

Jonathan Choi

Jahnissi Nwakanma

Althea Anne Louise

## How to Run the Project

1. Clone this repository via ```git clone https://github.com/Rate-My-Hairdresser/hairdresser_front_end.git```
2. Switch to cloned git directory via ```cd ./hairdresser_front_end```
3. Build the app using preferred package manager ```npm build``` or ```yarn build``` etc.
4. Start the app: ```npm start``` / ```yarn start``` etc.
5. Open your web browser and go to ```localhost:3000```

## Introduction and Implemented Functions

### Searching for Stylist

You can search hairdresser using interface on home screen. Search result will update in real time. User can also apply additional filter to narrow the result.

All searched stylist will be marked on the map interface so that user can intuitively know their location.

### Logging In and Registration

User and Stylist can login via using login button at top right. For testing purpose, following two accounts are available.

email: ```user@test.com``` password: ```password```
email: ```stylist@test.com``` password: ```password```

Both account registration and sign in page will detect incorrect input and warn the user.

Once logged in, top right location where login button was used to be placed will be changed to user avatar icon with user's initial.

#### Normal User account

When logged in as normal user, clicking avatar icon will show options to access favorite page, settings page, and logout.
Favorite page is implemented, in which user can add or remove their favorite while they are logged in. Interface will also reflect the change.

#### Stylist User account

When logged in as stylist user, clicking avatar icon will show options to access their profile page, settings page, and logout.
Profile page is implemented. When profile page is accessed this way, profile page will contain edit button (Pen-like Icon) which will allow user to edit aspect of their profile page.
Salon Name, Salon Location, Contact Info, Bio, and Links can be edited. User can cancel during their editing. If confirmed, change will be applied to the page based on what user typed in.
