export default allProject = (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get all items that sellerId sold
      try {
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
  }
};
