import Image from 'next/image'
import { Inter } from 'next/font/google'
import { members } from 'public/dataSamples/getMembers.js'

const inter = Inter({ subsets: ['latin'] });
const data = members.response.data
console.log(data)

export default function MembersPage() {
return (
    
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Membership</h2>
                {/*<p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                suspendisse.
                </p>*/}
            </div>
            {data.length>0 && ( //&& means if true (see conditional rendering in react manual. https://react.dev/learn/conditional-rendering)
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {data.map((member) => (
                            <li key={member.fieldData.__ID}>
                                <div className="flex items-center gap-x-6">
                                    <Image className="h-16 w-16 rounded-full" src={member.fieldData.image} alt="" width={200} height={200}/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.fieldData.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-gray-600">{member.fieldData.nameBusiness}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    )}
                </ul>
                )
            }
        </div>
    </div>
    
)
}
