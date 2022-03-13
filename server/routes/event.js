const express = require("express")
const router = new express.Router()
const Event = require('../model/event')
const isAuth = require('../middleware/isAuth')

// add event
router.post("/event", isAuth, async(req, res) => {
  const event = new Event({
    ...req.body,
    organizer: req.user._id
  })
  try{
    await event.save()
    res.status(201).send(event)
  }catch(e){
    res.status(400).send(e)
  }
})

router.get("/myEvents", isAuth, async(req, res) => {
  try{
    // await req.user.populate({
    //   path: 'events'
    // }).execPopulate()
    const events = await req.user.populate('events')
    res.send(events)
  }catch(e){
    res.status(400).send(e)
  }
})

router.get("/events", isAuth, async(req,res) => {
  try{
    const events = await Event.find({})
    res.send(events)
  }catch(e){
    res.status(400).send(e)
  }
})

router.get("/event/:id", isAuth, async(req, res) => {
  const _id = req.params.id
  try{
    const event = await Event.findOne({
      _id,
      organizer: req.user._id
    })
    if(!event)
      return res.status(404).send({error: `No event with id ${_id} found.`})
    res.send(event)
  }catch(e){
    res.status(500).send();
  }
})

module.exports = router