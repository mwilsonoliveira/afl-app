import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  apelido: string;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  uf: string;
  cidade: string;
  logo: string;
};

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [tab, setTab] = useState("empresa");

  console.log(watch("apelido"));

  const TabEmpresa = () => {
    return (
      <div className="row">
        <div className="col-6 mb-3">
          <label for="apelido" className="form-label">
            Apelido da empresa*
          </label>
          <input
            type="text"
            className="form-control"
            id="apelido"
            placeholder="Digite o nome da empresa"
            {...register("apelido")}
          />
        </div>
        <div className="col-6 mb-3">
          <label for="nomeFantasia" className="form-label">
            Nome Fantasia*
          </label>
          <input
            type="email"
            className="form-control"
            id="nomeFantasia"
            placeholder="Digite o nome fantasia"
          />
        </div>
        <div className="col-6 mb-3">
          <label for="razaoSocial" className="form-label">
            Razão Social*
          </label>
          <input
            type="email"
            className="form-control"
            id="razaoSocial"
            placeholder="Digite a razão social"
          />
        </div>
        <div className="col-6 mb-3">
          <label for="cnpj" className="form-label">
            CNPJ*
          </label>
          <input
            type="email"
            className="form-control"
            id="cnpj"
            placeholder="00.000.000/0000-00"
          />
        </div>
        <div className="col-6 mb-3">
          <label for="uf" className="form-label">
            UF*
          </label>
          <input
            type="email"
            className="form-control"
            id="uf"
            placeholder="Digite o nome da UF"
          />
        </div>
        <div className="col-6 mb-3">
          <label for="cidade" className="form-label">
            Cidade*
          </label>
          <input
            type="email"
            className="form-control"
            id="cidade"
            placeholder="Digite o nome da cidade"
          />
        </div>
        <div>
          <div
            className="d-flex alert alert-warning justify-content-center"
            role="alert"
          >
            <b>
              Campos marcados com * são obrigatórios, preencha todos os campos
              para que o botão "CONTINUAR" abaixo seja liberado
            </b>
          </div>
        </div>
      </div>
    );
  };

  const TabContrato = () => {
    return (
      <>
        <div className="row">
          <div className="col-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Data de vigência do contrato*
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="dd/mm/aaaa"
            />
          </div>
          <div className="col-6 mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Data de assinatura*
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="dd/mm/aaaa"
            />
          </div>
          <div className="col mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Taxa*
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Digite o valor"
            />
          </div>
          <h6 className="mb-4">Serviços contratados*</h6>
          <h6>Departamento A</h6>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Compra
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Venda
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                Troca
              </label>
            </div>
          </div>
          <h6>Departamento B</h6>
        </div>
      </>
    );
  };

  const AttachImage = () => {
    return (
      <div className="mb-5 bg-body shadow p-4 rounded-bottom card">
        <h5>Logo da Empresa</h5>
        <hr className="border-bottom border-0 border-dark"></hr>
        <div className="row">
          <div>
            <input className="btn" id="formFileLg" type="file" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <ul className="nav nav-tabs">
          <li
            className="nav-item text-center"
            style={{ width: "10rem" }}
            onClick={() => setTab("empresa")}
          >
            <a
              className={`nav-link ${tab === "empresa" && "active"}`}
              aria-current="page"
              href="#"
            >
              <b>Empresa</b>
            </a>
          </li>
          <li
            className="nav-item text-center"
            style={{ width: "10rem" }}
            onClick={() => setTab("contrato")}
          >
            <a
              className={`nav-link ${tab === "contrato" && "active"}`}
              aria-current="page"
              href="#"
            >
              <b>Contrato</b>
            </a>
          </li>
        </ul>
        <div className="bg-body shadow p-4 rounded-bottom card">
          <h5>{tab === "empresa" ? "Dados Cadastrais" : "Dados Gerais"}</h5>
          <hr className="border-bottom border-0 border-dark"></hr>
          {tab === "empresa" ? <TabEmpresa /> : <TabContrato />}
        </div>
      </form>
      {tab === "empresa" && <AttachImage />}
      <div className="d-flex w-100 justify-content-end mb-5">
        <div className="d-flex gap-3">
          <button className="btn btn-outline-secondary px-3 py-2">
            Cancelar
          </button>
          <button
            className="btn btn-primary text-white px-3 py-2"
            type="submit"
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
