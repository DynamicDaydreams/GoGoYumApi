import { User } from '../models';

const getUsers = async () => {
    let users = await User.findAll();
    return users;
}

const getUser = async (userName, passwordHash) => {
    let user = await User.findOne({
        where: {
            userName: userName.toLowerCase(),
            passwordHash: passwordHash.toLowerCase()
        }
    });
    return user;
}

const getUserById = async (id) => {
    let user = await User.findOne({
        where: {
            id
        }
    });
    return user;
}

const addUser = async (userToAdd) => {
    await User.create(userToAdd);
}

export { getUser, getUsers, addUser, getUserById };