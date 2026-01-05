import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  updateUserById,
} from "../services/user.service";

async function getHomePage(req: Request, res: Response) {
  //get users
  const users = await getAllUsers();
  console.log(users);
  return res.render("home", {
    users: users,
  });
}

function getCreateUserPage(req: Request, res: Response) {
  return res.render("create-user");
}

async function postCreateUser(req: Request, res: Response) {
  const { fullName, email, address } = req.body;

  //handle create user
  await handleCreateUser(fullName, email, address);
  return res.redirect("/");
}

async function postDeleteUser(req: Request, res: Response) {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
}

async function getViewUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.render("view-user", {
    id: id,
    user: user,
  });
}

async function postUpdateUser(req: Request, res: Response) {
  const { id, fullName, email, address } = req.body;
  //Update User by Id
  const user = await updateUserById(id, fullName, email, address);
  return res.redirect("/");
}

export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
};
