import React from "react";

interface ConProps {
  dataGuiCon: string;
  dataCuaCha: string;
}

interface ChauProps {
  dataTuConGuiChau: string;
  dataTuOngGuiChau: string;
}
const Chau = (props: ChauProps) => {
  return (
    <div>
      <h1>Chau</h1>
      <p>Du lieu tu ong: {props.dataTuOngGuiChau}</p>
      <p>Du lieu tu bome: {props.dataTuConGuiChau}</p>
    </div>
  );
};
const Con = (props: ConProps) => {
  const dataGuiChau = "du lieu tu con gui chau";
  return (
    <div>
      <h1>Con</h1>
      <p>Thong tin tu bo me: {props.dataGuiCon}</p>
      <Chau
        dataTuConGuiChau={dataGuiChau}
        dataTuOngGuiChau={props.dataGuiCon}
      />
    </div>
  );
};

export default function Demo() {
  const dataGuiCon = "du lieu tu cha gui con";
  const dataCuaCha = "du lieu truc tiep tu cha";
  return (
    <div>
      <h1>Cha</h1>
      <Con dataGuiCon={dataGuiCon} dataCuaCha={dataCuaCha} />
    </div>
  );
}
