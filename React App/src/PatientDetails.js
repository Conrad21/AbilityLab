import React, { useEffect, useState } from "react";
import { Drawer, Skeleton } from "antd";
import useFetchData from "./service";

const PatientDetails = ({ patient, visible, onClose }) => {
  const [details, setDetails] = useState({});
  const [isLoading, output] = useFetchData(
    "./" + patient.replace(" ", "_") + ".json"
  );
  const { name, address, age, dob, phone, email } = output;

  return (
    <Drawer
      destroyOnClose
      title={patient}
      visible={visible}
      width={350}
      onClose={onClose}
    >
      <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
        <div style={{ padding: 7, size: 22 }}>
          <p>Name - {name}</p>
          <p>Age - {age}</p>
          <p>Address - {address}</p>
          <p>DOB - {dob}</p>
          <p>Phone - {phone}</p>
          <p>Email - {email}</p>
        </div>
      </Skeleton>
    </Drawer>
  );
};

export default PatientDetails;
