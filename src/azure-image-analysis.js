import axios from 'axios';

const subscriptionKey = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY;
const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;

export async function analyzeImage(imageUrl, features) {
  const url = `${endpoint}/vision/v4.0/analyze`;

  try {
    const params = {
      visualFeatures: 'Categories,Description,Color',
      details: '',
      language: 'en',
    };

    const headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    };

    const body = {
      url: imageUrl,
    };

    const response = await axios.post(url, body, { params, headers });

    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}