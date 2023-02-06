import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, 'No minimo 8 caracteres')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
      ),
    });


    export const formSchema = yup.object().shape({
      name: yup.string().required("Nome Obrigatório"),
      email: yup.string().required("Email Obrigatório").email("Email inválido"),
      password: yup
        .string()
        .required("Senha Obrigatória")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
        ),
      confirmPassword: yup
        .string()
        .required("Por favor, confirme sua senha")
        .when("password", {
          is: (password) => (password && password.length > 0 ? true : false),
          then: yup.string().oneOf([yup.ref("password")], "Senha não confirmada"),
        }),
      phone: yup.string().required("Campo obrigatório").matches(
        /^[0-9]+$/,
        "Telefone deve conter no máximo 11 digitos numéricos"),
      contact: yup.string().required("Contato obrigatório"),
      course_module: yup.string().required("Selecione um módulo"),
    });


    export const contatoSchema = yup.object().shape({
      name: yup.string().required("Nome Obrigatório"),
      email: yup.string().required("Email Obrigatório").email("Email inválido"),
      phone: yup.string().required("Campo obrigatório").matches(
        /^[0-9]+$/,
        "Telefone deve conter no máximo 11 digitos numéricos"),

    })