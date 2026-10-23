import axiosinstance from "./axiosInstance";

const axiosinstance=async(httpMethod,url,reqBody)=>{
    try {
        const response=await axiosinstance({
        method:httpMethod,
        url,
        data:reqBody
    })
    } catch (error) {
        throw error
    }
}

export default axiosService
