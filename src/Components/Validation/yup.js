import * as Yup from "yup";
export const signupSchema = Yup.object({
    name: Yup.string().min(3).max(27).required("please enter your name"),
    dob:Yup.DateSchema.required("please enter your DOB"),
    phone:Yup.number.min(10).max(30).required("please enter yout phone number")

})