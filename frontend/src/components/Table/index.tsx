import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../utils/api";
import "./Table.css";
import Modal from "../Modal";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
interface ApiResponse {
  data: {
    id: number;
    description: string;
    status: string;
    planejado: number;
    produzido: number;
    periodo_inicio: string;
    periodo_fim: string;
    sku: string;
  }[];
}

function TabelaDeDados() {
  const [dados, setDados] = useState<ApiResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case "PLANEJADO":
        return "bg-lightred text-darkred";
      case "EM ANDAMENTO":
        return "bg-lightblue text-darkblue";
      case "CONCLUÍDO":
        return "bg-lightgreen text-darkgreen";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(apiUrl);

        if (response.status === 200) {
          setDados(response.data);
        } else {
          console.error("Erro ao buscar os dados da API");
        }
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };

    fetchData();
  }, [setDados]);

  const handleDelete = async (itemId: number) => {
    try {
      const response = await axios.delete(`${apiUrl}/${itemId}`);
      if (response.status === 200) {
        console.log("Item excluído com sucesso!");
        setDados((prevDados) => {
          if (!prevDados) return prevDados;
          return {
            data: prevDados.data.filter((item) => item.id !== itemId),
          };
        });
      } else {
        console.error("Erro ao excluir o item:", response.statusText);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao excluir o item:", error);
    }
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Editar demandas</h1>
        {dados ? (
          <table className="my-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Descrição</th>
                <th>Total Planejado</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {dados.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.sku}</td>
                  <td>{item.description}</td>
                  <td>{item.planejado}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      <BsFillTrashFill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </Modal>

      <div className="table-container">
        <h1>Tabela de Dados</h1>
        {dados ? (
          <table className="my-table">
            <thead>
              <tr>
                <th>Editar</th>
                <th>Período</th>
                <th>SKU</th>
                <th>Total Planejado</th>
                <th>Total Produzido</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dados.data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button onClick={openModal}>
                      <AiFillEdit size={24} />
                    </button>
                  </td>
                  <td>
                    {`${formatDate(item.periodo_inicio)} - 
                      ${formatDate(item.periodo_fim)}`}
                  </td>
                  <td>{item.sku}</td>
                  <td>{item.planejado}</td>
                  <td>{item.produzido}</td>
                  <td
                    className={`status-cell ${getStatusColorClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Insira novos registros para visualizar a tabela</p>
        )}
      </div>
    </>
  );
}

export default TabelaDeDados;
