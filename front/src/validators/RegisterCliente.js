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
        "Telefone deve conter no máximo 11 digitos numéricos")
    });


    export const contatoSchema = yup.object().shape({
      name: yup.string().required("Nome Obrigatório"),
      email: yup.string().required("Email Obrigatório").email("Email inválido"),
      phone: yup.string().required("Campo obrigatório").matches(
        /^[0-9]+$/,
        "Telefone deve conter no máximo 11 digitos numéricos"),

    })
    export const contatoUpdateSchema = yup.object().shape({
      name: yup.string().notRequired(),
      email: yup.string().email("Email inválido").notRequired(),
      phone: yup.string().matches(
        /^[0-9]+$/, { excludeEmptyString: true },
        "Telefone deve conter no máximo 11 digitos numéricos").nullable().notRequired(),

    })

    export const clienteUpdateSchema = yup.object().shape({
      name: yup.string().notRequired(),
      email: yup.string().email("Email inválido").notRequired(),
      password: yup
        .string()
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, { excludeEmptyString: true },
          "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
        ).notRequired(),
      phone: yup.string().matches(
        /^[0-9]+$/, { excludeEmptyString: true },
        "Telefone deve conter no máximo 11 digitos numéricos").notRequired(),

    })