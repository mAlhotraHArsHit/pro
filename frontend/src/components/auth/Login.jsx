import React from "react";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner"
import axios from "axios"
import { Loader2 } from "lucide-react";
import { setLoading } from "@/redux/authSlice";

import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import { setUser } from "../../redux/authSlice";
const Login = () => {
      const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
      });
    const USER_API_END_POINT = "http://localhost:3000/api/v1/users";
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector(store => store.auth);
    
      const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    
     const changeFileHandler = (e) => {
       setInput({ ...input, file: e.target.files?.[0] });
    };
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(input);
        try {
          dispatch(setLoading(true));//handling loading
          //!: -> input se sidha data send kra h kyuki file nhi h isme
          const res = await axios.post(`${USER_API_END_POINT}/login`, input , {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
          if (res.data.success) {
            dispatch(setUser(res.data.user))
            navigate("/");
            toast.success(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
        finally {
          dispatch(setLoading(false));
        }
    };
     
  return (
    <div className="" >
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="hanish@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="*****"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-6 p-3 bg-blue-500 text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
             Kirpya Rukein
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-6 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Login
            </Button>
          )}
          {/* <Button type="submit" className="my-4 w-full">
            Login
          </Button> */}
          <span className="text-sm">
            Don't have an account?
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
