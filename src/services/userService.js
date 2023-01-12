class UserService {
  // Home page
  async HomePage(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserService;
