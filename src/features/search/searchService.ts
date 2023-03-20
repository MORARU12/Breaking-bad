import axiosInstance from "../../helpers/axios";

const search = async (url: string | void) => {
  try {
    const response = await axiosInstance(`characters?name=${url}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const searchService = {
  search,
};

export default searchService;
