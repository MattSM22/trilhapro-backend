import { userRepository } from "./user.repository";
import { IUser } from "./user.types";

export const userService = {
  createUser: async (user: IUser) => {
    return userRepository.create(user);
  },
  loginUser: async (user: IUser) => {
    return userRepository.login(user);
  },
  getUsers: async () => {
    return userRepository.findAll();
  },
  updateUser: async (id: string, user: Partial<IUser>) => {
    return userRepository.update(id, user);
  },
  deleteUser: async (id: string) => {
    return userRepository.delete(id);
  }
}