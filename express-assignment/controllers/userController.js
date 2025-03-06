const getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

const createUser = (req, res) => {
    res.json({ message: 'Create a new user' });
};

const updateUser = (req, res) => {
    res.json({ message: `Update user with ID ${req.params.id}` });
};

const deleteUser = (req, res) => {
    res.json({ message: `Delete user with ID ${req.params.id}` });
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
