import Card from "./components/Card";
import Layout from "./components/Layout";
import prisma from "../lib/prisma";

export async function getStaticProps() {
  const companies = await prisma.company.findMany({
    where: {
      status: "pending",
    },
    select: { id: true },
  });
  return {
    props: { numPedingRequest: companies.length },
  };
}

export default function Home({ numPedingRequest }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-18 lg:px-18 xs:px-18 py-14">
        <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {/******* 1 card******/}
          <Card
            href="/Form"
            title="Solicitudes de creación de empresas"
            description={`${numPedingRequest} Solicitudes sin tratar`}
            icon="/images/time.svg"
          />
          {/******* 2 card****/}
          <Card
            title="Indicadores"
            description="Visitado por última vez: 31/10/2021"
            icon="/images/requests.svg"
          />
          {/***** 3 card*****/}
          <Card
            title="Inscripción de empleados en empresas"
            description="3 usuarios sin empresa registrada"
            icon="/images/inscribe-employer.svg"
          />
          {/******** 4 card*****/}
          <Card
            title="Gestión de usuarios"
            description="532 usuarios activos en la plataforma"
            icon="/images/manage-users.svg"
          />
        </div>
      </div>
    </Layout>
  );
}
