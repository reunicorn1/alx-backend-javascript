import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const response = await uploadPhoto();
    const user = await createUser();
    console.log(`${response.body} ${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
