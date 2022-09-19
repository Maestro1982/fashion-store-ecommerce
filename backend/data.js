import bcrypt from 'bcryptjs';

// I create first data.js to seed all the data into the db
const data = {
  users: [
    {
      username: 'Admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('admin'),
      isAdmin: true,
    },
  ],
};
export default data;
