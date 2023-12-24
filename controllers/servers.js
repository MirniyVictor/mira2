let services = [
    {id: '1', name: 'test 1', status: 'working'},
    {id: '2', name: 'test 2', status: 'working'},
    {id: '3', name: 'test 3', status: 'working'},
    {id: '4', name: 'test 4', status: 'pending'},
    {id: '5', name: 'test 5', status: 'pending'}
];

export const getAll = (req, res) => {
    res.status(200).json(services);
};