import { prisma } from "config/client";
import getConnection from "../config/database";

async function handleCreateUser(
  fullName: string,
  email: string,
  address: string
) {
  //insert into database
  //return result

  const newUser = await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
  return newUser;
}

async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function handleDeleteUser(id: string) {
  const result = await prisma.user.delete({
    where: { id: +id },
  });
  return result;
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  });
  return user;
}

async function updateUserById(
  id: string,
  fullName: string,
  email: string,
  address: string
) {
  const updatedUser = await prisma.user.update({
    where: { id: +id },
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
  return updatedUser;
}

export {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  updateUserById,
};
