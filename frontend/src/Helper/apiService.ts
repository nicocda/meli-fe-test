import axios from "axios";
import ResponseData from "../model/ResponseData";

export const getAll = (searchText: string) => axios.get<ResponseData>(`api/items?search=${searchText}`)