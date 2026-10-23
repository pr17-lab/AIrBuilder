import axiosService from "../api/axiosService";

// save resume API: called by Resumeinput component when finish button clicks

const saveResumeApi=async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}