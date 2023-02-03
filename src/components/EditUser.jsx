import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { React, useState,useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";

import { editUser, getUser, getUsers } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 18px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const navigate = useNavigate();

  const  {id} = useParams();

  useEffect(() =>{
    loadUserDetails();
  },[]);

  const loadUserDetails = async () =>{

    const response = await getUser(id);
    
    setUser(response.data);

  }

  const [user, setUser] = useState(initialValue);


  const onValueChange = (e) => {
    // console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user , id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4" >Edit User </Typography>
      <FormControl>
        <InputLabel >Name:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </FormControl>

      <FormControl>
        <InputLabel>Username:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
      </FormControl>

      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone No:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"  value={user.phone}/>
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#0F52BA" }}
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
