import React, { useState } from "react";
import "./Form.css";

interface FormData {
  periodo_inicio: string;
  periodo_fim: string;
  description: string;
  planejado: number;
  produzido: number;
  sku: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
  initialValues?: Partial<FormData>;
}

const FormComponent: React.FC<FormProps> = ({
  onSubmit,
  initialValues = {},
}) => {
  const [formData, setFormData] = useState<FormData>({
    periodo_inicio: "",
    periodo_fim: "",
    description: "",
    planejado: 0,
    produzido: 0,
    sku: "",
    ...initialValues, // Preenche os valores iniciais se fornecidos
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="periodo_inicio">Período Início</label>
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
        <label htmlFor="periodo_fim">Período Fim</label>
        <input
          type="date"
          id="periodo_fim"
          name="periodo_fim"
          value={formData.periodo_fim}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="planejado">Planejado</label>
        <input
          type="number"
          id="planejado"
          name="planejado"
          value={formData.planejado}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="produzido">Produzido</label>
        <input
          type="number"
          id="produzido"
          name="produzido"
          value={formData.produzido}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="sku">SKU</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
};

export default FormComponent;
