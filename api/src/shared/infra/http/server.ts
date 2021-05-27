import { app } from './app';

app.listen(process.env.PORT, () => {
    console.log(`🚀🚀Server Started on port ${process.env.PORT}`);
});
