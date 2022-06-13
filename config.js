// The process object is within the global object in Node and I use it to access the relevant API url through the object properties.
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default API_URL;
