import { FC } from "react";
import { DataStoreProvider } from "./store/context";
import { Form } from "./components/form/Form";
import { Modal } from "./components/modal/Modal";

export const App: FC = () => (
  <DataStoreProvider>
    <Form />
    <Modal />
  </DataStoreProvider>
);
