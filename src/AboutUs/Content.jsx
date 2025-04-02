import React from 'react'

const Content = ({content,show}) => {
  return (
    <div>
        <div className="fixed inset-0 bg-white bg-opacity-95 flex justify-center items-center p-6">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full grid md:grid-cols-2 gap-8 p-8 animate-fadeIn">
              <div className="flex justify-center items-center">
                <img
                  src={content.img}
                  alt={content.name}
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="flex flex-col justify-center text-left">
                <h2 className="text-3xl font-bold text-gray-800">{content.name}</h2>
                <p className="text-lg text-blue-600 font-semibold mt-2">{content.title}</p>
                <p className="text-gray-600 mt-4">
                  <span className="font-semibold">Age:</span> {content.age || 'Not Provided'}
                </p>
                <p className="text-gray-600 mt-4">
                  <span className="font-semibold">id:</span> {content.id || 'Not Provided'}
                </p>
                <p className="text-gray-600 mt-2 mb-4">
                  <span className="font-semibold">Info:</span> {content.info || 'No additional info'}
                </p>

                <button
                  className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all "
                  onClick={() => show()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Content
   