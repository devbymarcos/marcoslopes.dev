"use client";
import { Input, TextArea } from "./Input";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section id="contato" className="container pt-28">
        <div className="w-full mb-28 text-center text-white">
          <h2 className=" text-5xl mb-6 font-bold">CONTATO</h2>
          <p className="text-xl px-[16%]">
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo e retornarei o mais breve possível possível
          </p>
        </div>
        <form className="w-[832px] mx-auto rounded border-t-2 bg-color-secondary p-10 flex flex-col">
          <Input
            label="Nome"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Input
            label="Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextArea
            label="Menssagem"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />

          <div>
            <button className="py-4 px-6 bg-[#7843E9] text-white font-bold   rounded-md">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
