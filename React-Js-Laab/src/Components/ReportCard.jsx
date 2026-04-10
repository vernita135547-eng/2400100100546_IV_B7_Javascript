import React from 'react'

function ReportCard(){
     //Step1: Data (Array of Objects)
     const students = [  { id: 1, name: 'Vernita' , marks: 100 },
                         { id: 1, name: 'Vanshika' , marks: 92 },
                         { id: 1, name: 'Paheli' , marks: 98 }, 
                         { id: 1, name: 'Gungun' , marks: 58 },
                         { id: 1, name: 'Shafali' , marks: 20 },
                         { id: 1, name: 'Aditi' , marks: 56 },
                         { id: 1, name: 'Alpana' , marks: 43 },
                         { id: 1, name: 'Adu' , marks: 62 },
     ]

    return (
        //Step2: Page Wrapper
        <div className = 'min-h-screen bg-gray-100 p-6'>
              {/* Card Container */}
               <div className = 'max-w-md mx-auto bg-white rounded-lg shadow-md'>
                  {/* Title */}
                  <h2 className = 'text-2xl font-bold mb-4 text-blue-600 text-center'>
                    Students' Result
                  </h2>
                  
                  {/* Step3: List Rendering */}
                  <ul> 
                    {
                        students.map( (student)=>( 
                           // Step4: For each item
                            <li key = {student.id}
                                className = 'flex justify-between items-center border p-3 rounded'
                            >
                                {/* Student Name */}
                                <div>
                                    <span className = 'text-gray-800 font-medium'>{student.name}
                                    </span>

                                    {/* Step5: TopperBadge */}
                                    {
                                        students.marks > 70 && ( 
                                            <span className = 'ml-3 text-sm text-blue-600'>(Topper)</span>
                                        )
                                    }
                                </div>
                                {/* Step6: Conditional Rendering (Pass/Fail) */}
                                <span className = { student.marks >=40 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold' }>
                                    {
                                        students.marks >=40 ? 'Passed' : 'Failed'
                                    }
                                </span>
                            </li>
                        ) )
                    }
                  </ul>

              </div>
        </div>
     )
}

export default ReportCard