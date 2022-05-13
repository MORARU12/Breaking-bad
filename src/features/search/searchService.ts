import axiosInstance from "../../helpers/axios";

const search = async (url: string | void) => {
  return await axiosInstance
    .get(`characters?name=${url}`)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

const searchService = {
  search,
};

export default searchService;
