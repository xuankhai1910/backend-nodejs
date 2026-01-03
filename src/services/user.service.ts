import getConnection from "../config/database";

async function handleCreateUser(
  fullName: string,
  email: string,
  address: string
) {
  //insert into database
  //return result
  const connection = await getConnection();

  try {
    const sql =
      "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
    const values = [fullName, email, address];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function getAllUsers() {
  const connection = await getConnection();
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users` ");
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export { handleCreateUser, getAllUsers };
