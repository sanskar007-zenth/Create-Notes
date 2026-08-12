import React, { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  function submithandler(e){
    e.preventDefault()
    const Copytask = [...task]
    Copytask.push({Title,details})
    settask(Copytask)

    setTitle('')
    setdetails('')
  }

  return (
    <div className='min-h-screen w-full flex gap-10 bg-zinc-950 text-white p-8'>

      <div className='w-1/2 min-h-screen flex items-center justify-center'>
        <form 
          onSubmit={function(e){
            submithandler(e)
          }} 
          className='w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl flex flex-col gap-6'
        >

          <div>
            <h1 className='text-3xl font-bold mb-2'>
              Create a Note
            </h1>

            <p className='text-zinc-400 text-sm'>
              Add a title and some details to your note.
            </p>
          </div>

          <input 
            className='w-full px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white outline-none placeholder:text-zinc-500 focus:border-white focus:ring-2 focus:ring-white/10 transition'
            type="text" 
            placeholder='Project title'
            value={Title}
            onChange={function(e){
              setTitle(e.target.value)
            }}
          />

          <input
            className='w-full px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white outline-none placeholder:text-zinc-500 focus:border-white focus:ring-2 focus:ring-white/10 transition'
            type="text" 
            placeholder='Details of the project'
            value={details}
            onChange={function(e){
              setdetails(e.target.value)
            }}
          />

          <button
            className='w-full py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 active:scale-[0.98] transition duration-200'
          >
            ADD NOTE
          </button>

        </form>
      </div>


      <div className='w-1/2 min-h-screen bg-zinc-900/40 border border-zinc-900 rounded-3xl p-8'>

        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold'>
            Your Notes
          </h2>

          <span className='text-sm text-zinc-500'>
            {task.length} notes
          </span>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          {task.map(function(elem,idx){
            return (
              <div 
                key={idx} 
                className='bg-zinc-800 border border-zinc-700 min-h-48 rounded-2xl p-6 hover:border-zinc-500 hover:-translate-y-1 transition duration-200 shadow-lg'
              >

                <h4 className='text-white font-bold text-lg break-words'>
                  {elem.Title}
                </h4>

                <p className='text-zinc-400 mt-3 text-sm leading-6 break-words'>
                  {elem.details}
                </p>

              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default App