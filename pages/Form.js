import React from "react";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import prisma from "../lib/prisma";

// Fetch all companies
export async function getStaticProps() {
  const companies = await prisma.company.findMany({
    where: {
      status: "pending",
    },
    include: {
      documents: true,
    },
  });

  return {
    props: { companies },
  };
}

export default function Form(props) {
  const [companies, setCompanies] = React.useState(props.companies);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleNext = () => {
    if (companies.length > selectedIndex + 1)
      setSelectedIndex((prevValue) => prevValue + 1);
  };
  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedIndex((prevValue) => prevValue - 1);
  };
  const selectedCompany = companies[selectedIndex];

  const updateCompany = async (company, isApproved) => {
    fetch("/api/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: company.id,
        status: isApproved ? "approved" : "rejected",
      }),
    });
    setCompanies((prevCompanies) =>
      prevCompanies.filter((c) => c.id !== company.id)
    );
  };

  const handleRejected = () => {
    updateCompany(selectedCompany, false);
  };
  const handleApproved = () => {
    updateCompany(selectedCompany, true);
  };

  return (
    <Layout>
      <div className="flex absolute m-8">
        {" "}
        <strong className="text-formtxt2">Administración </strong>
        <span> / Aprobación de Empresas</span>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-96 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="relative bg-white w-full shadow rounded p-8 sm:p-12 -mt-72 ">
            <div className="absolute right-0">
              <div className="flex h-10">
                <button
                  type="submit"
                  className="
                  shadow-xl
                  flex
                  mt-2
                  items-center
                  justify-items-end
                  text-black text-sm
                  sm:text-base
                  font-bold
                  rounded-2xl
                  py-2
                  w-32
                  transition
                  duration-150
                  ease-in
                "
                  onClick={handleApproved}
                >
                  <img src="/images/check.svg" className="h-4 w-4" />
                  <span className="text-xs">Aprobar Empresa</span>
                  <span></span>
                </button>
              </div>
              <div className="flex h-10">
                <button
                  type="submit"
                  className="
                shadow-xl
                  flex
                  mt-2
                  items-center
                  justify-center
                  text-black text-sm
                  sm:text-base
                  font-bold               
                  rounded-2xl
                  py-2
                  w-32
                "
                  onClick={handleRejected}
                >
                  <img src="/images/cancel.svg" className="h-4 w-4" />
                  <span className="text-xs">Rechazar Empresa</span>
                  <span></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-8">
              <img src={selectedCompany.logo} className="h-40 w-40 -my-12" />
            </div>

            <form action="" method="post" key={selectedCompany?.id}>
              <div className="md:flex items-center mt-16">
                <div className="w-full  flex flex-col">
                  <label className="font-sans lg:Roboto -my-4 text-formtxt">
                    Nombre de la empresa
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedCompany.name}
                    readOnly
                    className="text-black-200 border-b-2 p-1  mt-4 border-black focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-sans lg:Roboto -my-4 text-formtxt">
                    Razón Social
                  </label>
                  <input
                    defaultValue={selectedCompany.businessName}
                    readOnly
                    type="text"
                    className="text-black-200 border-b-2 p-1  mt-4 border-black focus:outline-none"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-16">
                <div className="w-full  flex flex-col">
                  <label className="font-sans lg:Roboto -my-4 text-formtxt">
                    Tipo de identificación
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedCompany.type}
                    readOnly
                    className="text-black-200 border-b-2 p-1  mt-4 border-black focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-sans lg:Roboto -my-4 text-formtxt">
                    Identificación
                  </label>
                  <input
                    defaultValue={selectedCompany.docNumber}
                    readOnly
                    type="text"
                    className="text-black-200 border-b-2 p-1 focus:outline-none  mt-4 border-black"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-16">
                <div className="w-full  flex flex-col">
                  <label className="font-sans lg:Roboto -my-4 text-formtxt">
                    # de empleados
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedCompany.numEmployees}
                    readOnly
                    className="text-black-200 border-b-2 p-1 focus:outline-none  mt-4 border-black"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <div className="flex h-10">
                    <Modal documents={selectedCompany?.documents} />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex  justify-center ">
            <button
              className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2py-4 px-6 flex items-center hover:bg-teal-500 hover:text-white"
              onClick={handlePrev}
            >
              <svg
                className="h-4 w-4"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 39.375C9.29688 39.375 0.625 30.7031 0.625 20C0.625 9.29688 9.29688 0.625 20 0.625C30.7031 0.625 39.375 9.29688 39.375 20C39.375 30.7031 30.7031 39.375 20 39.375ZM11.1016 21.3281L21.6875 31.9141C22.4219 32.6484 23.6094 32.6484 24.3359 31.9141L25.6641 30.5859C26.3984 29.8516 26.3984 28.6641 25.6641 27.9375L17.7266 20L25.6641 12.0625C26.3984 11.3281 26.3984 10.1406 25.6641 9.41406L24.3359 8.08594C23.6016 7.35156 22.4141 7.35156 21.6875 8.08594L11.1016 18.6719C10.3672 19.4062 10.3672 20.5938 11.1016 21.3281Z"
                  fill={selectedIndex === 0 ? "#9F9F9F" : "#000"}
                />
              </svg>
            </button>
            <p className="text-gray-400 py-4 px-6 flex justify-center text-xs">
              Empresa {selectedIndex + 1} de {companies.length} pendiente por
              aprobación
            </p>
            <button
              className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center"
              onClick={handleNext}
            >
              <svg
                className="h-4 w-4"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.625C30.7031 0.625 39.375 9.29688 39.375 20C39.375 30.7031 30.7031 39.375 20 39.375C9.29688 39.375 0.625 30.7031 0.625 20C0.625 9.29688 9.29688 0.625 20 0.625ZM28.8984 18.6719L18.3125 8.08594C17.5781 7.35156 16.3906 7.35156 15.6641 8.08594L14.3359 9.41406C13.6016 10.1484 13.6016 11.3359 14.3359 12.0625L22.2734 20L14.3359 27.9375C13.6016 28.6719 13.6016 29.8594 14.3359 30.5859L15.6641 31.9141C16.3984 32.6484 17.5859 32.6484 18.3125 31.9141L28.8984 21.3281C29.6328 20.5938 29.6328 19.4062 28.8984 18.6719Z"
                  fill={
                    selectedIndex === companies.length - 1 ? "#9F9F9F" : "#000"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
