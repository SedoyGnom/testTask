// .post((req, res) => {
//   Student.create(req.body)
//     .then((data) => res.status(201).json(data))
//     .catch((error) => res.status(500).json(error))
// })

// router.route('students/:id')
//   .put((req, res) => {
//     const { id } = req.params;
//     Student.update(req.body, { where: { id }, returning: true })
//       .then((data) => res.json(data))
//       .catch((error) => res.status(500).json(error))
//   })
//   .delete((req, res) => {
//     const { id } = req.params;
//     Student.destroy({ where: { id } })
//       .then((data) => data ? res.json(id) : res.status(404).json(data))
//   })


// Метод findOrCreate создаст запись в таблице, если не сможет найти 
// ее по условию. В любом случае вернется экземпляр и логическое 
// значение (created), указывающее, был этот экземпляр создан или 
// уже существовал.
// const [book, created] = await Book.findOrCreate({
//  where: { author: 'Fyodor Mikhailovich Dostoevsky' },
//  defaults: { title: 'Notes from Underground' }
// });
// console.log(book.author); // 'Fyodor Mikhailovich Dostoevsky'
// console.log(created); // false если запись найдена или true если создана
