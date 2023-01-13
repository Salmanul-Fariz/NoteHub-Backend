class AdminService {
  // Home page
  async Dashboard(req, res) {
    try {
      res.status(200).json({
        status: 'Success',
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AdminService;
