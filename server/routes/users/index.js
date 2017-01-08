import express from 'express';
import Validator from 'validator';

const router = express.Router();

function validateInput(data) {
  let errors = {};
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

router.post('/', (req, res, next) => {
  const { errors, isValid } = validateInput(req.body);

  if (!valid) {
    res.status(400).json(errors);
  }
});

export default router;