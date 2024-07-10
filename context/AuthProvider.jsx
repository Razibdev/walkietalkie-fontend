"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Simulate checking if user is authenticated
  const checkAuth = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/v1/users", {
        credentials: "include",
      });

      const content = await response.json();
      if (!content.data) {
        setUser(null);
        if (pathname !== '/'){
            router.push("/login");
        }
      }else{
         if (pathname == "/login") {
           router.push("/dashboard");
         }
      }
      setUser(content.data);
      

    } catch (e) {
      setUser(null);
      // if (pathname !== "/") {
      //   router.push("/login");
      // }
    }
  };

  useEffect(() => {
    if(localStorage.getItem('isAuth')){
        if(pathname == '/login'){
            router.push("/dashboard");
        }
    }else{
         if (pathname != "/") {
           router.push("/login");
         }
    }
    checkAuth();
  }, []);

  // Method to handle user login
  const login = (userData) => {
    // Your login logic here
    setUser(userData);
    router.push("/"); // Redirect to home page after login
  };

  // Method to handle user logout
  const logout = async() => {
    // Your logout logic here
    setUser(null);
     const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/v1/users/logout", {
       credentials: "include",
     });
     
     removeData();
     router.refresh();
    router.push("/login"); // Redirect to login page after logout
  };

  const removeData = () =>{
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("gender");
    localStorage.removeItem("role");
    localStorage.removeItem("isAuth");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
