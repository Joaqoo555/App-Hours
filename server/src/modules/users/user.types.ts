import { User } from "../../../prisma/generated/client"

export type UserDTO = Omit<User, "password" | "role"> ;

export type AllUsersResponseDTO = UserDTO[];

export type UserResponseDTO = UserDTO;