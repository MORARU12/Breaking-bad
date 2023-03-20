import axiosInstance from "../../helpers/axios";

const search = async (url: string | void) => {
  try {
    const response = await axiosInstance(`/?name=${url}`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const searchService = {
  search,
};

export default searchService;
