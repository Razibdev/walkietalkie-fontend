// utils/fetcher.js
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const fetcher = async (url) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    credentials: "include",
  });
  const { data } = await res.json();
  return data;
};

export default fetcher;
