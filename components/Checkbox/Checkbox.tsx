import { Box, HStack, Text, useCheckbox } from "@chakra-ui/react";
import { FormEvent } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import useSWR from "swr";
import { DeleteTodo } from "../Todo/DeleteTodo";
import { CheckboxBox } from "./CheckboxBox";

interface Props {
  value: string;
  onChange: (e: FormEvent<any>) => void;
  id: string;
  title: string;
  note: string;
  userName: String;
  completed: Boolean;
  created_at: string;
}

export const ButtonCheckbox = (props: Props) => {
  const {
    title,
    note,
    value,
    userName,
    completed,
    created_at,
    ...rest
  } = props;
  const { getCheckboxProps, getInputProps, getLabelProps, state } = useCheckbox(
    rest
  );
  // const { user } = useUser();
  const { data: user } = useSWR("/api/auth/me");
  const showUser = (un: String) => {
    // console.log(`userName: ${un}, userprofile name: ${user.name}`)
    if (un === "user_id_" + user?.name) return "You";
    return un.replace(/^user_id_/, "");
  };

  return (
    <HStack
      spacing="4"
      borderWidth="2px"
      px="4"
      py="3"
      borderRadius="md"
      borderColor={"user_id_" + user?.name === userName ? "green" : "inherit"}
    >
      <label {...getLabelProps()}>
        <input {...getInputProps()} aria-labelledby={value} />
        {completed && <Text>Done!</Text>}
        {!completed && user && "user_id_" + user?.name === userName && (
          <CheckboxBox {...getCheckboxProps()} id={value}>
            <Box
              data-checked={state.isChecked ? "" : undefined}
              fontSize="2xl"
              _checked={{
                color: "blue.500",
              }}
              color="gray.300"
            >
              {state.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </Box>
          </CheckboxBox>
        )}
      </label>
      <Box flex="2" pl={2}>
        <Text pl={4} fontWeight="bold">
          {title}
        </Text>
        <Text pl={4} fontSize="sm">
          {note}
        </Text>
        <Text pl={4} fontSize="sm">
          From: {showUser(userName)}
        </Text>
      </Box>
      <Box flex="1">
        <Text>Created At</Text>
        <Text>{new Date(created_at).toLocaleDateString()}</Text>
        <Text>{new Date(created_at).toLocaleTimeString()}</Text>
      </Box>
      {user && "user_id_" + user?.name === userName && (
        <DeleteTodo id={value} />
      )}
    </HStack>
  );
};
