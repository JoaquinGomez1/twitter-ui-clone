import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ITweet } from "../../../interfaces/tweets";
import formatAsTweet from "../../../libs/formatAsTweet";

interface IResponse {
  results: any[];
}

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const randomUsers: IResponse = (
    await axios.get(`https://randomuser.me/api/?results=${1}`)
  ).data;

  const formatedTweets: ITweet[] =
    randomUsers?.results?.map((item) => formatAsTweet(item)) || [];

  return res.json(formatedTweets[0]);
}
