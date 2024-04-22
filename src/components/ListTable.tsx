import { useEffect, useState } from "react";
import { deleteCompany, getCompanies } from "../services/companies";
import { TbTrash } from "react-icons/tb";
import { PiNotePencilBold } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

type Company = {
  company_id: string;
  city: string;
  cnpj: string;
  contracts: string[];
  legal_name: string;
  logo: string;
  nickname: string;
  trade_name: string;
  uf: string;
};

const ListTable = () => {
  const [companiesState, setCompaniesState] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const fetchedCompanies = await getCompanies();
      await setCompaniesState(fetchedCompanies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCompany = async (company: any) => {
    const { company_id, nickname } = company;
    try {
      const confirmDelete = window.confirm(
        `Tem certeza que deseja excluir a empresa ${nickname}`
      );

      if (!confirmDelete) {
        return; // Se o usuário cancelar, saia da função
      }

      setLoading(true);
      await deleteCompany(company_id);
    } catch (error) {
      console.error(error);
    } finally {
      fetchCompanies();
      setLoading(false);
    }
  };

  const TableData = (companies: any) => {
    if (companiesState.length === 0) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20rem" }}
        >
          Não há empresa cadastrada
        </div>
      );
    }

    return companies?.companies?.map((company: Company, index: number) => (
      <tr key={index}>
        <th scope="row"></th>
        <td>{company.nickname}</td>
        <td>{company.cnpj}</td>
        <td>Ativa</td>
        <td>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn">
              <MdOutlineRemoveRedEye />
            </button>
            <button className="btn">
              <PiNotePencilBold />
            </button>
            <button className="btn" onClick={() => removeCompany(company)}>
              <TbTrash />
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="mt-3">
        <div className="input-group input-group-lg">
          <input
            className="form-control border"
            placeholder="Buscar por nome ou CNPJ"
            type="search"
          />
        </div>
      </div>
      <div className="table-responsive card rounded-3 mt-4">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "20rem" }}
          >
            carregando...
          </div>
        ) : (
          <table className="table caption-top table-hover">
            <thead className="text-center">
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <TableData companies={companiesState} />
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ListTable;
