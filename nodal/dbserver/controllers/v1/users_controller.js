module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('dbserver/models/user.js');
  const AuthController = Nodal.require('dbserver/controllers/auth_controller.js');

  class V1UsersController extends AuthController {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models,
            ['id',
             'email',
             'username',
             'first_name',
             'description',
             'occupation',
             'gen_interests',
             'tech_interests',
             'hometown',
             'avatar',
             'time_frame',
             'created_at'
           ]);

        });

    }

    show() {

      User.find(this.params.route.id, (err, model) => {

        this.respond(err || model,
          ['id',
           'email',
           'username',
           'first_name',
           'description',
           'occupation',
           'gen_interests',
           'tech_interests',
           'hometown',
           'avatar',
           'time_frame',
           'created_at'
         ]);

      });

    }

    create() {

      // this.userLogin((user, password) => {

        User.create(this.params.body, (err, model) => {

          this.respond(err || model,
            ['id',
            'email',
            'username'
          ]);

        });

      // });

    }

    update() {

      this.authorize((accessToken, user) => {

        User.update(this.params.route.id, this.params.body, (err, model) => {

          this.respond(err || model,
            ['id',
             'email',
             'username',
             'first_name',
             'description',
             'occupation',
             'gen_interests',
             'tech_interests',
             'hometown',
             'avatar',
             'time_frame',
             'created_at'
           ]);

        });

      });

    }

    destroy() {

      this.authorize((accessToken, user) => {

        User.destroy(this.params.route.id, (err, model) => {

          this.respond(err || model,
            ['id',
            'email',
            'username',
            'first_name',
            'description',
            'occupation',
            'gen_interests',
            'tech_interests',
            'hometown',
            'avatar',
            'time_frame',
            'created_at'
          ]);

        });

      });


    }

  }

  return V1UsersController;

})();