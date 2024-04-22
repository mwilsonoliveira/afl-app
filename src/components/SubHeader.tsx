type SubHeaderType = {
  withButton?: boolean;
};

const SubHeader = ({ withButton }: SubHeaderType) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h4>Empresas</h4>
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Empresas</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Listagem
            </li>
          </ol>
        </nav>
      </div>
      {withButton && (
        <div className="d-flex align-items-center">
          <button className="btn btn-primary text-white px-3 py-2">
            <b>Novo Cadastro</b>
          </button>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
