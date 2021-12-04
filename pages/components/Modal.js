import React from "react";
import Link from "next/link";

export default function Modal({ documents }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="w-40
        shadow-xl
          flex
          mt-2
          items-center
          justify-center
          text-black text-sm
          sm:text-base
          font-bold               
          rounded
          py-2
          w-32
          px-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src="/images/records.svg" className="h-4 w-4" />
        <span className="text-xs">Ver archivos adjuntos</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute w-full h-full bg-backdrop" />
            <div className="relative  my-2 mx-auto max-w-lg">
              {/*co96 */}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="justify-center p-5">
                  <div className="flex justify-end p-1 -mr-5">
                    <button
                      className="background-transparent mr-1 mb-1 ease-linear"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <img src="/images/close.svg" className="h-2 w-2" />
                    </button>
                  </div>
                  <h3 className="text-2xl font-semibold flex justify-center items-center ">
                    Documentos cargados
                  </h3>
                </div>
                {/*body*/}
                <div className="flex-auto  p-8 -top-8">
                  {documents.map((document) => (
                    <ul
                      key={document.id}
                      className="flex flex-row justify-between"
                    >
                      <p className="font-sans lg:Roboto py-2">
                        {document.name}{" "}
                      </p>
                      <a href={document.url} download>
                        <img
                          src="/images/pdf.svg"
                          className="flex justify-end h-6 w-6"
                        />
                      </a>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
