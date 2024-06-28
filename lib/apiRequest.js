// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  isAuth=false,
  reset
) {
  try {
    setLoading(true);
     const requestOptions = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     };

     if (isAuth) {
       requestOptions.credentials = "include";
     }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}


export async function makePostImageRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  isAuth = false,
  reset
) {
  try {
    setLoading(true);

    const requestOptions = {
      method: "POST",
      body: data,
    };

    if (isAuth) {
      requestOptions.credentials = "include";
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("The Giving Warehouse Stock is NOT Enough");
      } else {
        toast.error("Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}




export async function makePatchRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  isAuth = false,
  reset,
  redirect,
) {
  try {
    setLoading(true);

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    if (isAuth) {
      requestOptions.credentials = "include";
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);

    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}


export async function makePatchImageRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  isAuth = false,
  redirect
) {
  try {
    setLoading(true);
    const requestOptions = {
      method: "PATCH",
      body: data,
    };

    if (isAuth) {
      requestOptions.credentials = "include";
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
       redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}


export async function makeDeleteRequest(
  setLoading,
  endpoint,
  resourceName,
  isAuth = false,
  redirect,
) {
  try {
    setLoading(true);
    const requestOptions = {
      method: "DELETE",
    };

    if (isAuth) {
      requestOptions.credentials = "include";
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);
    if (response.ok) {
      setLoading(false);
      toast.error(`${resourceName} Deleted Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}


