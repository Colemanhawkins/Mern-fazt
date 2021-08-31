import { RequestHandler } from "express";
import Video from '../model/Video';

export const getVideos: RequestHandler = async (req, res) =>{
    try {
        const videos = await Video.find();
        return res.json(videos)
    } catch (error) {
        return res.status(404).json(error)
    }
};

export const getVideo: RequestHandler = async(req, res) =>{
  const videoFound = await Video.findById(req.params.id)
  if(!videoFound){
    return res.status(204).json({message : 'video not found'});
  }
    return res.json(videoFound)
};

export const deleteVideo: RequestHandler = async (req, res) =>{
    const videoFound = await Video.findByIdAndDelete(req.params.id)
  if(!videoFound){
    return res.status(204).json({message : 'video not found'});
  }
    return res.json(videoFound)
};

export const updateVideo: RequestHandler = async(req, res) =>{
 const videoUpdated =  await Video.findByIdAndUpdate(req.params.id, req.body, {new : true})
  if(!videoUpdated)   return res.status(204).json({message : 'video not update'});
  return res.json(videoUpdated);
};

export const createVideo: RequestHandler =  async(req, res) =>{
    const videoFound =  await Video.findOne({url: req.body.url})
    if(videoFound){
    return res.status(301).json({message: 'The url already exist'})
  }
    const video =  new Video(req.body)
    const saveVideo = await video.save()
    res.json(saveVideo)
};
