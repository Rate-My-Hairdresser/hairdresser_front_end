export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const userType = {STANDARD: "standard", STYLIST: "stylist", NOTFOUND: "notfound"};

export const signIn = (
    hash_id,
    hash_pw,
    userType
) => ({
  type: SIGN_IN,
  payload: {hash_id, hash_pw, userType},
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: false,
});
