import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [response, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${response.body} ${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
