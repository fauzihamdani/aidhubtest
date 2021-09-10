const { todo } = require('../../models');

exports.addTodo = async (req, res) => {
   try {
      const { body } = req;
      const { listtodo } = body;
      console.log('response body', body);

      const todoInput = await todo.create({
         listTodo: listtodo,
         isDone: 0,
      });

      res.send({
         status: 'success',
         data: {
            feed: todoInput,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getTodos = async (req, res) => {
   console.log('Get Todo');
   try {
      const todos = await todo.findAll();

      res.send({
         status: 'success',
         data: {
            todo: todos,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.deleteTodo = async (req, res) => {
   try {
      const { id } = req.params;
      const deletedTodo = await todo.destroy({ where: { id } });

      res.send({
         status: 'succesfully deleted',
         data: {
            feed: deletedTodo,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.updateTodo = async (req, res) => {
   try {
      const { id } = req.params;
      const { body } = req;
      const updateTodo = await todo.update(body, { where: { id: id } });

      res.send({
         status: 'succesfully updated',
      });
   } catch (error) {
      console.log(error);
   }
};

// exports.getPosts = async (req, res) => {
//    try {
//       const feed = await Post.findAll({
//          attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
//          order: [['createdAt', 'DESC']],
//          include: [
//             {
//                model: User,
//                attributes: {
//                   exclude: ['createdAt', 'updatedAt', 'password'],
//                },
//                as: 'user',
//             },
//             {
//                model: Comment,
//                attributes: { exclude: ['createdAt', 'updatedAt'] },
//                as: 'comment',
//             },
//             {
//                model: Like,
//                attributes: { exclude: ['createdAt', 'updatedAt', 'idUser'] },
//                as: 'likes',
//             },
//          ],
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: feed,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.getPostsById = async (req, res) => {
//    try {
//       const { userId } = req.params;
//       const feed = await Post.findAll({
//          where: { userId: userId },
//          attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
//          order: [['createdAt', 'ASC']],
//          include: [
//             {
//                model: User,
//                attributes: {
//                   exclude: ['createdAt', 'updatedAt', 'password'],
//                },
//                as: 'user',
//             },
//             {
//                model: Comment,
//                attributes: { exclude: ['createdAt', 'updatedAt'] },
//                as: 'comment',
//             },
//             {
//                model: Like,
//                attributes: { exclude: ['createdAt', 'updatedAt', 'idUser'] },
//                as: 'likes',
//             },
//          ],
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: feed,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.getPostsByUser = async (req, res) => {
//    try {
//       const feed = await Post.findAll({
//          where: { id: req.user.id },
//          attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
//          order: [['createdAt', 'ASC']],
//          include: [
//             {
//                model: User,
//                attributes: {
//                   exclude: ['createdAt', 'updatedAt', 'password'],
//                },
//                as: 'user',
//             },
//             {
//                model: Comment,
//                attributes: { exclude: ['createdAt', 'updatedAt'] },
//                as: 'comment',
//             },
//             {
//                model: Like,
//                attributes: { exclude: ['createdAt', 'updatedAt', 'idUser'] },
//                as: 'likes',
//             },
//          ],
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: feed,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.addLike = async (req, res) => {
//    try {
//       const { body } = req;
//       console.log('response body', body);
//       const idUser = req.user.id;
//       console.log(idUser);

//       // if (!req.files.image)
//       //     return res.status(400).send({
//       //         status: "fail",
//       //         message: "image not found",
//       const id = req.body.id;
//       //     });

//       const feed = await Post.findByPk(id);
//       // console.log(feed.like);

//       const result = { like: feed.like + 1 };

//       const updateLike = await Post.update(result, {
//          where: {
//             id,
//          },
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: feed.id,
//             data: feed.like,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.getPostsByFollowed = async (req, res) => {
//    try {
//       const getFollower = await Follower.findAll({
//          where: {
//             userId: req.user.id,
//          },
//          attributes: ['userFollowId'],
//          // as: 'getuserToId',
//       });

//       var arrOfFollower = [];

//       getFollower.map((followerId) => {
//          arrOfFollower.push(followerId.userFollowId);
//       });

//       var getPostFromFollower = [req.user.id, ...arrOfFollower];

//       const feed = await Post.findAll({
//          where: { userId: getPostFromFollower },
//          attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
//          order: [['createdAt', 'DESC']],
//          include: [
//             {
//                model: User,
//                attributes: {
//                   exclude: [
//                      'createdAt',
//                      'updatedAt',
//                      'password',
//                      'bio',
//                      'usernotif',
//                   ],
//                },
//                as: 'user',
//             },
//             {
//                model: Comment,
//                attributes: { exclude: ['createdAt', 'updatedAt'] },
//                as: 'comment',
//             },
//             {
//                model: Like,
//                attributes: {
//                   exclude: ['idUser'],
//                },
//                as: 'likes',
//             },
//          ],
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: feed,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };
