import axios from "axios";

const url = "http://localhost:5000/pets"


export const deleteData = async (id) => {
    const response = await axios.delete(`${url}/${id}`)
    return response.data
}