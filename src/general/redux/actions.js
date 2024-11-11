export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const userType = {STANDARD: "standard", STYLIST: "stylist"};

export const signIn = (
    email,
    userType
) => ({
  type: SIGN_IN,
  payload: {email, userType},
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: false,
});
