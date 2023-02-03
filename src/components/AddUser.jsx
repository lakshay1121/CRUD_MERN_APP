import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 18px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    // console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add User </Typography>
      <FormControl>
        <InputLabel>Name:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel>Username:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>

      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Phone No:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#0F52BA" }}
          onClick={() => addUserDetails()}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
