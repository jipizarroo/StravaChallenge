// Strava Credentials
// const clientID = "1234455"
const clientID = "118916"
const clientSecret = "43561d0d90f354e5c95573d32bfacabb78c7367c"

// refresh token and call address
const refreshToken = "8747e181438bd1bc5e0fabe7c6dd2902a8c8f671"
export const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

export const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`
