import { check } from "express-validator";

export default [
  check("username").isEmail(),
  check("full_name").isLength({ min: 5 }),
  check("password").isLength({ min: 5 }),
];
