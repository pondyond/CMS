photosCtrl = require("../../controllers/photo/photos")

module.exports = (app, prefix) ->
  #REST
  app.post(prefix + "/galleries/:galleryId/photos", photosCtrl.create)
  app.del(prefix + "/galleries/:galleryId/photos/:id", photosCtrl.del)