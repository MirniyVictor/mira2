let services = [
    {id: '1', name: '1001', status: 'Registered'},
    {id: '2', name: '1002', status: 'Registered'},
    {id: '3', name: '1003', status: 'Unregistered'},
    {id: '4', name: '1004', status: 'Registered'},
    {id: '5', name: '1005', status: 'Unregistered'}
];

export const getAll = (req, res) => {
    res.status(200).json(services);
};