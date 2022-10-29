import axios from "axios";

export const axiosIns = axios.create({
  baseURL: "http://localhost:3001",
});

export async function EmailLoginData(EmailData) {
  const { data } = await axiosIns.post("/signin", EmailData);
  return data;
}
