export const required = (value, errorMessage = "This field is requred.") => {
  if (value.trim()) return true;
  return errorMessage;
};
