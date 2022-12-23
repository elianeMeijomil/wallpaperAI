import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function (req,res){
  try {
      const response = await openai.createImage({
        prompt: req.body.image,
        n: 1,
        size: req.body.size
      });
      res.status(200).json({ result: response.data.data });
  } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
  }
}
function generatePrompt(image) {
  const generatedImage = image[0].url
  return generatedImage;
}
