import { users } from "../data/users.js"

export const getUsers = (req, res) => {
    res.status(200).json({data: users, success: true,error: null})
}