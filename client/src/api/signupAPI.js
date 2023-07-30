import axios from 'axios';

export async function signupAPI(name, email, password, nickname, callback) {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('nickname', nickname);

    const response = await axios.post('http://localhost:8080/signup', formData);
    callback(null, response.data);
  } catch (error) {
    callback(error, null);
  }
}