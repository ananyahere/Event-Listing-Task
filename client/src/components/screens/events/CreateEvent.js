import React, {useState} from 'react'

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [duration, setDuration] = useState(0)
  const [capacity, setCapacity] = useState(0)
  const [doorTime, setDoorTime] = useState()
  const [endTime, setEndTime] = useState()
  const [location, setLocation] = useState('')
  const [isFree, setIsFree] = useState(false)
  const[eventStatus, setEventStatus] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch("/event", {
        method: 'POST',
        body: JSON.stringify({
          description: desc,
          doorTime,
          duration,
          endTime,
          eventStatus,
          location,
          maximumAttendeeCapacity: capacity,
          isAccessibleForFree: isFree
        }),
        headers: {
          'Content-Type': 'application/json',
          "Authorization":"Bearer "+ localStorage.getItem("jwt")
        }
      })
      const data = response.json()
      console.log(data)
    }catch(e){
      console.log(e)
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Event</h2>
      <label htmlFor='title'></label>
      <input type="text" required value={title} onChange={e=>setTitle(e.target.value)}/>
      <label htmlFor='desc'>Description </label>
      <input type="text" required value={desc} onChange={e=>setDesc(e.target.value)}/>
      <label htmlFor='duration'>Duration</label>
      <input type="number" value={duration} onChange={e=>setDuration(e.target.value)} />
      <label htmlFor='capacity'>Capacity</label>
      <input type="number" value={capacity} onChange={e=>setCapacity(e.target.value)}></input>
      <label htmlFor='doorTime'>Door Time</label>
      <input type="datetime-local" onChange={e=>setDoorTime(e.target.value)}/>
      <label htmlFor='endTime'>End Time</label>
      <input type="datetime-local"  onChange={e=>setEndTime(e.target.value)}/>
      <label htmlFor='location'>Address</label>
      <input type="location" value={location} onChange={e=>setLocation(e.target.value)} />
      <label htmlFor='isFree'></label>
      <select name="isFree" onChange={(e) => setIsFree(e.target.value)}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <label htmlFor='eventStatus'>Event Status</label>
      <select>
        <option value="comingSoon">Comming Soon</option>
        <option value="started">Started</option>
        <option value="ended">Ended</option>
      </select>
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateEvent