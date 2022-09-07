export const setToken = async ({ token }: { token: string }) => {
  localStorage.setItem('authToken', token);
};
