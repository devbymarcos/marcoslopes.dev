"use client";
import Spinner from "@/components/spinner/Spinner";
import { Input, TextArea } from "./Input";
import { useState } from "react";
import { useAlert, Alert } from "@/components/alert/Alert";
import { z } from "zod";
import Btn from "@/components/buttons/Btn";
import { Instagram, LinkedinIcon, Facebook } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { alertObj, setAlertObj } = useAlert();
  const [borderStyleName, setBorderStyleName] = useState("");
  const [borderStyleMessage, setBorderStyleMessage] = useState("");
  const [borderStyleEmail, setBorderStyleEmail] = useState("");

  async function postContact(e) {
    e.preventDefault();

    const schema = z.object({
      name: z.string().min(5, " Prencha o campo name"),
      email: z.string().email("digite um email valido"),
      message: z.string().min(10, "digite sua mensagem"),
    });

    const result = schema.safeParse({
      name: name,
      email: email,
      message: message,
    });

    setBorderStyleEmail("");
    setBorderStyleMessage("");
    setBorderStyleName("");

    if (!result.success) {
      const resultObj = JSON.parse(result.error);
      for (let i = 0; i < resultObj.length; i++) {
        if (resultObj[i].path[0] === "name") {
          setBorderStyleName("!border-red-500 !border-2 ");
        } else if (resultObj[i].path[0] === "email") {
          setBorderStyleEmail("!border-red-500 !border-2 ");
        } else if (resultObj[i].path[0] === "message") {
          setBorderStyleMessage("!border-red-500 !border-2 ");
        }
      }
    }

    if (result.success) {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        }),
      };
      try {
        setLoading(true);
        const response = await fetch("/api/contact", options);
        const json = await response.json();
        if (response.ok === true) {
          setAlertObj({
            type: json.type,
            message: json.message,
            active: true,
          });

          setName("");
          setEmail("");
          setMessage("");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setAlertObj({
        type: "error",
        message: "Oooops !! Verifique os dados: Nome, email, mensagem",
        active: true,
      });
    }
  }

  return (
    <>
      <Spinner active={loading} />
      <Alert alertObj={alertObj} />
      <section id="contato" className="container-custom my-28">
        <div className="w-full mb-16 text-center  text-font-color dark:text-font-color-dark">
          <h2 className=" text-2xl mb-6 font-bold">CONTATO</h2>
          <p className="text-lg ">
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo, retornarei o mais breve possível
          </p>
        </div>
        <div className="flex  flex-col gap-20 w-full md:mx-auto md:w-[600px]">
          <div>
            <div className=" ">
              <h3 className="text-font-color dark:text-font-color-dark text-xl mb-3 font-bold">
                Dados de Contato
              </h3>
              <ul>
                <li className="text-font-color dark:text-font-color-dark italic">
                  Telefone : (41) - 992169810
                </li>
                <li className="text-font-color dark:text-font-color-dark italic">
                  Email : marcoslopes.cwb@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <form className="md:w-full mx-auto rounded border-t-2  bg-secondary-light p-4 md:p-10 flex flex-col">
            <Input
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              classIf={borderStyleName}
            />

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              classIf={borderStyleEmail}
            />
            <TextArea
              label="Menssagem"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              classIf={borderStyleMessage}
            />

            <div>
              <Btn onClick={postContact}>Enviar</Btn>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
