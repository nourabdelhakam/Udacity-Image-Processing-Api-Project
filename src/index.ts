import express from 'express';
import ResizeIMG from './routes/API/resizeimg';

const app = express();
const port = 3030;

app.use('/api', [ResizeIMG]);

// app.use('/static', express.static('assets/imgs'))

// app.get('/try', (req, res) => {
//   res.sendFile(path.resolve('./') + `/assets/thumbnails/space_1_300-300.png`)
// })

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
