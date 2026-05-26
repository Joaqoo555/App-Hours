import { Request, Response } from "express";

// const GET_usersById = async (req: Request, res: Response) => {};

//superAdmin
const POST_user = async (req: Request, res: Response) => {};

//ADMIN
const GET_Allusers = async (req: Request, res: Response) => {};
const GET_userById = async (req: Request, res: Response) => {};


//USER
const UPDATE_userById = async (req: Request, res: Response) => {};
const DELETE_userById = async (req: Request, res: Response) => {};

export { POST_user, GET_Allusers, GET_userById, UPDATE_userById, DELETE_userById };
