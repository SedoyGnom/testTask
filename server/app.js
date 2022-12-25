require('dotenv').config();

const express = require('express');
const config = require('./config');
const { sequelize } = require('./db/models')

// руты
// const logRouter = require('./routes/login.routes')
const restaurantRouter = require('./routes/restaurants.router')
const userRouter = require('./routes/user.router')

const app = express();
const PORT = process.env.PORT || 4000;

config(app);

// проверка работы сиквалайза


// руты
app.use("/", restaurantRouter);
app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`*** Server Start ${PORT} port ***`)
  sequelize.authenticate(
    // {logging: false}
    )
    .then(() => console.log('Connextion success'))
    .catch(() => console.log('No connect'))
});
