'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const restaurants = [
      {
        name: 'Twins Garden',
        info: 'В «Twins Garden» сделан акцент на русскую кухню. В главном зале можно посмотреть на настоящую русскую печь, в которой повара готовят на березовых дровах, узнать о хозяйстве Близнецов-Садовников и увидеть лабораторию, где Иван и Сергей работают над меню. Своей целью братья называют возрождение русской кухни и мечтают «вывести ее на новый этап эволюции».',
      },
      {
        name: 'Lucky Izakaya Bar',
        info: 'Ресторан находится на углу Калашного переулка и Большой Никитской. Интерьер простой и в то же время цепляющий — деревянная мебель, компактные столы, длинная барная стойка и теплый приглушенный свет создают атмосферу домашнего уюта.',
      },
      {
        name: 'White Rabbit',
        info: 'Первую тройку лучших ресторанов Москвы замыкает проект ресторатора Бориса Зарькова. «White Rabbit» славится не только гастрономическими изысками русской кухни и новым подходом к подаче традиционных русских блюд, но и шеф-поваром года по версии «Ресторанной премии GQ-2016» Владимиром Мухиным.',
      },
      {
        name: 'Сахалин',
        info: 'Основатели проекта — ресторатор Борис Зарьков и бренд-шеф «White Rabbit Family» Владимир Мухин — создали концепцию гастрономического искусства и открыли «Сахалин» — ресторан, в котором «звучит музыка морей и океанов».',
      },
      {
        name: 'Buro TSUM',
        info: 'Почетное пятое место в рейтинге ресторанов с самой вкусной кухней занимает панорамный ресторан «Buro TSUM» с гастрономическим меню и лионским грилем. Заведение расположено на 5 этаже ЦУМа, в самом сердце столицы — из зала открывается панорамный вид на Большой театр, Петровку и Неглинную улицу.',
      }
    ]

    const restaurantsWithData = restaurants.map((restaurant)=> ({
      ...restaurant,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('Restaurants', restaurantsWithData, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};