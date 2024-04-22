import axios from "axios";

const apiUrl = "http://localhost:3000";
const token = localStorage.getItem("token");

export const getCompanies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/companies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

export const deleteCompany = async (companyId: string) => {
  try {
    const response = await axios.post(
      `${apiUrl}/companies/delete/${companyId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting companies:", error);
    throw Error("Erro ao tentar deletar empresa!");
  }
};
