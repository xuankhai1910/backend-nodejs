import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

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

export { getHomePage, getCreateUserPage, postCreateUser };
