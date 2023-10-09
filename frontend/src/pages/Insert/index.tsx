import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Style.css";
import apiUrl from "../../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface FormData {
  periodo_inicio: string;
  periodo_fim: string;
  description: string;
  planejado: number;
  // produzido: number;
  sku: string;
}

const Insert: React.FC = () => {
  const initialFormData: FormData = {
    periodo_inicio: "",
    periodo_fim: "",
    description: "",
    planejado: 0,
    // produzido: 0,
    sku: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [validationError, setValidationError] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (new Date(formData.periodo_inicio) > new Date(formData.periodo_fim)) {
      setValidationError("A data de início deve ser anterior à data de fim.");
      return;
    }
    setValidationError("");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Dados do formulário enviados com sucesso!");
        navigate("/");
      } else {
        console.error(
          "Erro ao enviar dados do formulário:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Ocorreu um erro ao enviar dados do formulário:", error);
    }
  };

  return (
    <main>
      <h1 className="form-title ">Criar demanda de produção</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="periodo_inicio">Período de Início:</label>
          <input
            type="date"
            id="periodo_inicio"
            name="periodo_inicio"
            value={formData.periodo_inicio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="periodo_fim">Período de Fim:</label>
          <input
            type="date"
            id="periodo_fim"
            name="periodo_fim"
            value={formData.periodo_fim}
            onChange={handleChange}
            required
          />
        </div>
        {validationError && (
          <div className="validation-error">{validationError}</div>
        )}
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={255}
          />
        </div>
        <div className="form-group">
          <label htmlFor="planejado">Planejado:</label>
          <input
            type="number"
            id="planejado"
            name="planejado"
            value={formData.planejado}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="produzido">Produzido:</label>
          <input
            type="number"
            id="produzido"
            name="produzido"
            value={formData.produzido}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="sku">Sku:</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
            min={3}
            maxLength={75}
          />
        </div>
        <div className="button-container">
          <Link to="/" className="button-cancel text-link">
            Cancelar
          </Link>
          <button type="submit" className="form-button">
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default Insert;
