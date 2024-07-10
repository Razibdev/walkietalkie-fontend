export async function getData(endpoint, isAuth=false) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const requestOptions = {
      cache: "no-store",
    };

    if (isAuth) {
      requestOptions.credentials = "include";
    }

    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataPaginate(endpoint, page, limit, isAuth=false) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

     const requestOptions = {
       cache: "no-store",
     };

     if (isAuth) {
       requestOptions.credentials = "include";
     }

    const response = await fetch(
      `${baseUrl}/${endpoint}?page=${page}&limit=${limit}`,
      requestOptions
    );
    const data = await response?.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
