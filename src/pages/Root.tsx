import { Header, ListTable, SideNav, SubHeader } from "../components";

const Content = () => {
  return (
    <div className="container mt-5">
      <SubHeader withButton />
      <ListTable />
    </div>
  );
};

const Root = () => {
  return (
    <div className="d-flex flex-row">
      <SideNav />
      <div className="d-flex flex-column w-100 vh-100">
        <Header />
        {/* OUTLET */}
        <Content />
      </div>
    </div>
  );
};

export default Root;
