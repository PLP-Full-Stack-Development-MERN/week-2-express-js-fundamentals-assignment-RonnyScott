const getProducts = (req, res) => {
    res.json({ message: 'Get all products' });
};

const createProduct = (req, res) => {
    res.json({ message: 'Create a new product' });
};

const updateProduct = (req, res) => {
    res.json({ message: `Update product with ID ${req.params.id}` });
};

const deleteProduct = (req, res) => {
    res.json({ message: `Delete product with ID ${req.params.id}` });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
