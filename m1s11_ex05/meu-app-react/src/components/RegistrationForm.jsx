import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    alert("Cadastro realizado com sucesso!");
  };

  const senha = watch("senha", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label>Nome:</label>
        <input
          type="text"
          {...register("nome", { required: "Nome é obrigatório", minLength: { value: 3, message: "O nome deve ter no mínimo 3 caracteres" } })}
        />
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Senha:</label>
        <input
          type="password"
          {...register("senha", { required: "Senha é obrigatória", minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" } })}
        />
        {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Confirmação de Senha:</label>
        <input
          type="password"
          {...register("confirmaSenha", {
            required: "Confirmação de senha é obrigatória",
            validate: (value) => value === senha || "As senhas não coincidem",
          })}
        />
        {errors.confirmaSenha && <p style={{ color: "red" }}>{errors.confirmaSenha.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegistrationForm;
