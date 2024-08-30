const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error(
    "REACT_APP_API_URL is not defined in your environment variables"
  );
}

export const apiConfig = {
  apiUrl,
};
