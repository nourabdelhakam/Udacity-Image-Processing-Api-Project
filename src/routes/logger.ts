import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const url = req.url;
  console.log(`${url} has been visited`);
  next();
};

export default logger;
